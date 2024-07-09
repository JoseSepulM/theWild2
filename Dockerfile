FROM node:20.14.0 AS build

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build --prod


FROM nginx:alpine

COPY --from=build /app/dist/the-wild2/browser /usr/share/nginx/html

EXPOSE 80

CMD ["nginx","-g","daemon off;"]

