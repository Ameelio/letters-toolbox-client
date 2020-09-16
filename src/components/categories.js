import * as React from "react";
import { DeleteButton, List, Datagrid, TextField, ImageField, Edit, ImageInput, SimpleForm, TextInput, required, EditButton, Create } from 'react-admin';

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
export function loadImageUrl(value) {
  if (!value || typeof value === "string") {
    return { url: value};
  } else {
    return value;
  }
}

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
