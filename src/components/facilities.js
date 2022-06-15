import * as React from "react";
import {
  Filter,
  SearchInput,
  SelectInput,
  EditButton,
  DeleteButton,
  List,
  TextField,
  Datagrid,
  Edit,
  SimpleForm,
  TextInput,
  BooleanInput,
  Create,
  required,
} from "react-admin";

const states = [
  { id: "AL", name: "Alabama" },
  { id: "AK", name: "Alaska" },
  { id: "AZ", name: "Arizona" },
  { id: "AR", name: "Arkansas" },
  { id: "CA", name: "California" },
  { id: "CO", name: "Colorado" },
  { id: "CT", name: "Connecticut" },
  { id: "DE", name: "Delaware" },
  { id: "DC", name: "District Of Columbia" },
  { id: "FL", name: "Florida" },
  { id: "GA", name: "Georgia" },
  { id: "HI", name: "Hawaii" },
  { id: "ID", name: "Idaho" },
  { id: "IL", name: "Illinois" },
  { id: "IN", name: "Indiana" },
  { id: "IA", name: "Iowa" },
  { id: "KS", name: "Kansas" },
  { id: "KY", name: "Kentucky" },
  { id: "LA", name: "Louisiana" },
  { id: "ME", name: "Maine" },
  { id: "MD", name: "Maryland" },
  { id: "MA", name: "Massachusetts" },
  { id: "MI", name: "Michigan" },
  { id: "MN", name: "Minnesota" },
  { id: "MS", name: "Mississippi" },
  { id: "MO", name: "Missouri" },
  { id: "MT", name: "Montana" },
  { id: "NE", name: "Nebraska" },
  { id: "NV", name: "Nevada" },
  { id: "NH", name: "New Hampshire" },
  { id: "NJ", name: "New Jersey" },
  { id: "NM", name: "New Mexico" },
  { id: "NY", name: "New York" },
  { id: "NC", name: "North Carolina" },
  { id: "ND", name: "North Dakota" },
  { id: "OH", name: "Ohio" },
  { id: "OK", name: "Oklahoma" },
  { id: "OR", name: "Oregon" },
  { id: "PA", name: "Pennsylvania" },
  { id: "RI", name: "Rhode Island" },
  { id: "SC", name: "South Carolina" },
  { id: "SD", name: "South Dakota" },
  { id: "TN", name: "Tennessee" },
  { id: "TX", name: "Texas" },
  { id: "UT", name: "Utah" },
  { id: "VT", name: "Vermont" },
  { id: "VA", name: "Virginia" },
  { id: "WA", name: "Washington" },
  { id: "WV", name: "West Virginia" },
  { id: "WI", name: "Wisconsin" },
  { id: "WY", name: "Wyoming" },
];
const FacilitiesFilter = (props) => (
  <Filter {...props}>
    <SearchInput source="q" alwaysOn />
    <SelectInput source="state" choices={states} />
  </Filter>
);

export const FacilitiesList = (props) => (
  <List {...props} filters={<FacilitiesFilter />}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="full_name" />
      <TextField source="address" />
      <TextField source="city" />
      <TextField source="state" />
      <TextField source="postal" />
      <TextField source="type" />
      <TextField source="phone" />
      <EditButton />
      <DeleteButton />
    </Datagrid>
  </List>
);

export const FacilitiesEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput disabled source="id" />
      <TextInput source="name" />
      <TextInput source="full_name" />
      <TextInput source="address" />
      <TextInput source="city" />
      <TextInput source="state" />
      <TextInput source="postal" />
      <TextInput source="type" />
      <BooleanInput label="Federal" source="federal" />
      <TextInput source="phone" />
      <TextInput source="link" />
      <TextInput source="unique" />
    </SimpleForm>
  </Edit>
);

export const FacilitiesCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="name" validate={required()} />
      <TextInput source="full_name" validate={required()} />
      <TextInput source="address" validate={required()} />
      <TextInput source="city" validate={required()} />
      <TextInput source="state" validate={required()} />
      <TextInput source="postal" validate={required()} />
      <TextInput source="type" />
      <BooleanInput label="Federal" source="federal" />
      <TextInput source="phone" />
      <TextInput source="link" />
      <TextInput source="unique" />
    </SimpleForm>
  </Create>
);
