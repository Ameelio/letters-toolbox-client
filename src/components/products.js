import * as React from 'react';
import { loadImageUrl } from '../utils/helper';
import { Filter, EditButton, List, Datagrid, TextField, NumberInput, FunctionField, BooleanField, Create, SimpleForm, TextInput, ImageInput, ImageField, BooleanInput, required, Edit } from 'react-admin';

const ProductsFilter = (props) => (
  <Filter {...props}>
    <TextInput label="Search" source="q" alwaysOn />
  </Filter>
);

export const ProductsList = props => (
  <List filters={<ProductsFilter />}  {...props}>
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
      <ImageInput form={ loadImageUrl } source="thumbnail_src" title="thumbnail_src" label="Image" accept="image/*">
        <ImageField source="url" />
      </ImageInput>
      <BooleanInput label="Premium" source="premium" defaultValue={false} />
      <NumberInput source="cost" label="Unit cost (in cents e.g $4.99 = 499)"  validate={required()}/>
    </SimpleForm>
  </Create>
);

export const ProductsEdit = props => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput disabled label="ID" source="id" />
      <TextInput source="name" validate={required()} />
      <TextInput source="price" validate={required()} />
      <NumberInput source="cost" label="Unit cost (in cents e.g $4.99 = 499)"  validate={required()}/>
      <ImageInput form={ loadImageUrl } source="thumbnail_src" title="thumbnail_src" label="Image" accept="image/*">
        <ImageField source="url" />
      </ImageInput>
      <BooleanInput label="Premium" source="premium" />
    </SimpleForm>
  </Edit>
);
