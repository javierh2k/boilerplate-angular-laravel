FROM node:9-alpine
LABEL name=frontend-angular version=latest

# Install yarn and other dependencies via apk
RUN apk update \
  && apk add --no-cache tzdata \
  && cp /usr/share/zoneinfo/US/Eastern /etc/localtime \
  && echo "US/Eastern" > /etc/timezone \
  && apk del tzdata \
  && apk add --no-cache make gcc g++ python yarn vim \
  && rm -rf /var/lib/apt/lists/* \
  /var/cache/apk/* \
  /usr/share/man \
  /tmp/*

RUN npm config set registry "http://registry.npmjs.org"
WORKDIR /app

#COPY proyect
COPY . .

# Install all the packages
RUN npm install -g @angular/cli
RUN yarn install --network-timeout 1000000
#-- production to production server

EXPOSE 4200

CMD npm start &
#["yarn", "start", " & "]
#start to production
