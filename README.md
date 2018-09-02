# UI Interactions

Node.js application where we can send, store and retrieve user interactions. An interaction is something like “user X has clicked on this button” or “user X viewed page Y” (think Google Analytics Events). Interactions are always objects with a set type (think redux actions). We would prefer the API uses GraphQL but feel free to use something like REST if it suits your app better.


## Install
```sh
## Frontend Side 
npm install

##  Server side 
cd server
npm install
```
## Run Server 
```sh
cd server
Need Docker Community Edition installed: `docker-compose up`
npm run start

Server Running on port 4050

http://localhost:4050/
http://localhost:4050/graphql

```