import * as React from "react";
import { TextInput, SimpleForm, Create, SelectInput, BooleanInput } from 'react-admin';

// const redirect = (basePath, id, data) => `/users/${data.user_id}`;

export const CreditTransactionsCreate = props => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="user_id" />
      <SelectInput source="type" choices={ [{id: 'gift', name: 'Gift'}, {id: 'referral', name: 'Referral'}] } />
      <TextInput source="price" />
      <BooleanInput label="Premium" source="premium" defaultValue={false}/>
    </SimpleForm>
  </Create>
);
