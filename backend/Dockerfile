FROM node:22
WORKDIR /app
COPY backend.js /app/
RUN npm init -y && npm install express
CMD ["node", "backend.js"]
