import * as React from "react";
import { List, Datagrid, TextField, ReferenceField, DateField, ImageField } from 'react-admin';

export const SubcategoriesList = props => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="name" />
      <DateField source="created_at" />
      <DateField source="updated_at" />
      <TextField source="design_category_id" />
    </Datagrid>
  </List>
);
