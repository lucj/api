FROM mhart/alpine-node:6.10.3

COPY package.json /tmp/package.json

RUN cd /tmp && npm install

RUN mkdir /app && mv /tmp/node_modules /app/

COPY . /app/

WORKDIR /app

EXPOSE 80

CMD ["npm", "start"]
