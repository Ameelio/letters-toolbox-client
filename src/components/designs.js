import * as React from "react";
import { DeleteButton, EditButton, List, Datagrid, TextField, ReferenceField, DateField, ImageField, Create, Edit, SimpleForm, TextInput, required, ImageInput } from 'react-admin';
import { loadImageUrl } from '../utils/helper';

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
      <EditButton />
      <DeleteButton />
    </Datagrid>
  </List>
);

export const DesignsEdit = props => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput disabled label="ID" source="id" />
      <TextInput source="name" validate={required()} />
      <TextInput source="type" validate={required()} />
      <TextInput source="subcategory" validate={required()} />
      <TextInput source="back" />
      <ImageInput format={ loadImageUrl } source="front_img_src" label="Image" accept="image/*" validate={required()}>
        <ImageField source="url" />
      </ImageInput>
    </SimpleForm>
  </Edit>
);

export const DesignsCreate = props => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="name" validate={required()} />
      <TextInput source="type" validate={required()} />
      <TextInput source="subcategory" validate={required()} />
      <TextInput source="back" />
      <ImageInput format={ loadImageUrl } source="front_img_src" label="Image" accept="image/*" validate={required()}>
        <ImageField source="url" />
      </ImageInput>
    </SimpleForm>
  </Create>
);
