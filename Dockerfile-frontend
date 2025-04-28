FROM node:22
WORKDIR /app
COPY frontend.js /app/
RUN npm init -y && npm install express axios
CMD ["node", "frontend.js"]
