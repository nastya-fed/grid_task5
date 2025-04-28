const express = require('express');
const app = express();
const port = 8081; // Бэкенд работает на порту 8081

// Эндпоинт для обработки запросов с фронтенда
app.get('/', (req, res) => {
  res.send('Hello from Backend!');
});

app.listen(port, () => {
  console.log(`Backend is listening at http://localhost:${port}`);
});
