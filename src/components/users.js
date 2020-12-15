import * as React from "react";
import { BooleanField, ShowButton, DeleteButton, SelectInput, Pagination, FunctionField, Filter, ReferenceField, FormTab, TabbedForm, SingleFieldList, ReferenceManyField, required, Datagrid, TextField, List, EditButton, TextInput, SimpleForm, Edit, Create } from 'react-admin';
import { LobField, RefundButton } from '../utils/toolboxComponents';

const UserFilter = (props) => (
  <Filter {...props}>
    <TextInput label="Search" source="q" alwaysOn />
  </Filter>
);

const referrerChoices = [
  {id: 'Ameelio Ambassador', name: 'Heard from an Ameelio Ambassador'},
  {id: 'Recommendation from Friends or Family', name: 'Recommendation from Friends or Family'},
  {id: 'Incarcerated Loved-One', name: 'Incarcerated Loved-One'},
  {id: 'Facebook/Instagram', name: 'Facebook/Instagram'},
  {id: 'News/Radio/TV', name: 'News/Radio/TV'},
  {id: 'Internet search', name: 'Internet search'},
  {id: 'Other', name: 'Other'}
];

export const UsersList = props => (
  <List filters={<UserFilter />} {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="first_name" />
      <TextField source="last_name" />
      <TextField source="email" />
      <FunctionField label="Address" render={record => `${record.addr_line_1} ${record.addr_line_2} ${record.city}, ${record.state} ${record.postal}`} />
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
      <TextInput label="Credits" source="credit" validate={required()} />
      <TextInput lavel="Tokens" source="coins" validate={required()} />
      <TextInput source="credit_reset" validate={required()} />
      <SelectInput disabled source="referer" choices={referrerChoices} />
    </FormTab>

    <FormTab label="Contacts">
      <ReferenceManyField reference="contacts" label="Contacts" target="_nested_users_id">
        <Datagrid rowClick="edit">
          <TextField source="id" />
          <TextField source="first_name" />
          <TextField source="last_name" />
          <TextField source="facility_name" />
          <FunctionField label="Facility Address" render={record => `${record.facility_address} ${record.facility_city}, ${record.facility_state} ${record.facility_postal}`} />
          <TextField source="inmate_number" />
          <TextField source="relationship" />
          <EditButton />
          <DeleteButton />
        </Datagrid>
      </ReferenceManyField>
    </FormTab>

    <FormTab label="Mail">
      <ReferenceManyField reference="mail" label="Mail" target="_nested_users_id" pagination={<Pagination/>}>
        <Datagrid>
          <TextField source="id" />
          <LobField source="lob_id" />
          <TextField source="created_at" />
          <TextField source="contact_name" />
          <TextField source="status" />
          <ReferenceField label="Contact" source="contact_id" reference="contacts">
            <FunctionField render={record => `${record.first_name} ${record.last_name}`} />
          </ReferenceField>
          <ShowButton />
        </Datagrid>
      </ReferenceManyField>
    </FormTab>

    <FormTab label="Transactions">
      <ReferenceManyField reference="credit-transactions" label="Credit Transactions" target="_nested_users_id">
        <Datagrid>
          <TextField source="id" />
          <TextField source="created_at" />
          <TextField source="status" />
          <FunctionField source="premium" label="Premium" render={(record,source) =>
            <BooleanField record={{...record,premium:!!record.premium}} source={source}/>}/>
          <TextField source="price" />
          <TextField label="Letter ID" source="letter_id" />
          <RefundButton />
        </Datagrid>
      </ReferenceManyField>

      <ReferenceManyField reference="stripe-transactions" label="Stripe Transactions" target="_nested_users_id">
        <Datagrid>
          <TextField source="id" />
          <TextField source="amount" />
          <TextField source="status" />
          <ReferenceField source="pack_id" reference="packs" label="Pack">
            <TextField source="name" />
          </ReferenceField>
        </Datagrid>
      </ReferenceManyField>
    </FormTab>
    </TabbedForm>
  </Edit>
);
