import simpleRestProvider from 'ra-data-simple-rest';
import { uploadImage, create, fetchJson } from '../utils/helper';
import { stringify } from 'query-string';
import { fetchUtils, DataProvider } from 'ra-core';

const dataProvider = simpleRestProvider(process.env.REACT_APP_API_URL, fetchJson);

const baseDataProvider = {
  ...dataProvider,
  getList: (resource, params) => {
    return dataProvider.getList(resource, params)
      .then(resp => ({
        data: resp.data.data,
        total: resp.total,
      }));
  },

  getOne: (resource, params) => {
    return dataProvider.getOne(resource, params)
      .then(resp => ({
        data: resp.data.data,
      }));
  },

  getMany: (resource, params) => {
    return dataProvider.getMany(resource, params)
      .then(resp => ({
        data: resp.data.data,
      }));
  },

  getManyReference: (resource, params) => {
      return dataProvider.getManyReference(resource, params)
        .then(resp => ({
          data: resp.data.data,
          total: resp.total,
        }));
  },

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
            data: {...params.data, asset_src: s3_img_url},
          });
        }
      });
  },

  create: (resource, params) => {
    // if (resource !== 'admin-categories' && resource !== 'admin-designs' && !params.data.img_src && resource !== 'products') {
    if (!params.data.img_src) {
      console.log(params.data);
      console.log("here");
      return create(resource, params.data, params);
    }

    return uploadImage(resource, params)
      .then (s3_img_url => {
        switch (resource) {
          case 'v1/categories':
            return create(resource, {...params.data, img_src: s3_img_url}, params);
          case 'v1/designs':
            return create(resource, {...params.data, asset_src: s3_img_url}, params);
          case 'v1/products':
            return create(resource, {...params.data, thumbnail_src: s3_img_url}, params);
        }
      });
  },
};

export default baseDataProvider;
