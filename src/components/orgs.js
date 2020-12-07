import * as React from "react";
import {ReferenceArrayInput, SelectArrayInput, FunctionField, BooleanInput, BooleanField, ArrayInput, SimpleFormIterator, ReferenceInput, SelectInput, DeleteButton, EditButton, List, Datagrid, TextField, ReferenceField, DateField, ImageField, Create, Edit, SimpleForm, TextInput, required, ImageInput } from 'react-admin';

export const OrgsList = props => (
  <List {...props}>
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
