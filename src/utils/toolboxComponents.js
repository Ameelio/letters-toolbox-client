import * as React from "react";
import { useMutation, Loading, Error, Button } from 'react-admin';

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
    <Button label="Refund" onClick={refund}/>
  )
};
