import fetchTimeout from 'fetch-timeout';
import url from 'url';
import { fetchUtils } from 'react-admin';
import { stringify } from 'query-string';

export const countHeader: string = 'Content-Range';

export const fetchJson = (url, options = {}) => {
  const token = localStorage.getItem('token');
  if (!options.headers) {
    options.headers = new Headers({ Accept: 'application/json'});
  }
  options.headers.set('Authorization', `Bearer ${token}`);
  return fetchUtils.fetchJson(url, options);
}

export async function uploadImage(resource, params) {
  const data = new FormData();

  switch (resource) {
    case 'categories':
      data.append('type', 'compose');
      data.append('file', params.data.img_src.rawFile);
      break;
    case 'designs':
      data.append('type', params.data.type);
      data.append('file', params.data.asset_src.rawFile);
      break;
    case 'products':
      data.append('type', 'thumbnail');
      data.append('file', params.data.thumbnail_src.rawFile);
      break;
    case 'packet':
      data.append('type', 'packet');
      data.append('file', params.data.thumbnail_src.rawFile);
      break;
  }

  const response = await fetchTimeout(
    url.resolve(process.env.REACT_APP_URL, 'file/upload'),
    {
      method: 'POST',
      headers: new Headers({ Accept: 'application/json'}),
      body: data,
    },
    30000
  );

  const body: ApiResponse = await response.json();
  if ( body.status !== 'OK') throw body;

  const s3_img_url = body.data;
  return s3_img_url;
};

export async function loginRequest(params) {
  const response = await fetchTimeout(
    url.resolve(process.env.REACT_APP_URL, 'api/login'),
      {
        method: 'POST',
        body: JSON.stringify(params),
        headers: new Headers({ 'Content-Type': 'application/json'}),
      },
      30000
    );

  const body: ApiResponse = await response.json();
  if (body.status !== 'OK') throw body;

  return body.data;
};

export async function create(resource, body, params) {
  return fetchJson(`${process.env.REACT_APP_API_URL}/${resource}`, {
      method: 'POST',
      body: JSON.stringify(body),
    })
    .then(({ json }) => ({
        data: { ...params.data, id: json.data.id },
    }));
};

export async function createPacket(resource, body, params) {
  return uploadImage("packet", params)
    .then(thumbnail_url => {
      return create(resource, {...body, thumbnail_src: thumbnail_url}, params);
    });
};

export async function update(resource, params) {
  return fetchJson(`${process.env.REACT_APP_API_URL}/${resource}/${params.id}`, {
    method: 'PUT',
    body: JSON.stringify(params.data),
  })
  .then (({ json }) => ({
    data: {...json.data, id: json.data.id},
  }));
};

export async function updatePacket(resource, params) {
  return uploadImage("packet", params)
    .then(thumbnail_url => {
      params.data = {...params.data, thumbnail_src: thumbnail_url};
      return update(resource, params);
    });
};

export async function getManyReference(resource, params, endpoint) {
  const { page, perPage } = params.pagination;
  const { field, order } = params.sort;
  const rangeStart = (page - 1) * perPage;
  const rangeEnd = page * perPage - 1;
  const query = {
    sort: JSON.stringify([field, order]),
    range: JSON.stringify([(page - 1) * perPage, page * perPage - 1]),
  };
  const options =
    countHeader === 'Content-Range'
      ? {
        headers: new Headers({
          Range: `${resource}=${rangeStart}-${rangeEnd}`,
        }),
      } : {};

  return fetchJson(`${process.env.REACT_APP_API_URL}/${endpoint}?${stringify(query)}`, {
    method: 'GET',
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
};

export async function refundCreditTransaction(resource, params) {
  const endpoint = `credit-transactions/${params.id}/refund`;
  return fetchJson(`${process.env.REACT_APP_API_URL}/${endpoint}`, {
    method: 'GET'
  })
  .then(({json}) => {
    return {
      data: json.data
    };
  });
};

export function loadImageUrl(value) {
  console.log("hello?");
  if (!value || typeof (value) === "string") {
    console.log("string");
    return { url: value};
  } else {
    console.log(value);
    return value;
  }
};
