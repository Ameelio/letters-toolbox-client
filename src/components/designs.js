import * as React from "react";
import { FunctionField, BooleanInput, BooleanField, ArrayInput, SimpleFormIterator, ReferenceInput, SelectInput, DeleteButton, EditButton, List, Datagrid, TextField, ReferenceField, DateField, ImageField, Create, Edit, SimpleForm, TextInput, required, ImageInput } from 'react-admin';
import { loadImageUrl } from '../utils/helper';

export const DesignsList = props => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <DateField source="created_at" />
      <TextField source="name" />
      <ImageField source="thumbnail_src" title="image"/>
      <ReferenceField label="Subcategory" source="subcategory_id" reference="admin-subcategories">
        <TextField source="name" />
      </ReferenceField>
      <ReferenceField label="Collection" source="design_collection_id" reference="collections">
        <TextField source="name" />
      </ReferenceField>
      <FunctionField source="active" label="Active" render={(record,source) =>
        <BooleanField record={{...record,active:!!record.active}} source={source}/>}/>
      <EditButton />
      <DeleteButton />
    </Datagrid>
  </List>
);

export const DesignsEdit = props => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput disabled label="ID" source="id" />
      <TextInput source="name" validate={required()} />
      <SelectInput source="type" validate={required()} choices={[
        { id: 'postcard', name: 'Postcard'},
        { id: 'letter', name: 'Letter' }
      ]} />
      <ReferenceInput label="Subcategory" source="subcategory_id" reference="admin-subcategories" validate={required()}>
        <SelectInput optionText="name" />
      </ReferenceInput>
      <ReferenceInput label="Collection" source="design_collection_id" reference="collections" validate={required()}>
        <SelectInput optionText="name" />
      </ReferenceInput>
      <BooleanInput label="Active" source="active" />
      <TextInput source="back" />
      <ImageInput format={ loadImageUrl } source="front_img_src" label="Image" accept="image/*" validate={required()}>
        <ImageField source="url" />
      </ImageInput>
      <ArrayInput source="volunteer_ids">
        <SimpleFormIterator>
          <TextInput />
        </SimpleFormIterator>
      </ArrayInput>
    </SimpleForm>
  </Edit>
);

export const DesignsCreate = props => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="name" validate={required()} />
      <SelectInput source="type" validate={required()} choices={[
        { id: 'postcard', name: 'Postcard'},
        { id: 'letter', name: 'Letter' }
      ]} />
      <ReferenceInput label="Subcategory" source="subcategory_id" reference="admin-subcategories" validate={required()}>
        <SelectInput optionText="name" />
      </ReferenceInput>
      <ReferenceInput label="Collection" source="design_collection_id" reference="collections" validate={required()}>
        <SelectInput optionText="name" />
      </ReferenceInput>
      <BooleanInput label="Active" source="active" />
      <TextInput source="back" />
      <ImageInput format={ loadImageUrl } source="front_img_src" label="Image" accept="image/*" validate={required()}>
        <ImageField source="url" />
      </ImageInput>
      <ArrayInput source="volunteer_ids">
        <SimpleFormIterator>
          <TextInput />
        </SimpleFormIterator>
      </ArrayInput>
    </SimpleForm>
  </Create>
);
