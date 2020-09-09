import * as React from "react";
import { List, Datagrid, TextField, ImageField, Edit, ImageInput, SimpleForm, TextInput, required, EditButton, Create } from 'react-admin';

export const CategoriesList = props => (
  <List {...props}>
    <Datagrid>
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="blurb" />
      <ImageField source="img_src" title="Image"/>
      <EditButton />
    </Datagrid>
  </List>
);

export const CategoriesCreate = props => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="name" />
      <TextInput source="blurb" />
      <ImageInput source="img_src" label="Image" accept="image/*">
        <ImageField source="src" />
      </ImageInput>
    </SimpleForm>
  </Create>
);

export const CategoriesEdit = props => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput disabled label="Id" source="id" />
      <TextInput source="name" validate={required()} />
      <TextInput source="blurb" validate={required()} />
      <ImageInput source="img_src" label="Image" accept="image/*">
        <ImageField source="src" />
      </ImageInput>
    </SimpleForm>
  </Edit>
);
