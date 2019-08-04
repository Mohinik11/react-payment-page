# React-Payment-Page

Payment Page will be available at "http://127.0.0.1:3000/checkout" which can be accessed by clicking the checkout option from menu at the top right of the page

## Getting started

### Prerequisites
  - nodejs + npm (or docker & docker-compose)

#### Run application without docker
  - go to the project root folder
  - run `npm i` to install all dependencies
  - run `npm start` to start the server (default port: 3000)
  - run `npm run server` to start the json-server (default port: 4000)

#### Run application with docker
  - go to the project root folder
  - run `docker-compose up`

Now you can visit "http://127.0.0.1:3000" to see the app running.
Right now the app expects the api (json-server) to be running on port 4000 and payment data will be vailable at "http://127.0.0.1:4000/paymentData"

## Running Test
  - go to the project root folder
  - run `npm test` to run test cases

## Components Structure Roadmap

### Pages
consists of

Home : Created for Home Page
About : Created for About Page
Checkout : contains Checkout Form and Order Details

### Components
It contains Components which are resusable for other pages and components, but specific to the functionalities whih they provide

Logo
OrderDetail
PaymentOptions

### Layout
It contains layout components

Footer
Header
MainLayout
Nav

### Store

It includes redux store and actions, dispatchers, services, constants

### UI
It contains general reusable components

FormControl
CheckBox


##Note regarding application: 
I have created React Application, also added json-server for API data binding. Setup can be done via docker or npm. 
Application should start at 3000 port or it will move to any other port itself , if 3000 is engaged in your system.
And json server should start at 4000. If 4000 port is already engaged in system, you will have to change it in package.json and env files.

Once application and json server are running, payment data will be available at checkout page.
I have also added few unit tests.