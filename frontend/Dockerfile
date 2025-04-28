# Используем Node.js для сборки
FROM node:22-alpine as build

WORKDIR /app

# Копируем package.json и устанавливаем зависимости
COPY frontend/package*.json ./
RUN npm install

# Копируем весь проект
COPY frontend/ .

# Строим проект
RUN npm run build

# Используем Nginx для раздачи статических файлов
FROM nginx:alpine

# Копируем собранные файлы в папку Nginx
COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
