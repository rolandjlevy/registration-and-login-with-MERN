## Registration & login with MERN stack

## Table of contents

- [Purpose](#purpose-)
- [Screenshot](#screenshot-)
- [Links](#links-)
- [Setup](#setup-)
- [Technologies](#technologies-)
- [Features](#features-)
- [Reference](#reference-)
- [Contact](#contact-)

---

## Purpose 🎯

The aim of this project is to make an application using the MERN stack which allows a user to register, login and view their details

## Screenshot 📷

![homepage](./client/src/images/screen-grab-homepage.jpg)
![modal](./client/src/images/screen-grab-modal.jpg)

## Links 🔗

### Notes:

- [Live demo]()
- [View source code]()
- [Github repo]()

## Setup ⚙️

- Clone this repo: `git clone https://github.com/rolandjlevy/registration-and-login-with-MERN.git`
- Install dependencies by running `npm install`
- Create a `.env` file in the root directory and add the environment variables (I will provide these in an email)
- For the React UI and back end, run `npm run dev` and go to `http://localhost:3000`
- For the back end only, run `npm run server` and go to `http://localhost:8080`

- Host on Netlify or repl.it?
- cors (cross origin resource sharing) allows ajax requests to access resources from remote hosts. So we can make the right connections without any errors.

## Back end technologies 👨‍💻

- Node, Express, MongoDB, Mongoose
- Hosting database using [Mongodb Atlas in the cloud](https://www.mongodb.com/cloud/atlas) cloud database
- [bcrypt](https://www.npmjs.com/package/bcrypt) for hashing passwords, [express-validator](https://express-validator.github.io/docs/) for validating and sanitizing user input, [concurrently](https://www.npmjs.com/package/concurrently) to run the client and server simultaneously

## Front end technologies 👨‍💻

- React (Create React App), [Bootstrap](https://getbootstrap.com), [Reactstrap](https://reactstrap.github.io)
- Transitions with [ReactTransitionGroup](https://reactcommunity.org/react-transition-group/)
- Icons from [Fontawesome](https://fontawesome.com/how-to-use/on-the-web/using-with/react)
- Images from [Unsplash](https://unsplash.com/)
- Backround pattern from [heropatterns](http://www.heropatterns.com)

## Features 💡

- Validation checks for correct input length and type...
- Passwords are hashing with bcrypt
- Fully responsive

## Reference 📙

- This project was inpired by...

## Contact 📧

Created by [Roland](https://rolandlevy.co.uk) - feel free to contact me!
