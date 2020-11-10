import * as React from "react";
import { ReferenceArrayInput, SelectArrayInput, FormDataConsumer, FileInput, FileField, FunctionField, BooleanInput, BooleanField, ArrayInput, SimpleFormIterator, ReferenceInput, SelectInput, DeleteButton, EditButton, List, Datagrid, TextField, ReferenceField, DateField, ImageField, Create, Edit, SimpleForm, TextInput, required, ImageInput } from 'react-admin';
import { loadImageUrl } from '../utils/helper';
import { useFormState } from 'react-final-form';

const types = [
  { id: 'postcard', name: 'Postcard'},
  { id: 'letter', name: 'Letter' },
  { id: 'packet', name: 'Packet'}
];

const DesignUpload = props => {
  const { values } = useFormState();
  return (
    values.type === 'postcard' ?
      <ImageInput format={ loadImageUrl } source="asset_src" label="Image" accept="image/*" validate={required()} {...props}>
        <ImageField source="url" />
      </ImageInput> :

      <FileInput source="asset_src" label="PDF" accept="application/pdf" validate={required()} {...props}>
        <FileField source="src" title="title" />
      </FileInput>
  );
};

export const DesignsList = props => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <DateField source="created_at" />
      <TextField source="name" />
      <ImageField source="thumbnail_src" title="image"/>
      <ReferenceField label="Subcategory" source="subcategory_id" reference="v1/subcategories">
        <TextField source="name" />
      </ReferenceField>
      <ReferenceField label="Collection" source="design_collection_id" reference="v1/collections">
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
      <SelectInput source="type" validate={required()} choices={ types } />
      <ReferenceInput label="Subcategory" source="subcategory_id" reference="v1/subcategories" validate={required()}>
        <SelectInput optionText="name" />
      </ReferenceInput>
      <ReferenceInput label="Collection" source="design_collection_id" reference="v1/collections" validate={required()}>
        <SelectInput optionText="name" />
      </ReferenceInput>
      <BooleanInput label="Active" source="active" />
      <ReferenceInput label="Product" source="product_id" reference="v1/products" validate={required()}>
        <SelectInput optionText="name" />
      </ReferenceInput>
      <TextInput source="blurb" />
      <DesignUpload />
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
      <SelectInput source="type" validate={required()} choices={ types } />
      <ReferenceInput label="Subcategory" source="subcategory_id" reference="v1/subcategories" validate={required()}>
        <SelectInput optionText="name" />
      </ReferenceInput>
      <ReferenceInput label="Collection" source="design_collection_id" reference="v1/collections" validate={required()}>
        <SelectInput optionText="name" />
      </ReferenceInput>
      <BooleanInput label="Active" source="active" />
      <ReferenceInput label="Product" source="product_id" reference="v1/products" validate={required()}>
        <SelectInput optionText="name" />
      </ReferenceInput>
      <TextInput source="blurb" />
      <ImageInput format={ loadImageUrl } source="img_src" label="Image" accept="image/*" validate={required()}>
        <ImageField source="url" />
      </ImageInput>
      <ReferenceArrayInput label="Volunteers" source="volunteer_ids" reference="v1/volunteers">
        <SelectArrayInput optionText="first_name" />
      </ReferenceArrayInput>
    </SimpleForm>
  </Create>
);
