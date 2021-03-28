FROM node:latest

RUN mkdir -p /usr/src/spotz-car
WORKDIR /usr/src/spotz-car

COPY . /usr/src/spotz-car/
RUN npm install

RUN npm run build

EXPOSE 5000

ENV NUXT_HOST=0.0.0.0

ENV NUXT_PORT=5000

CMD [ "npm", "start" ]
