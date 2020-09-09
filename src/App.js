import * as React from "react";
import { fetchUtils, Admin, Resource, ListGuesser } from 'react-admin';
import authProvider from './authProvider';
import simpleRestProvider from 'ra-data-simple-rest';
import { CategoriesList, CategoriesEdit, CategoriesCreate } from './categories';
import dataProvider from './dataProvider';
import { DesignsList } from './designs';
import { SubcategoriesList } from './subcategories';

const App = () => (
    <Admin authProvider={authProvider} dataProvider={dataProvider}>
      <Resource name="admin-categories" list={ CategoriesList } edit={ CategoriesEdit } create={ CategoriesCreate } />
      <Resource name="admin-designs" list={ DesignsList } />
      <Resource name="admin-subcategories" list={ SubcategoriesList } />
    </Admin>
);
export default App;
