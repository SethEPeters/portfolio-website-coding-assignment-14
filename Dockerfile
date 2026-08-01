# FROM node:20-alpine

# WORKDIR /peters_seth_ui_garden_build_checks

# COPY package.json ./
# COPY package-lock.json ./
# RUN npm install

# COPY . ./

# EXPOSE 80

# CMD ["npm", "run", "storybook"]

##### THE ABOVE IS FOR STORYBOOK #####

#build environment
#Base Image as 18 to avoid errors
FROM node:20.9.0-alpine as build
#WORKDIR to what was it was asked to be
WORKDIR /peters_seth_final_site
#signify where to put the node modules when installing them
ENV PATH /peters_seth_final_site/node_modules/.bin:$PATH
#install app dependencies

COPY package.json ./
COPY package-lock.json ./
# RUN npm install react-scripts@3.4.1 -g
# RUN NODE_ENV=development npm i
RUN npm ci
#add app. Copy from here to container
COPY . ./
#Build the project environment
RUN npm run build

#production environment
#Set Base image for production environment
FROM node:20.9.0-alpine
#Copy from the build environment -- The path to the build -- the path to where nginx docker image looks to grab files from to serve
#to the browser
COPY --from=build /peters_seth_final_site ./
#Claim the port 80 to be listened to
EXPOSE 80
CMD ["npm", "start", "--", "-p", "80"]