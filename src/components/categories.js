import * as React from "react";
import { DeleteButton, List, Datagrid, TextField, ImageField, Edit, ImageInput, SimpleForm, TextInput, required, EditButton, Create } from 'react-admin';
import { loadImageUrl } from '../utils/helper';

export const CategoriesList = props => (
  <List {...props}>
    <Datagrid>
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="blurb" />
      <ImageField source="img_src" title="Image"/>
      <EditButton />
      <DeleteButton />
    </Datagrid>
  </List>
);

export const CategoriesCreate = props => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="name" />
      <TextInput source="blurb" />
      <ImageInput form={ loadImageUrl } source="img_src" title="img_src" label="Image" accept="image/*">
        <ImageField source="url" />
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
      <ImageInput format={ loadImageUrl } source="img_src" label="Image" accept="image/*">
        <ImageField source="url" />
      </ImageInput>
    </SimpleForm>
  </Edit>
);
