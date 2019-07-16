import React from 'react';

export const AlertsList = ({ alertsList }) => (
  alertsList.map(i => (<div className="App-alert">{i}</div>))
);