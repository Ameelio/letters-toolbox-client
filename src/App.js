import * as React from "react";
import { Admin, Resource } from 'react-admin';
import authProvider from './providers/authProvider';
import { CategoriesList, CategoriesEdit, CategoriesCreate } from './components/categories';
import { DesignsList, DesignsEdit, DesignsCreate } from './components/designs';
import { SubcategoriesList, SubcategoriesEdit, SubcategoriesCreate } from './components/subcategories';
import { VolunteersList, VolunteersEdit, VolunteersCreate } from './components/volunteers';
import { CollectionsList, CollectionsEdit, CollectionsCreate } from './components/collections';
import { UsersList, UsersEdit } from './components/users';
import { ProductsList, ProductsEdit, ProductsCreate } from './components/products';
import { FacilitiesList, FacilitiesEdit, FacilitiesCreate } from './components/facilities';
import baseDataProvider from './providers/baseDataProvider';

const App = () => (
    <Admin authProvider={authProvider} dataProvider={ baseDataProvider }>
      <Resource name="admin-designs" options={{ label: "Designs" }} list={ DesignsList } edit={ DesignsEdit } create={ DesignsCreate } />
      <Resource name="admin-categories" options={{ label: "Categories" }} list={ CategoriesList } edit={ CategoriesEdit } create={ CategoriesCreate } />
      <Resource name="admin-subcategories" options={{ label: "Subcategories" }} list={ SubcategoriesList } edit={ SubcategoriesEdit } create={ SubcategoriesCreate } />
      <Resource name="volunteers" options={{ label: "Volunteers" }} list={ VolunteersList } edit={ VolunteersEdit } create={ VolunteersCreate } />
      <Resource name="collections" options={{ label: "Collections" }} list={ CollectionsList } edit={ CollectionsEdit } create={ CollectionsCreate } />
      <Resource name="products" options={{ label: "Products" }} list={ ProductsList } edit={ ProductsEdit } create={ ProductsCreate } />
      <Resource name="v1/users" options={{ label: "Users" }} list={ UsersList } edit={ UsersEdit } />
      <Resource name="v1/letters" />
      <Resource name="v1/facilities" options={{ label: "Facilities" }} list={ FacilitiesList } edit={ FacilitiesEdit } create={ FacilitiesCreate }/>
    </Admin>
);
export default App;
