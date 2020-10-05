import * as React from "react";
import { DeleteButton, EditButton, List, Datagrid, TextField, ReferenceField, DateField, ImageField, SimpleForm, TextInput, Edit, Create, required } from 'react-admin';

export const SubcategoriesList = props => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="name" />
      <DateField source="created_at" />
      <DateField source="updated_at" />
      <TextField source="design_category_id" />
      <EditButton />
      <DeleteButton />
    </Datagrid>
  </List>
);

export const SubcategoriesEdit = props => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput disabled source="id" />
      <TextInput source="name" validate={required()} />
      <TextInput source="category" validate={required()}/>
    </SimpleForm>
  </Edit>
);

export const SubcategoriesCreate = props => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="name" validate={required()} />
      <TextInput source="category" validate={required()} />
    </SimpleForm>
  </Create>
);
