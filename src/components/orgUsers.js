import * as React from "react";
import { TextField, SelectInput, Edit, SimpleForm, TextInput, Create } from 'react-admin';

const redirect = (basePath, id, data) => `/orgs/${data.org_id}`;

export const OrgUsersEdit = props => (
  <Edit {...props}>
    <SimpleForm redirect={redirect}>
      <TextField source="id" />
      <TextField source="name" />
      <TextField label="Org ID" source="org_id" />
      <TextField label="User ID" source="user_id" />
      <TextField source="email" />
      <SelectInput source="role" choices={ [{id: 'member', name: 'Member'}, {id: 'admin', name: 'Admin'}] } />
    </SimpleForm>
  </Edit>
);

export const OrgUsersCreate = props => (
  <Create {...props}>
    <SimpleForm redirect={redirect}>
      <TextInput source="org_id" />
      <TextInput source="user_email" />
      <SelectInput source="role" choices={ [{id: 'member', name: 'Member'}, {id: 'admin', name: 'Admin'}] } />
    </SimpleForm>
  </Create>
);
