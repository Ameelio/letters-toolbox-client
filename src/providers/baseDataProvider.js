import simpleRestProvider from 'ra-data-simple-rest';
import { uploadImage, create, fetchJson, createPacket, getManyReference, refundCreditTransaction, updatePacket } from '../utils/helper';

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
    const nested = /_nested_(.*)_id/g.exec(params.target);
    if (nested != null) {
      const endpoint = `${nested[1]}/${params.id}/${resource}`;
      return getManyReference(resource, params, endpoint);
    } else {
      return dataProvider.getManyReference(resource, params)
        .then(resp => ({
          data: resp.data.data,
          total: resp.total,
        }));
    }
  },

  update: (resource, params) => { // need to clean up!!
    if (!params.data.thumbnail_src && !params.data.img_src && !params.data.asset_src) {
      return dataProvider.update(resource, params);
    }

    switch (resource) {
      case 'categories':
        if (typeof (params.data.img_src) === "string") {
          return dataProvider.update(resource, params);
        }
        return uploadImage(resource, params)
          .then( s3_img_url => {
            params.data = {...params.data, img_src: s3_img_url};
            return dataProvider.update(resource, params);
          });
      case 'products':
        if (typeof (params.data.thumbnail_src) === "string") {
          return dataProvider.update(resource, params);
        }
        return uploadImage(resource, params)
          .then( s3_img_url => {
            params.data = {...params.data, thumbnail_src: s3_img_url};
            return dataProvider.update(resource, params);
          });
      case 'designs':
        if (params.data.type === "packet") {
          if (typeof (params.data.asset_src) === "string" && typeof (params.data.thumbnail_src) === "string") {
            return dataProvider.update(resource, params);
          } else if (typeof (params.data.asset_src) === "string" && typeof (params.data.thumbnail_src) !== "string") {
            return uploadImage("packet", params)
              .then( s3_img_url => {
                params.data = {...params.data, thumbnail_src: s3_img_url};
                return dataProvider.update(resource, params);
              });
          } else if (typeof (params.data.asset_src) !== "string" && typeof (params.data.thumbnail_src) === "string" ) {
            return uploadImage(resource, params)
              .then( s3_img_url => {
                params.data = {...params.data, asset_src: s3_img_url};
                return dataProvider.update(resource, params);
              });
          }
          return uploadImage(resource, params)
            .then( s3_img_url => {
              params.data = {...params.data, asset_src: s3_img_url};
              return updatePacket(resource, params);
            });

        } else if (typeof (params.data.asset_src) === "string") {
          return dataProvider.update(resource, params);
        }

        return uploadImage(resource, params)
          .then( s3_img_url => {
            params.data = {...params.data, asset_src: s3_img_url};
            return dataProvider.update(resource, params);
          });
        default:
          break
    }
  },

  create: (resource, params) => {
    if (!params.data.img_src && !params.data.asset_src && !params.data.thumbnail_src) {
      return create(resource, params.data, params);
    }

    return uploadImage(resource, params)
      .then (s3_img_url => {
        switch (resource) {
          case 'categories':
            return create(resource, {...params.data, img_src: s3_img_url}, params);
          case 'designs':
            if (params.data.type === 'packet') {
              return createPacket(resource, {...params.data, asset_src: s3_img_url}, params);
            }
            return create(resource, {...params.data, asset_src: s3_img_url}, params);
          case 'products':
            return create(resource, {...params.data, thumbnail_src: s3_img_url}, params);
          default:
            break;
        }
      });
  },

  refundTransaction: (resource, params) => {
    return refundCreditTransaction(resource, params);
  }
};

export default baseDataProvider;
