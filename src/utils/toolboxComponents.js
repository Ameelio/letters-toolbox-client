import * as React from "react";
import { Link, useMutation, Button } from 'react-admin';

export const LobField = ({ source, record = {} }) =>
  <a href={"https://dashboard.lob.com/#/letters/" + record[source]}>{record[source]}</a>;
LobField.defaultProps = { label: 'Lob ID' };

export const RefundButton = ({ record }) => {
  const [refund] = useMutation({
    type: 'refundTransaction',
    resource: 'credit-transactions',
    payload: { id: record.id }
  });

  return (
    <Button label="Refund" onClick={refund} />
  )
};

export const AssignOrgUserButton = ({ record }) => (
  <Button
    component={Link}
    to={{
      pathname: "/org-users/create",
      state: { record: { org_id: record.id }}
    }}
    label="Add Org User"
  />
);

export const CreateCreditTransactionButtion = ({ record }) => (
  <Button
    component={Link}
    to={{
      pathname: "/credit-transactions/create",
      state: {record: {user_id: record.id}}
    }}
    label="Add Credit Transaction"
  />
);
