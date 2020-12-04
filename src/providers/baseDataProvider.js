import simpleRestProvider from 'ra-data-simple-rest';
import { uploadImage, create, fetchJson, createPacket } from '../utils/helper';
import { stringify } from 'query-string';
import { fetchUtils, DataProvider } from 'ra-core';

const dataProvider = simpleRestProvider(process.env.REACT_APP_API_URL, fetchJson);
const countHeader = 'Content-Range';

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
    const { page, perPage } = params.pagination;
    const { field, order } = params.sort;

    const rangeStart = (page - 1) * perPage;
    const rangeEnd = page * perPage - 1;

    const query = {
      sort: JSON.stringify([field, order]),
      range: JSON.stringify([(page - 1) * perPage, page * perPage - 1]),
      filter: JSON.stringify(params.filter),
    };
    const options =
      countHeader === 'Content-Range'
      ? {
          headers: new Headers({
            Range: `${resource}=${rangeStart}-${rangeEnd}`,
          }),
        }
        : {};

      return fetchJson(`${process.env.REACT_APP_API_URL}/${resource}/${params.id}/${params.target}?${stringify(query)}`, {
        method: 'POST',
      })
      .then(({ headers, json }) => {
        if (!headers.has(countHeader)) {
          throw new Error(
            `The ${countHeader} header is missing in the HTTP Response. The simple REST data provider expects responses for lists of resources to contain this header with the total number of results to build the pagination. If you are using CORS, did you declare ${countHeader} in the Access-Control-Expose-Headers header?`
          );
        }

        return {
          data: json.data,
          total:
            countHeader === 'Content-Range'
            ? parseInt(headers.get('content-range').split('/').pop(), 10)
            : parseInt(headers.get(countHeader.toLowerCase()))
        };
      });
      // return dataProvider.getManyReference(resource, params)
      //   .then(resp => ({
      //     data: resp.data.data,
      //     total: resp.total,
      //   }));
  },

  update: (resource, params) => {
    if (!params.data.asset_src && !params.data.img_src) {
      return dataProvider.update(resource, params);
    }

    if (typeof params.data.img_src === "string") {
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
    if (!params.data.img_src && !params.data.asset_src) {
      return create(resource, params.data, params);
    }

    return uploadImage(resource, params)
      .then (s3_img_url => {
        switch (resource) {
          case 'admin-categories':
            return create(resource, {...params.data, img_src: s3_img_url}, params);
          case 'admin-designs':
            if (!params.data.asset_src) {
              return create(resource, {...params.data, asset_src: s3_img_url}, params);
            } else {
              return createPacket(resource, {...params.data, thumbnail_src: s3_img_url}, params);
            }
          case 'products':
            return create(resource, {...params.data, thumbnail_src: s3_img_url}, params);
        }
      });
  },
};

export default baseDataProvider;
