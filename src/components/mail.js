import * as React from "react";
import { ArrayField, BooleanField, UrlField, FunctionField, TextField, Show, SimpleShowLayout, List, Datagrid, DateField, ReferenceField } from 'react-admin';
import { LobField } from '../utils/toolboxComponents';

export const MailList = props => (
  <List {...props}>
    <Datagrid rowClick="show">
      <TextField source="id" />
      <ReferenceField label="Sender Name" source="user_id" reference="users">
        <FunctionField render={record => `${record.first_name} ${record.last_name}`} />
      </ReferenceField>
      <ReferenceField label="Sender Email" source="user_id" reference="users">
        <TextField source="email" />
      </ReferenceField>
      <ReferenceField label="Contact" source="contact_id" reference="contacts" >
        <FunctionField render={record => `${record.first_name} ${record.last_name}`} />
      </ReferenceField>
      <ReferenceField label="Facility Address" source="contact_id" reference="contacts">
        <FunctionField render={record => `${record.facility_address} ${record.facility_city}, ${record.facility_state} ${record.facility_postal}`} />
      </ReferenceField>
    </Datagrid>
  </List>
);

export const MailShow = props => (
  <Show {...props}>
    <SimpleShowLayout>
      <TextField source="id" />
      <LobField label="Lob ID" source="lob_id" />
      <DateField label="Last Lob Status Update" source="last_lob_status_update" />
      <DateField source="estimated_arrival" />
      <TextField label="Lob Status" source="lob_status" />
      <TextField source="type" />
      <UrlField label="View PDF" source="pdf_url" />
      <ReferenceField label="To" source="contact_id" reference="contacts">
        <FunctionField render={record => `${record.first_name} ${record.last_name}`} />
      </ReferenceField>
      <ReferenceField label="Facility Address" source="contact_id" reference="contacts">
        <FunctionField label="Facility Address" render={record => `${record.facility_address} ${record.facility_city}, ${record.facility_state} ${record.facility_postal}`} />
      </ReferenceField>
      <ReferenceField label="From" source="user_id" reference="users">
        <FunctionField render={record => `${record.first_name} ${record.last_name}`} />
      </ReferenceField>
      <ReferenceField label="Return Address" source="user_id" reference="users">
        <FunctionField render={record => `${record.addr_line_1} ${record.addr_line_2} ${record.city}, ${record.state} ${record.postal}`} />
      </ReferenceField>
      <ArrayField source="products">
        <Datagrid>
          <TextField source="id" />
          <TextField source="name" />
          <FunctionField source="premium" label="Premium" render={(record,source) =>
            <BooleanField record={{...record, premium:!!record.premium}} source={source}/>}/>
          <TextField source="price" />
        </Datagrid>
      </ArrayField>
      <TextField source="page_count" />
    </SimpleShowLayout>
  </Show>
);
