FROM node:22

WORKDIR /app

COPY ./backend/package*.json ./

RUN npm install

RUN apt-get update && \
    apt-get install -y --no-install-recommends libreoffice && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*


COPY ./backend .

EXPOSE 8080

CMD ["npm", "start"]
