Create a fresh Next.js project
(Next.js was needed as create-react-app would cause version issues with storybook and typescript)
npx create-next-app@latest component-library
cd component-library
npm install

Install Storybook
npx storybook@latest init

ensure clean dependency alignment
npm install react@latest react-dom@latest
npm install -D typescript@latest @types/react @types/react-dom

run Storybook
npm run storybook

Create your components
add components folder and make files of
component.stories.tsx
component.tests.tsx
component.types.tsx
component.tsx
index.ts

Create Stories (stories are saved states used to save stylings for use in production)

Create Tests

to run tests
npx vitest

**DOCKER**

In package.json found in the component library main directory change the line storybook line under scripts to "storybook": "storybook dev -p 80 --ci", to allow the files to be listened to upon port 80

\------DOCKERFILE--------

\# FROM node:20-alpine

\# WORKDIR /peters\_seth\_ui\_garden\_build\_checks

\# COPY package.json ./

\# COPY package-lock.json ./

\# RUN npm install

\# COPY . ./

\# EXPOSE 80

\# CMD \["npm", "run", "storybook"]

\##### THE ABOVE IS FOR STORYBOOK #####

\#build environment

\#Base Image as 18 to avoid errors

FROM node:20.9.0-alpine as build

\#WORKDIR to what was it was asked to be

WORKDIR /peters\_seth\_final\_site

\#signify where to put the node modules when installing them

ENV PATH /peters\_seth\_final\_site/node\_modules/.bin:$PATH

\#install app dependencies

COPY package.json ./

COPY package-lock.json ./

\# RUN npm install react-scripts@3.4.1 -g

\# RUN NODE\_ENV=development npm i

RUN npm ci

\#add app. Copy from here to container

COPY . ./

\#Build the project environment

RUN npm run build

\#production environment

\#Set Base image for production environment

FROM node:20.9.0-alpine

\#Copy from the build environment -- The path to the build -- the path to where nginx docker image looks to grab files from to serve

\#to the browser

COPY --from=build /peters\_seth\_final\_site ./

\#Claim the port 80 to be listened to

EXPOSE 80

CMD \["npm", "start", "--", "-p", "80"]

\------DOCKERIGNORE--------

node\_modules
build
.dockerignore
Dockerfile
Dockerfile.prod

docker build -t peters\_seth\_coding\_assignment14 .

docker run -it --rm -p 5575:80 --name peters\_seth\_coding\_assignment14 peters\_seth\_coding\_assignment14
