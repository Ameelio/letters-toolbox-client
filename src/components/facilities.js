import * as React from "react";
import { EditButton, DeleteButton, List, TextField, Datagrid, FunctionField, BooleanField, Edit, SimpleForm, TextInput, BooleanInput, Create, required } from 'react-admin';

export const FacilitiesList = props => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id"/>
      <TextField source="full_name" />
      <TextField source="address" />
      <TextField source="city" />
      <TextField source="state" />
      <TextField source="postal" />
      <TextField source="type" />
      <TextField source="phone" />
      <EditButton />
      <DeleteButton />
    </Datagrid>
  </List>
);

export const FacilitiesEdit = props => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput disabled source="id" />
      <TextInput source="name" />
      <TextInput source="full_name" />
      <TextInput source="address" />
      <TextInput source="city" />
      <TextInput source="state" />
      <TextInput source="postal" />
      <TextInput source="type" />
      <BooleanInput label="Federal" source="federal" />
      <TextInput source="phone" />
      <TextInput source="link" />
    </SimpleForm>
  </Edit>
);

export const FacilitiesCreate = props => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="name" validate={required()}/>
      <TextInput source="full_name" validate={required()}/>
      <TextInput source="address" validate={required()}/>
      <TextInput source="city" validate={required()}/>
      <TextInput source="state" validate={required()}/>
      <TextInput source="postal" validate={required()}/>
      <TextInput source="type" />
      <BooleanInput label="Federal" source="federal" />
      <TextInput source="phone" />
      <TextInput source="link" />
    </SimpleForm>
  </Create>
);
