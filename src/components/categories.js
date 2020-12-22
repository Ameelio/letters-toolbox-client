import * as React from "react";
import { SelectInput, BooleanInput, BooleanField, FunctionField, DeleteButton, List, Datagrid, TextField, ImageField, Edit, ImageInput, SimpleForm, TextInput, required, EditButton, Create } from 'react-admin';
import { loadImageUrl } from '../utils/helper';

const types = [
  { id: 'compose', name: 'Compose'},
  { id: 'sticker', name: 'Sticker'},
  { id: 'shop', name: 'Shop'},
];

export const CategoriesList = props => (
  <List {...props}>
    <Datagrid>
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="type" />
      <ImageField source="img_src" title="Image"/>
      <FunctionField source="active" label="Active" render={(record,source) =>
        <BooleanField record={{...record,active:!!record.active}} source={source}/>}/>
      <EditButton />
      <DeleteButton />
    </Datagrid>
  </List>
);

export const CategoriesCreate = props => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="name" validate={required()}/>
      <TextInput source="blurb" />
      <ImageInput form={ loadImageUrl } source="img_src" title="img_src" label="Image" accept="image/*">
        <ImageField source="url" />
      </ImageInput>
      <BooleanInput label="Premium" source="premium" />
      <BooleanInput label="Active" source="active" />
      <SelectInput source="type" choices={types}/>
    </SimpleForm>
  </Create>
);

export const CategoriesEdit = props => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput disabled label="Id" source="id" />
      <TextInput source="name" validate={required()} />
      <TextInput source="blurb" />
      <BooleanInput label="Active" source="active" />
      <BooleanInput label="Premium" source="premium" />
      <ImageInput format={ loadImageUrl } source="img_src" label="Image" accept="image/*">
        <ImageField source="url" />
      </ImageInput>
      <SelectInput source="type" choices={types}/>
    </SimpleForm>
  </Edit>
);
