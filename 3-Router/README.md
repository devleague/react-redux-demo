## Intro to React - React Router

Almost every client side application has some routing. If you are using React.js in a browser, you will reach the point when you should pick a library.

Our chosen one is the react-router by the excellent rackt community. Rackt always ships quality resources for React.js lovers.

To integrate react-router check out their documentation, but what's more important here: if you use Flux/Redux we recommend to keep your router's state in sync with your store/global state.

Synchronized router states will help you to control router behaviors by Flux/Redux actions and read router states and parameters in your components.

Redux users can simply do it with the redux-simple-router library.

### Getting Started
* run `npm start`