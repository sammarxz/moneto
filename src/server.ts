import express from 'express';

const app = express();

app.get('/', (req, res) => {
  return res.json({ message: 'Hello Moneto' });
});

app.listen(3333, () => {
  console.log('🚀 server started on: http://localhost:3333');
});