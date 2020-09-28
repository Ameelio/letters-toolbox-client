import { fetchUtils } from 'react-admin';
import simpleRestProvider from 'ra-data-simple-rest';
import { uploadImage, create, fetchJson } from '../utils/helper';

const dataProvider = simpleRestProvider(process.env.REACT_APP_API_URL, fetchJson);

const baseDataProvider = {
  ...dataProvider,
  // getList: (resource, params) => {
  //   dataProvider.getList(resource, params)
  //     .then(response => {
  //       return {
  //         data: response.data,
  //         total: response.total,
  //       }
  //     });
  // },

  update: (resource, params) => {
    if (resource !== 'admin-categories' && resource !== 'admin-designs' && !params.data.img_src) {
      return dataProvider.update(resource, params);
    }

    return uploadImage(resource, params)
      .then( s3_img_url => {
        switch (resource) {
          case 'admin-categories':
            return dataProvider.update(resource, { ...params,
              data: {...params.data, img_src: s3_img_url},
            });
          case 'admin-designs':
          return dataProvider.update(resource, { ...params,
            data: {...params.data, front_img_src: s3_img_url},
          });
        }
      });
  },

  create: (resource, params) => {
    if (resource !== 'admin-categories' && resource !== 'admin-designs' && !params.data.img_src) {
      return create(resource, params.data, params);
    }

    return uploadImage(resource, params)
      .then (s3_img_url => {
        switch (resource) {
          case 'admin-categories':
            return create(resource, {...params.data, img_src: s3_img_url}, params);
          case 'admin-designs':
            return create(resource, {...params.data, front_img_src: s3_img_url}, params);
        }
      });
  },
};

export default baseDataProvider;
