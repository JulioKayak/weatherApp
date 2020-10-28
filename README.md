
# Requisitos
### Requisitos obligatorios

- Se podrá introducir una ciudad. Ejemplos: "A Coruña", "Madrid", "Lugo", ... o un código postal: 15001, 27000, …
- Una vez introducida una ciudad pulsado el botón de "buscar", se debe mantener esa ciudad aunque se refresque la página
- Se debe mostrar la siguiente información:
  - Nombre de la ciudad (no el introducido si no el que devuelve el api).
  - Icono indicando el tiempo en esa ciudad
  - Descripción del tiempo actual con la primera letra en mayúsculas.
  - Temperatura actual y sensación térmica
  -  Velocidad del viento
- El nombre de la ciudad debe estar en la fuente [Lobster](https://fonts.google.com/specimen/Lobster)
- Resto de fuentes en [Roboto](https://fonts.google.com/specimen/Roboto)
- Si se busca una ciudad ya cargada se debe volver a cargar por si hubo modificaciones (28-Octubre)
 

### Requisitos opcionales

- Que la imagen de fondo corresponda con respecto al tiempo obtenido. Si hace sol, mostrar una imagen soleada, si llueve que la imagen de fondo sea de un día lluvioso.
- Que se puedan mostrar varias ciudades a la vez (que en vez de tener una única localización guardada tengamos un array de localizaciones y al buscar se añade al array).
  - En este caso se debería permitir eliminar una localización
  - Para buscar múltiples ciudades se escriben todas juntas en la barra de búsqueda (28-Octubre)
  -

 

### APIs disponibles

- Fetch api: https://developer.mozilla.org/es/docs/Web/API/Fetch_API
- Obtención de información meteorológica: https://openweathermap.org/current
- Iconos del tiempo: https://openweathermap.org/weather-conditions
- Persistir información: https://developer.mozilla.org/es/docs/Web/API/Window/localStorage

# React
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify