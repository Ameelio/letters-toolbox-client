import * as React from "react";
import { TabbedForm, FormTab, ReferenceManyField, Filter, FunctionField, BooleanInput, DeleteButton, EditButton, List, Datagrid, TextField, Create, Edit, SimpleForm, TextInput, required } from 'react-admin';
import { AssignOrgUserButton } from '../utils/toolboxComponents'

const OrgFilter = props => (
  <Filter {...props}>
    <TextInput label="Search" source="q" alwaysOn />
  </Filter>
);

export const OrgsList = props => (
  <List filters={ <OrgFilter /> } {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="business_name" />
      <TextField label="EIN" source="ein" />
      <FunctionField label="Address" render={record => `${record.address_line_1} ${record.address_line_2} ${record.city}, ${record.state} ${record.postal}`} />
      <EditButton />
      <DeleteButton />
    </Datagrid>
  </List>
);

export const OrgsEdit = props => (
  <Edit {...props}>
    <TabbedForm>
      <FormTab label="Org info">
        <TextInput disabled label="ID" source="id" />
        <TextInput source="name" validate={required()} />
        <TextInput label="Business Name" source="business_name" validate={required()} />
        <TextInput source="ein" validate={required()} />
        <TextInput label="Address Line 1" source="address_line_1" validate={required()} />
        <TextInput label="Address Line 2" source="address_line_2" />
        <TextInput source="city" validate={required()} />
        <TextInput source="state" validate={required()} />
        <TextInput source="postal" validate={required()} />
        <TextInput source="website" validate={required()} />
        <TextInput label="Color First Page" source="color_first_page_price" />
        <TextInput label="Color Extra Page" source="color_extra_page_price" />
        <TextInput label="B&W First Page" source="bw_first_page_price" />
        <TextInput label="B&W Extra Page" source="bw_extra_page_price" />
        <BooleanInput label="Legal" source="is_legal" />
      </FormTab>

      <FormTab label="Contacts">
        <ReferenceManyField reference="contacts" label="Contacts" target="_nested_orgs_id">
          <Datagrid>
            <TextField source="id" />
            <TextField source="first_name" />
            <TextField source="last_name" />
            <TextField source="facility_name" />
            <FunctionField label="Facility Address" render={record => `${record.facility_address} ${record.facility_city}, ${record.facility_state} ${record.facility_postal}`} />
            <EditButton />
            <DeleteButton />
          </Datagrid>
        </ReferenceManyField>
      </FormTab>

      <FormTab label="Volunteers">
        <AssignOrgUserButton />
        <ReferenceManyField reference="org-users" label="Users" target="_nested_orgs_id">
          <Datagrid>
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="role" />
            <TextField source="email" />
            <EditButton />
          </Datagrid>
        </ReferenceManyField>
      </FormTab>
    </TabbedForm>
  </Edit>
);

export const OrgsCreate = props => (
  <Create {...props}>
    <SimpleForm>
      <TextInput disabled label="ID" source="id" />
      <TextInput source="name" validate={required()} />
      <TextInput label="Business Name" source="business_name" validate={required()} />
      <TextInput source="ein" validate={required()} />
      <TextInput label="Address Line 1" source="address_line_1" validate={required()} />
      <TextInput label="Address Line 2" source="address_line_2" />
      <TextInput source="city" validate={required()} />
      <TextInput source="state" validate={required()} />
      <TextInput source="postal" validate={required()} />
      <TextInput source="website" validate={required()} />
      <TextInput label="Color First Page" source="color_first_page_price" />
      <TextInput label="Color Extra Page" source="color_extra_page_price" />
      <TextInput label="B&W First Page" source="bw_first_page_price" />
      <TextInput label="B&W Extra Page" source="bw_extra_page_price" />
      <BooleanInput label="Legal" source="is_legal" />
    </SimpleForm>
  </Create>
);
