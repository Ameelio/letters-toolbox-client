import * as React from "react";
import { List, Datagrid, TextField } from 'react-admin';

export const CategoriesList = props => (
  <List {...props}>
    <Datagrid>
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="blurb" />
    </Datagrid>
  </List>
);
