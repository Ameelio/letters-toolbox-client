import * as React from "react";
import { Admin, Resource } from 'react-admin';
import authProvider from './providers/authProvider';
import { CategoriesList, CategoriesEdit, CategoriesCreate } from './components/categories';
import { DesignsList, DesignsEdit, DesignsCreate } from './components/designs';
import { SubcategoriesList, SubcategoriesEdit, SubcategoriesCreate } from './components/subcategories';
import { VolunteersList, VolunteersEdit, VolunteersCreate } from './components/volunteers';
import { CollectionsList, CollectionsEdit, CollectionsCreate } from './components/collections';
import baseDataProvider from './providers/baseDataProvider';

const App = () => (
    <Admin authProvider={authProvider} dataProvider={ baseDataProvider }>
      <Resource name="admin-designs" options={{ label: "Designs" }} list={ DesignsList } edit={ DesignsEdit } create={ DesignsCreate } />
      <Resource name="admin-categories" options={{ label: "Categories" }} list={ CategoriesList } edit={ CategoriesEdit } create={ CategoriesCreate } />
      <Resource name="admin-subcategories" options={{ label: "Subcategories" }} list={ SubcategoriesList } edit={ SubcategoriesEdit } create={ SubcategoriesCreate } />
      <Resource name="volunteers" list={ VolunteersList } edit={ VolunteersEdit } create={ VolunteersCreate } />
      <Resource name="collections" list={ CollectionsList } edit={ CollectionsEdit } create={ CollectionsCreate } />
    </Admin>
);
export default App;
