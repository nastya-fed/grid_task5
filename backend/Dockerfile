# Используем Node.js для серверной части
FROM node:22-alpine

WORKDIR /app

# Копируем package.json и устанавливаем зависимости
COPY backend/package*.json ./
RUN npm install

# Копируем все файлы
COPY backend/ .

# Прокси бэкенд-приложения на порт 8081
EXPOSE 8081

# Запускаем приложение
CMD ["node", "backend.js"]
