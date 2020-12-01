import * as React from "react";
import { ReferenceInput, SelectInput, DeleteButton, EditButton, List, Datagrid, TextField, ReferenceField, DateField, SimpleForm, TextInput, Edit, Create, required } from 'react-admin';

export const SubcategoriesList = props => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="name" />
      <DateField source="created_at" />
      <DateField source="updated_at" />
      <ReferenceField label="Category" source="design_category_id" reference="admin-categories">
        <TextField source="name" />
      </ReferenceField>
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
      <ReferenceInput label="Category" source="design_category_id" reference="admin-categories" validate={required()}>
        <SelectInput optionText="name" />
      </ReferenceInput>
      <TextInput source="bg_color" validate={required()} />
    </SimpleForm>
  </Edit>
);

export const SubcategoriesCreate = props => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="name" validate={required()} />
      <ReferenceInput label="Category" source="design_category_id" reference="admin-categories" validate={required()}>
        <SelectInput optionText="name" />
      </ReferenceInput>
      <TextInput source="bg_color" validate={required()} />
    </SimpleForm>
  </Create>
);
