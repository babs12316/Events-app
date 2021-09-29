### `Login details`

Login detail for user<br/>
userId: john_1 password: test<br/>
userId: james_2  password: test<br/>

## Tech stack

Project is build using create react app with typescript template. \
Material UI is used as UI library.\
Testing is done using React test library \

## Project config

Intially user will be redirected to login page.\
After user is logged in user will be redirected to dashboard component\
On Dashboard component user role is checked\
Depending on users role, different components are loaded in sidenav and main component of layout\
Context api is used, to pass global Event Object which can read and modified by component easily\
Testing is focused on checking if UI elements are rendered as expected\
Project is divided in multiple folders, making it simple and extending it easy.\


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.
