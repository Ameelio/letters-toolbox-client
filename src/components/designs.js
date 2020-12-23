import * as React from "react";
import { FilterLiveSearch, ReferenceArrayInput, SelectArrayInput, FileInput, FileField, FunctionField, BooleanInput, BooleanField, ReferenceInput, SelectInput, DeleteButton, EditButton, List, Datagrid, TextField, ReferenceField, DateField, ImageField, Create, Edit, SimpleForm, TextInput, required, ImageInput } from 'react-admin';
import { loadImageUrl } from '../utils/helper';
import { useFormState } from 'react-final-form';
import { IsActiveFilter, DesignTypeFilter } from '../utils/filters';
import { Card as MuiCard, CardContent, withStyles } from '@material-ui/core';

const types = [
  { id: 'postcard', name: 'Postcard'},
  { id: 'sticker', name: 'Sticker' },
  { id: 'packet', name: 'Packet'}
];

const Card = withStyles(theme => ({
    root: {
        [theme.breakpoints.up('sm')]: {
            order: -1,
            width: '15em',
            marginRight: '1em',
        },
        [theme.breakpoints.down('sm')]: {
            display: 'none',
        },
    },
}))(MuiCard);

const FilterSidebar = () => (
  <Card>
    <CardContent>
      <FilterLiveSearch source="q" />
      <IsActiveFilter />
      <DesignTypeFilter />
    </CardContent>
  </Card>
);

const DesignUpload = props => {
  const { values } = useFormState();
  switch (values.type) {
    case 'packet':
      return (
        <div>
          <ImageInput format={ loadImageUrl } source="thumbnail_src" label="Thumbnail" accept="image/*" validate={required()} {...props}>
            <ImageField source="url" />
          </ImageInput>
          <FileInput source="asset_src" label="PDF" accept="application/pdf" validate={required()} {...props}>
            <FileField source="src" title="title" />
          </FileInput>
        </div>
      );
    default:
      return (
        <ImageInput format={ loadImageUrl } source="asset_src" label="Image" accept="image/*" validate={required()} {...props}>
          <ImageField source="url" />
        </ImageInput>
      );
  }
};

export const DesignsList = props => (
  <List {...props} aside={<FilterSidebar />}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <DateField source="created_at" />
      <TextField source="name" />
      <TextField source="type" />
      <ImageField source="thumbnail_src" title="image"/>
      <ReferenceField label="Subcategory" source="subcategory_id" reference="subcategories" sortBy="name">
        <TextField source="name" />
      </ReferenceField>
      <FunctionField source="active" label="Active" render={(record,source) =>
        <BooleanField record={{...record,active:!!record.active}} source={source}/>}/>
      <EditButton label="Edit"/>
      <DeleteButton label="Delete"/>
    </Datagrid>
  </List>
);

export const DesignsEdit = props => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput disabled label="ID" source="id" />
      <TextInput source="name" validate={required()} />
      <SelectInput source="type" validate={required()} choices={ types } />
      <ReferenceInput label="Subcategory" source="subcategory_id" reference="subcategories" perPage={100} validate={required()}>
        <SelectInput optionText="name" />
      </ReferenceInput>
      <BooleanInput label="Active" source="active" defaultValue={true}/>
      <ReferenceInput label="Product" source="product_id" perPage={100} reference="products" validate={required()}>
        <SelectInput optionText="name" />
      </ReferenceInput>
      <TextInput source="blurb" />
      <DesignUpload />
      <ReferenceArrayInput label="Volunteers" source="volunteer_ids" reference="volunteers">
        <SelectArrayInput optionText="first_name" />
      </ReferenceArrayInput>
    </SimpleForm>
  </Edit>
);

export const DesignsCreate = props => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="name" validate={required()} />
      <SelectInput source="type" validate={required()} choices={ types } />
      <ReferenceInput label="Subcategory" source="subcategory_id" reference="subcategories" perPage={100} validate={required()}>
        <SelectInput optionText="name" />
      </ReferenceInput>
      <BooleanInput label="Active" source="active" />
      <ReferenceInput label="Product" source="product_id" reference="products" perPage={100} validate={required()}>
        <SelectInput optionText="name" />
      </ReferenceInput>
      <TextInput source="blurb" />
      <DesignUpload />
      <ReferenceArrayInput label="Volunteers" source="volunteer_ids" reference="volunteers">
        <SelectArrayInput optionText="first_name" />
      </ReferenceArrayInput>
    </SimpleForm>
  </Create>
);
