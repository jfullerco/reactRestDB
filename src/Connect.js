import React from 'react';

var request = require("request");

var options = { method: 'GET',
  url: 'https://tiems-d1ca.restdb.io/rest/clients',
  headers: 
   { 'cache-control': 'no-cache',
     'x-apikey': '11a5b5d7052c116ebf744abb41855b163c317' } };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});