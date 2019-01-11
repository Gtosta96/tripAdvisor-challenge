This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Author Decisions and Motivations

### 1. Create React App
Resolvi criar esse projeto utilizando CREA por ser fast-forward zero-configuration, dessa forma, nem eu nem outras pessoas
do time precisam ficar se preocupando em trabalhar para setar e atualizar o environment

### 2. Typescript
Também utilizo o typescript para checagem de dados. O Typescript agrega muito para a manutenção do código, onde nada é 
obrigatório, de forma que o time pode ir migrando aos poucos conforme vai conhecendo a ferramenta.
Tomei a decisão de inseri-lo devido aos seguintes beneficios:
 - Auto Imports
 - Intelisense
 - Checkagem de attributos em componentes
 - Refactory
 - Customizavel

#### Why Typescript over flow
Typescript tem muito mais base e a large community

### 3. Tests
CREA provides Jest out of the box, utilizei React-Test-Renderer por não precisar configurar Enzyme.

#### Coverage:


### 4. Browser Support
- Chrome
- Firefox
- Edge

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
