# Expense Tracker

## [Live Site](https://expense-tracker-ts-mern.surge.sh)
<img src="./preview.gif" />

## Introduction
Full-stack Expense Tracker App using React Context API on frontend and Express & MongoDB on backend, all with TypeScript.

## Setup

Clone this repository:
```bash
git clone https://github.com/SaadFarhanIdress/expense-tracker-ts-mern
```
Go to root directory of repository and install dependencies:
```bash 
cd expense-tracker-ts-mern
npm install
cd client 
npm install
cd ..
```
Change `.env` files:

- A MongoDB URI looks like this:
```
mongodb+srv://{dbUsername}:{dbPassword}@{dbServername}.mongodb.net/{dbName}?retryWrites=true&w=majority
```
- Set the `./config/.env_prod` file according to the following and rename it to `.env`:
```bash
# ./config/prod_env
DB_USERNAME=dbUsername
DB_PASSWORD=dbPassword
DB_SERVER=dbServername
DB_NAME=dbName
PORT=4000
NODE_ENV=development
```
- Rename `./client/src/context/.env_prod` to `.env` and change the `SERVER_URL` env if you want:
```bash
# ./client/.env_prod
REACT_APP_SERVER_URL=http://localhost:4000
```
Running Scripts
```bash
# Run front and backend
npm run dev
 
# Backend only
npm run server
 
# Frontend only
npm run client
 
# Build client
cd client
npm run build

# Prod
npm start
```