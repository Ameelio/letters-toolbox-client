import * as React from "react";
import { fetchUtils, Admin, Resource, ListGuesser } from 'react-admin';
import authProvider from './authProvider';
import simpleRestProvider from 'ra-data-simple-rest';
import { CategoriesList } from './categories';
import dataProvider from './dataProvider';


const httpClient = (url, options = {}) => {
  const token = localStorage.getItem('token');
  if (!options.headers) {
    options.headers = new Headers({ Accept: 'application/json'});
  }
  options.headers.set('Authorization', `Bearer ${token}`);
  return fetchUtils.fetchJson(url, options);
}
// const dataProvider = simpleRestProvider('https://letters-api-staging.ameelio.org/api', httpClient);
const App = () => (
    <Admin authProvider={authProvider} dataProvider={dataProvider}>
      <Resource name="admin-categories" list={ListGuesser}/>
    </Admin>
);
export default App;
