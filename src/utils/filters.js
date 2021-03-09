import * as React from 'react';
import { FilterList, FilterListItem } from 'react-admin';

export const IsActiveFilter = () => (
  <FilterList label="Active">
    <FilterListItem label="True" value={{active: true}} />
    <FilterListItem label="False" value={{active: false}} />
  </FilterList>
);

export const IsColoredFilter = () => (
  <FilterList label="Color">
    <FilterListItem label="True" value={{color: true}} />
    <FilterListItem label="False" value={{color: false}} />
  </FilterList>
);

export const DesignTypeFilter = () => (
  <FilterList label="Type">
    <FilterListItem label="Postcard" value={{type: 'postcard'}} />
    <FilterListItem label="Packet" value={{type: 'packet'}} />
    <FilterListItem label="Sticker" value={{type: 'sticker' }} />
  </FilterList>
);
