# Calculator-React

This project is a stylish and responsive calculator built with React, featuring advanced mathematical functions and smooth animations. 

![Calculator Screenshot](https://github.com/ujjwaljha1/Calculator-React/assets/113511960/0d01a2d9-d2a1-4bc0-aaf4-70e9205c72f2)

## Features

- Basic arithmetic operations: addition, subtraction, multiplication, and division.
- Advanced functions: sin, cos, tan, log, sqrt, exp, ln, asin, acos, atan, abs.
- Responsive design that adapts to different screen sizes.
- Cool styling effects and animations.
- Error handling for invalid expressions.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **Styled-Components**: For writing CSS-in-JS to style the application.
- **Math.js**: A library for performing mathematical operations and evaluations.
- **React-Spring**: A library for adding animations to the React components.

## Project Setup

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Available Scripts

In the project directory, you can run:

#### `npm start`

Runs the app in the development mode.  
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.  
The page will reload when you make changes. You may also see any lint errors in the console.

#### `npm test`

Launches the test runner in the interactive watch mode.  
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `npm run build`

Builds the app for production to the `build` folder.  
It correctly bundles React in production mode and optimizes the build for the best performance.  
The build is minified and the filenames include the hashes. Your app is ready to be deployed!  
See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

#### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**  
If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.  
Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc.) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

## How It Works

### React Components

The project consists of two main components:

1. **App Component**: The root component that includes global styles and renders the `Calculator` component.
2. **Calculator Component**: Contains the logic for handling input, performing calculations, and rendering the display and buttons.

### Styled-Components

Styled-components are used for defining and applying styles directly within the component files. This approach helps in maintaining a clean separation of styles and logic. Some of the key styled-components used in this project include:

- `GlobalStyle`: Applies global styles to the entire application.
- `Container`: Centers the calculator on the screen.
- `CalculatorWrapper`: Styles the main calculator container.
- `Display`: Styles the display area for input and result.
- `ButtonGrid`: Arranges the calculator buttons in a grid.
- `Button`: Styles individual calculator buttons with hover and active effects.

### Math.js

The `math.js` library is used to evaluate mathematical expressions entered into the calculator. It provides a wide range of mathematical functions and ensures accurate calculations.

### React-Spring

The `react-spring` library is used for adding smooth animations to the calculator. Animations are applied to the display area to enhance the user experience.

### Error Handling

The calculator includes error handling to manage invalid mathematical expressions. When an invalid expression is evaluated, the display shows an 'Error' message.

## Screenshots

![Calculator Screenshot 1](https://github.com/ujjwaljha1/Calculator-React/assets/113511960/dfd46a3f-4463-4323-a2e8-e773bb0f80f7)
![Calculator Screenshot 2](https://github.com/ujjwaljha1/Calculator-React/assets/113511960/42628773-18e0-4315-b0af-4a918ec60390)

## Learn More

To learn more about React, check out the [React documentation](https://reactjs.org/).  
For more information about Create React App, see the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

### Code Splitting

Learn more about code splitting [here](https://facebook.github.io/create-react-app/docs/code-splitting).

### Analyzing the Bundle Size

Learn more about analyzing the bundle size [here](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size).

### Making a Progressive Web App

Learn more about making a progressive web app [here](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app).

### Advanced Configuration

Learn more about advanced configuration [here](https://facebook.github.io/create-react-app/docs/advanced-configuration).

### Deployment

Learn more about deployment [here](https://facebook.github.io/create-react-app/docs/deployment).

### `npm run build` fails to minify

Learn more about fixing the build failure [here](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify).

