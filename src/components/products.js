import * as React from 'react';
import { EditButton, List, Datagrid, TextField, NumberInput, FunctionField, BooleanField, Create, SimpleForm, TextInput, ImageInput, ImageField, BooleanInput, required, Edit } from 'react-admin';
import { loadImageUrl } from '../utils/helper';

export const ProductsList = props => (
  <List {...props}>
    <Datagrid>
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="price" />
      <ImageField source="thumbnail_src" title="image" />
      <FunctionField source="premium" label="Premium" render={(record, source) =>
        <BooleanField record={{...record, premium: !!record.premium}} source={source}/>}/>
      <EditButton />
    </Datagrid>
  </List>
);

export const ProductsCreate = props => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="name" validate={required()}/>
      <NumberInput source="price" validate={required()}/>
      <ImageInput form={ loadImageUrl } source="thumbnail_src" label="Image" accept="image/*">
        <ImageField source="url" />
      </ImageInput>
      <BooleanInput label="Premium" source="premium" defaultValue={false} />
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
