FROM node:20 as build

ENV NODE_ENV=production 

RUN npm install -g pnpm
WORKDIR /app

COPY .npmrc package.json pnpm-lock.yaml ./
RUN NODE_ENV=development pnpm install --frozen-lockfile --prod
COPY . ./
RUN pnpm run build


FROM node:alpine

WORKDIR /app
COPY --from=build /app .


ENV HOST=0.0.0.0
EXPOSE 4173
CMD ["npm","run", "preview","--", "--host", "0.0.0.0"]