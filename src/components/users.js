import * as React from "react";
import { SingleFieldList, ReferenceManyField, required, Datagrid, TextField, List, EditButton, TextInput, SimpleForm, Edit, Create } from 'react-admin';

export const UsersList = props => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="first_name" />
      <TextField source="last_name" />
      <TextField source="email" />
      <ReferenceManyField label="Letters" reference="letters" target="user_id">
        <SingleFieldList>
          <TextField source="content"/>
        </SingleFieldList>
      </ReferenceManyField>
      <EditButton />
    </Datagrid>
  </List>
);

export const UsersEdit = props => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput disabled source="id" />
      <TextInput source="first_name" validate={required()} />
      <TextInput source="last_name" validate={required()} />
      <TextInput source="addr_line_1" validate={required()} />
      <TextInput source="addr_line_2" />
      <TextInput source="city" validate={required()} />
      <TextInput source="state" validate={required()} />
      <TextInput source="postal" validate={required()} />
      <TextInput source="country" validate={required()} />
      <TextInput source="credit_reset" validate={required()} />
    </SimpleForm>
  </Edit>
);

export const UsersCreate = props => (
  <Create {...props}>
    <SimpleForm>
      <TextInput disabled source="id" />
      <TextInput source="first_name" validate={required()} />
      <TextInput source="last_name" validate={required()} />
      <TextInput source="addr_line_1" validate={required()} />
      <TextInput source="addr_line_2" />
      <TextInput source="city" validate={required()} />
      <TextInput source="state" validate={required()} />
      <TextInput source="postal" validate={required()} />
      <TextInput source="country" validate={required()} />
      <TextInput source="credit_reset" validate={required()} />
    </SimpleForm>
  </Create>
);
