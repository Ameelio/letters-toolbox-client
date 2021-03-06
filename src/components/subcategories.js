import * as React from "react";
import { Filter, FunctionField, BooleanField, BooleanInput, ReferenceInput, SelectInput, DeleteButton, EditButton, List, Datagrid, TextField, ReferenceField, DateField, SimpleForm, TextInput, Edit, Create, required } from 'react-admin';

const SubcategoriesFilter = (props) => (
  <Filter {...props}>
    <TextInput label="Search" source="q" alwaysOn />
  </Filter>
);
export const SubcategoriesList = props => (
  <List {...props} filters={<SubcategoriesFilter />}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="name" />
      <DateField source="created_at" />
      <DateField source="updated_at" />
      <ReferenceField label="Category" source="design_category_id" reference="categories">
        <TextField source="name" />
      </ReferenceField>
      <FunctionField source="active" label="Active" render={(record,source) =>
        <BooleanField record={{...record,active:!!record.active}} source={source}/>}/>
      <EditButton />
      <DeleteButton />
    </Datagrid>
  </List>
);

export const SubcategoriesEdit = props => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput disabled source="id" />
      <TextInput source="name" validate={required()} />
      <ReferenceInput label="Category" source="design_category_id" reference="categories" validate={required()}>
        <SelectInput optionText="name" />
      </ReferenceInput>
      <TextInput source="bg_color" />
      <BooleanInput label="Active" source="active" defaultValue={true}/>
    </SimpleForm>
  </Edit>
);

export const SubcategoriesCreate = props => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="name" validate={required()} />
      <ReferenceInput label="Category" source="design_category_id" reference="categories" validate={required()}>
        <SelectInput optionText="name" />
      </ReferenceInput>
      <TextInput source="bg_color" />
      <BooleanInput label="Active" source="active" defaultValue={true}/>
    </SimpleForm>
  </Create>
);
