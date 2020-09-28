import * as React from "react";
import { SelectInput, DeleteButton, EditButton, List, Datagrid, TextField, ReferenceField, DateField, ImageField, Create, Edit, SimpleForm, TextInput, required, ImageInput } from 'react-admin';
import { loadImageUrl } from '../utils/helper';

export const DesignsList = props => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="name" />
      <ImageField source="thumbnail_src" title="image"/>
      <DateField source="created_at" />
      <TextField source="type" />
      <TextField source="back" />
      <ReferenceField label="Subcategory" source="subcategory_id" reference="admin-subcategories">
        <TextField source="name" />
      </ReferenceField>
      <ReferenceField label="Collection" source="design_collection_id" reference="collections">
        <TextField source="name" />
      </ReferenceField>
      <TextField source="active" />
      <TextField source="volunteer_ids" />
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
      <SelectInput source="type" validate={required()} choices={[
        { id: 'postcard', name: 'Postcard'},
        { id: 'letter', name: 'Letter' }
      ]} />
      <TextInput source="subcategory" validate={required()} />
      <TextInput source="active" />
      <TextInput source="back" />
      <ImageInput format={ loadImageUrl } source="front_img_src" label="Image" accept="image/*" validate={required()}>
        <ImageField source="url" />
      </ImageInput>
      <TextInput source="volunteer_ids" />
      <TextInput source="collection" />
    </SimpleForm>
  </Edit>
);

export const DesignsCreate = props => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="name" validate={required()} />
      <SelectInput source="type" validate={required()} choices={[
        { id: 'postcard', name: 'Postcard'},
        { id: 'letter', name: 'Letter' }
      ]} />
      <TextInput source="subcategory" validate={required()} />
      <TextInput source="active" />
      <TextInput source="back" />
      <ImageInput format={ loadImageUrl } source="front_img_src" label="Image" accept="image/*" validate={required()}>
        <ImageField source="url" />
      </ImageInput>
      <TextInput source="volunteer_ids" />
      <TextInput source="collection" />
    </SimpleForm>
  </Create>
);
