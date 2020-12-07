import * as React from "react";
import { ReferenceField, FormTab, TabbedForm, SingleFieldList, ReferenceManyField, required, Datagrid, TextField, List, EditButton, TextInput, SimpleForm, Edit, Create } from 'react-admin';

export const UsersList = props => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="first_name" />
      <TextField source="last_name" />
      <TextField source="email" />
      <EditButton />
    </Datagrid>
  </List>
);

export const UsersEdit = props => (
  <Edit {...props}>
    <TabbedForm>
    <FormTab label="user info">
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
      </FormTab>
      <FormTab label="Mail">
      <ReferenceManyField reference="mail" label="Mail" target="_nested_users_id">
        <Datagrid>
          <TextField source="id" />
          <TextField source="lob_id" />
          <TextField source="created_at" />
          <TextField source="contact_name" />
          <TextField source="status" />
        </Datagrid>
      </ReferenceManyField>
      </FormTab>
      <FormTab label="Transactions">
        <ReferenceManyField reference="credit-transactions" label="Credit Transactions" target="_nested_users_id">
          <Datagrid>
            <TextField source="id" />
            <TextField source="created_at" />
            <TextField source="letter_id" />
          </Datagrid>
        </ReferenceManyField>

        <ReferenceManyField reference="stripe-transactions" label="Stripe Transactions" target="_nested_users_id">
          <Datagrid>
            <TextField source="id" />
            <TextField source="amount" />
            <TextField source="status" />
            <ReferenceField source="pack_id" reference="pack" label="Pack">
              <TextField source="name" />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </FormTab>
    </TabbedForm>
  </Edit>
);
