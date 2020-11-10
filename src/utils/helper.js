import fetchTimeout from 'fetch-timeout';
import url from 'url';
import { fetchUtils } from 'react-admin';

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
    case 'v1/categories':
      data.append('type', 'compose');
      data.append('file', params.data.img_src.rawFile);
      break;
    case 'v1/designs':
      data.append('type', 'designs');
      data.append('file', params.data.img_src.rawFile);
    case 'v1/products':
      data.append('type', 'premium_thumbnail');
      data.append('file', params.data.img_src.rawFile);
  }

  const response = await fetchTimeout(
    url.resolve(process.env.REACT_APP_API_URL, 'file/upload'),
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

export function loadImageUrl(value) {
  if (!value || typeof value === "string") {
    return { url: value};
  } else {
    return value;
  }
}
