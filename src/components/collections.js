import * as React from "react";
import { BooleanField, BooleanInput, FunctionField, DeleteButton, EditButton, List, Datagrid, TextField, SimpleForm, TextInput, Edit, Create, required } from 'react-admin';

export const CollectionsList = props => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="last_active" />
      <FunctionField source="active" label="Active" render={(record,source) =>
        <BooleanField record={{...record,active:!!record.active}} source={source}/>}/>
      <EditButton />
      <DeleteButton />
    </Datagrid>
  </List>
);

export const CollectionsEdit = props => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput disabled source="id" />
      <TextInput source="name" validate={required()} />
      <TextInput source="last_active" />
      <BooleanInput label="Active" source="active" />
    </SimpleForm>
  </Edit>
);

export const CollectionsCreate = props => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="name" validate={required()} />
      <TextInput source="active" />
      <BooleanInput label="Active" source="active" />
    </SimpleForm>
  </Create>
);
