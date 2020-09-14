import { fetchUtils, Admin, Resource } from 'react-admin';
import simpleRestProvider from 'ra-data-simple-rest';

const fetchJson = (url, options = {}) => {
  const token = localStorage.getItem('token');
  if (!options.headers) {
    options.headers = new Headers({ Accept: 'application/json'});
  }
  options.headers.set('Authorization', `Bearer ${token}`);
  return fetchUtils.fetchJson(url, options);
}

const dataProvider = simpleRestProvider('http://localhost:8000/api', fetchJson);

const myDataProvider = {
  ...dataProvider,
  update: (resource, params) => {
    if (resource !== 'admin-categories' || resource !== 'admin-designs' || !params.data.img_src) {
      return dataProvider.update(resource, params);
    }

    const image = params.data.img_src;
    console.log(image);
    const data = new FormData();
    const uri = `file://${image.name}`;
    const photo = {
      name: image.name,
      type: 'image/jpeg',
      uri,
    };
    data.append('file', photo);
    data.append('type', image.type);

    const uploadImageRequest = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
      body: data
    };

    const s3_img_url = fetch('http://localhost:8000/file/upload', uploadImageRequest)
      .then(response => response.json());

    return dataProvider.update(resource, { ...params,
      data: {...params.data, img_src: data},
    });
  },

  create: (resource, params) => {
    if (resource !== 'admin-categories' && resource !== 'admin-designs' && !params.data.img_src) {
      return dataProvider.create(resource, params);
    }

    const image = params.data.img_src.rawFile;
    console.log(image);
    const data = new FormData();
    data.append('file', image);
    data.append('type', 'compose');

    const uploadImageRequest = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
      },
      body: data,
    };

    return fetch('http://localhost:8000/file/upload', uploadImageRequest)
      .then(response => response.json())
      .then( data => {
        const s3_img_url = data.data;
        console.log("s3: " + s3_img_url);
        const query = {
          "name": params.data.name,
          "blurb": params.data.blurb,
          "img_src": s3_img_url,
        };
        dataProvider.create(resource, { ...params,
          data: JSON.stringify(query),
        });
      })
      .catch(error => {
        console.error('error: ', error);
      });

    // console.log("s3: " + s3_img_url);

    // return dataProvider.create(resource, { ...params,
    //   data: {...params.data, img_src: s3_img_url},
    // });
  },
};

export default myDataProvider;
