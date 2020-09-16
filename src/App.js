import * as React from "react";
import { Admin, Resource } from 'react-admin';
import authProvider from './providers/authProvider';
import { CategoriesList, CategoriesEdit, CategoriesCreate } from './components/categories';
import { DesignsList, DesignsEdit, DesignsCreate } from './components/designs';
import { SubcategoriesList, SubcategoriesEdit, SubcategoriesCreate } from './components/subcategories';
import myDataProvider from './providers/myDataProvider';

const App = () => (
    <Admin authProvider={authProvider} dataProvider={ myDataProvider }>
      <Resource name="admin-categories" list={ CategoriesList } edit={ CategoriesEdit } create={ CategoriesCreate } />
      <Resource name="admin-designs" list={ DesignsList } edit={ DesignsEdit } create={ DesignsCreate }/>
      <Resource name="admin-subcategories" list={ SubcategoriesList } edit={ SubcategoriesEdit } create={ SubcategoriesCreate }/>
    </Admin>
);
export default App;
