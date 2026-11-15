const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.json({
    message: ' Prem Hello from Abbas CI/CD pipeline',
    version: 'v2',
    commit: process.env.COMMIT_SHA || 'local'
  });
});

app.get('/health', (req, res) => res.json({ status: 'ok' }));

module.exports = app;