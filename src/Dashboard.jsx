import React from "react";
import "./style.css";

var Airtable = require('airtable');
Airtable.configure({
    endpointUrl: 'https://api.airtable.com',
    apiKey: 'key7XQ8Is5o6z82BJ'
});
var base = Airtable.base('app3v5MjJ1b1OGZ1f');

export default function App() {
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
}
