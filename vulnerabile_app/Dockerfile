FROM node:18.1.0

WORKDIR /opt/demo/service
COPY service/package.json /opt/demo/service/package.json
RUN npm install
COPY service /opt/demo/service

EXPOSE 1300
ENTRYPOINT ["node", "/opt/demo/service/server.js"]
