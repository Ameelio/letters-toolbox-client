import * as React from "react";
import { SelectInput, DeleteButton, EditButton, List, Datagrid, TextField, ReferenceField, DateField, ImageField, SimpleForm, TextInput, Edit, Create, required } from 'react-admin';

export const VolunteersList = props => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="first_name" />
      <TextField source="last_name" />
      <TextField source="type" />
      <TextField source="email" />
      <TextField source="active" />
      <EditButton />
      <DeleteButton />
    </Datagrid>
  </List>
);


export const VolunteersEdit = props => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput disabled source="id" />
      <TextInput source="first_name" validate={required()} />
      <TextInput source="last_name" validate={required()} />
      <SelectInput source="type" validate={required()} choices={[
        { id: 'designer', name: 'Designer'},
        { id: 'content_researcher', name: 'Content Researcher' }
      ]} />
      <TextInput source="email" validate={required()}/>
      <TextInput source="active" />
    </SimpleForm>
  </Edit>
);

export const VolunteersCreate = props => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="first_name" validate={required()} />
      <TextInput source="last_name" validate={required()} />
      <SelectInput source="type" validate={required()} choices={[
        { id: 'designer', name: 'Designer'},
        { id: 'content_researcher', name: 'Content Researcher' }
      ]} />
      <TextInput source="email" validate={required()} />
      <TextInput source="active" />
    </SimpleForm>
  </Create>
);
