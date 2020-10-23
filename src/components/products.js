import * as React from 'react';
import { List, Datagrid, TextField, FunctionField, BooleanField, Create, SimpleForm, TextInput, ImageInput, ImageField, BooleanInput, required, Edit } from 'react-admin';
import { loadImageUrl } from '../utils/helper';

export const ProductsList = props => (
  <List {...props}>
    <Datagrid>
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="price" />
      <FunctionField source="premium" label="Premium" render={(record, source) =>
        <BooleanField record={{...record, premium: !!record.premium}} source={source}/>}/>
    </Datagrid>
  </List>
);

export const ProductsCreate = props => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="name" validate={required()}/>
      <TextInput source="price" validate={required()}/>
      <ImageInput form={ loadImageUrl } source="thumbnail_src" label="Image" accept="image/*">
        <ImageField source="url" />
      </ImageInput>
      <BooleanInput label="Premium" source="premium" />
    </SimpleForm>
  </Create>
);

export const ProductsEdit = props => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput disabled label="ID" source="id" />
      <TextInput source="name" validate={required()} />
      <TextInput source="price" validate={required()} />
      <ImageInput form={ loadImageUrl } source="thumbnail_src" label="Image" accept="image/*">
        <ImageField source="url" />
      </ImageInput>
      <BooleanInput label="Premium" source="premium" />
    </SimpleForm>
  </Edit>
);
