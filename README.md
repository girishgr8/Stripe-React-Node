# Integrate Stripe Payments with ReactJS and NodeJS

![Made-With-React](https://img.shields.io/badge/Made_with-React-informational?style=for-the-badge&logo=react) ![Made-With-NodeJS](https://img.shields.io/badge/Made_with-NodeJS-informational?style=for-the-badge&logo=nodedotjs) ![Made-With-Material_UI](https://img.shields.io/badge/Made_with-Tailwind_CSS-informational?style=for-the-badge&logo=tailwindcss) ![Made-With-MySQL](https://img.shields.io/badge/Made_with-MySQL-informational?style=for-the-badge&logo=mysql)

## Try Out Live:

#### You can try out the Stripe Payments at the URL: [https://stripe-react-node.vercel.app/](https://stripe-react-node.vercel.app/ "Stripe React Node Website")

Use the demo test card numbers from the following URL: [**https://docs.stripe.com/testing?testing-method=card-numbers**](https://docs.stripe.com/testing?testing-method=card-numbers "Stripe Test Cards")

## About

**"Integrate Stripe Payments with ReactJS and NodeJS"** is a full stack application developed using ReactJS, NodeJS and Tailwind CSS. The user clicks on "Purchase" button on home page and gets redicted to Payment Info page where user enters his card details. Then request is sent to process by the stripe's library and if payment is successful user will get redirect to Payment Success page.

**I have published a step by step article using this project on GeeksForGeeks. You can click [HERE](https://www.geeksforgeeks.org/how-to-integrate-stripe-payments-in-react-app-using-express/ "Article Link") to view.**

## Quick Start

#### Step 1: Clone the repository:

```bash
git clone https://github.com/girishgr8/Stripe-React-Node.git
```

#### Step 2: Install dependencies for frontend and backend

```bash
# Install dependencies for backend
npm install --prefix backend

# Install dependencies for frontend
npm install --prefix frontend
```

##### **NOTE** : You can see the sample .env.example which will contain the environment variables. Replace the values with your own KEYS/SECRETS/URLs and rename the file to .env instead of .env.example

#### Step 3: Start the NodeJS backend

Open a terminal and type the below command:

```bash
# Go inside the backend folder
cd backend
# Start the NodeJS server
npm start
```

#### Step 4: Start the ReactJS frontend

Open another terminal and type the below command:

```bash
# Go inside the frontend folder
cd frontend
# Start the React App
npm start
```

##### NOTE: Backend(Node) runs on [http://localhost:4000](http://localhost:4000 "NodeJS Backend") and Frontend(React) on [http://localhost:3000](http://localhost:3000 "ReactJS Frontend").

## Demo :

![Demo](https://github.com/girishgr8/Stripe-React-Node/blob/main/demo.gif)

## License

This project is licensed under the MIT License - see the [LICENSE.md](https://github.com/girishgr8/Stripe-React-Node/blob/main/LICENSE "LICENSE") file for details.

<h1 align="center"><b>Developed with :heart: by <a href="https://girishgr8.github.io/" target="_blank">Girish Thatte</a></b></h1>
