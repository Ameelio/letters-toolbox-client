import * as React from "react";
import { List, Datagrid, TextField, ReferenceField, DateField, ImageField } from 'react-admin';

export const DesignsList = props => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="name" />
      <ImageField source="thumbnail_src" title="image"/>
      <DateField source="created_at" />
      <DateField source="updated_at" />
      <TextField source="type" />
      <TextField source="back" />
      <TextField source="subcategory_id" />
    </Datagrid>
  </List>
);
