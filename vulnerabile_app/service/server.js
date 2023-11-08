const http = require('http');
const si = require('systeminformation');

var express = require('express');
var server = express();

server.get('/services', (req, res) => {
  if (!req.query.name)
  {
    req.query.name = "*"
  }
  
  //CVE-2021-21315
  si.services(req.query.name).then((data) => { 
  res.json(data);
  });
 
});

server.get('/ping', (req, res) => {
  if (!req.query.url)
  {
    req.query.url = "www.google.com"
  }
  
  si.inetChecksite(req.query.url).then((data) => { 
  res.json(data);
  });
 
});
  
server.listen(1300, () => console.log('demo...'))
