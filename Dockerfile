#Using Alpine base
FROM node:10-alpine

#Copying package.json
COPY package.json package-lock.json ./

#Installing node-modules and make ng-app directory
RUN npm install -g @angular/cli && npm ci && mkdir /ng-app && mv ./node_modules ./ng-app

#Changing working directory
WORKDIR /ng-app

#Copy project files
COPY . .

#Serve the Angular app in dev
CMD ["ng","serve","--host","0.0.0.0"]

#Docker Run command:
#docker run -p 8080:4200 containerid
#open localhost:8080 in browser
