import * as React from "react";

export const LobField = ({ source, record = {} }) =>
  <a href={"https://dashboard.lob.com/#/letters/" + record[source]}>{record[source]}</a>;
LobField.defaultProps = { label: 'Lob ID' };
