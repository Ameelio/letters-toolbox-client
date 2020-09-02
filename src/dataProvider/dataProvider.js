import * as React from "react";
import { fetchUtils } from 'react-admin';
import { stringify } from 'query-string';

const apiUrl = 'https://https://letters-api-staging.ameelio.org/api/';
const httpClient = fetchUtils.fetchJson;
