import * as React from "react";
import { DeleteButton, EditButton, List, Datagrid, TextField, ReferenceField, DateField, ImageField, SimpleForm, TextInput, Edit, Create, required } from 'react-admin';

export const CollectionsList = props => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="last_active" />
      <TextField source="active" />
      <EditButton />
      <DeleteButton />
    </Datagrid>
  </List>
);

export const CollectionsEdit = props => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput disabled source="id" />
      <TextInput source="name" validate={required()} />
      <TextInput source="last_active" />
      <TextInput source="active" />
    </SimpleForm>
  </Edit>
);

export const CollectionsCreate = props => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="name" validate={required()} />
      <TextInput source="active" />
      <TextInput source="last_active" />
    </SimpleForm>
  </Create>
);
