import * as React from "react";
import { Edit, SimpleForm, TextInput, required, Create } from 'react-admin';

export const ContactsEdit = props => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput disabled source="id" />
      <TextInput source="first_name" validate={required()} />
      <TextInput source="middle_name" />
      <TextInput source="last_name" validate={required()} />
      <TextInput source="inmate_number" validate={required()} />
      <TextInput source="facility_name" validate={required()} />
      <TextInput source="facility_address" validate={required()} />
      <TextInput label="Facility Unit" source="unit" />
      <TextInput label="Facility Dorm" source="dorm" />
      <TextInput source="facility_city" validate={required()} />
      <TextInput source="facility_state" validate={required()} />
      <TextInput source="facility_postal" validate={required()} />
    </SimpleForm>
  </Edit>
);
