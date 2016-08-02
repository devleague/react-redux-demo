## [Advanced] Async Redux and Redux Middleware

This section covers advanced Redux concepts - this section is optional and can be covered if there is time. It demonstrates how to build React-Redux applications properly using Async Redux state changes.

### Why Async Actions?
When you call an asynchronous API, there are two crucial moments in time: the moment you start the call, and the moment when you receive an answer (or a timeout).

Each of these two moments can usually require a change in the application state; to do that, you need to dispatch normal actions that will be processed by reducers synchronously. Usually, for any API request you’ll want to dispatch at least three different kinds of actions:

- **An action informing the reducers that the request began.**
  - The reducers may handle this action by toggling an isFetching flag in the state. This way the UI knows it’s time to show a spinner.

- **An action informing the reducers that the request finished successfully.**
  - The reducers may handle this action by merging the new data into the state they manage and resetting isFetching. The UI would hide the spinner, and display the fetched data.

- **An action informing the reducers that the request failed.**
  - The reducers may handle this action by resetting isFetching. Additionally, some reducers may want to store the error message so the UI can display it.

### Getting Started
* run `npm start`

### Resources
- [Async Actions](http://redux.js.org/docs/advanced/AsyncActions.html)
- [Reduc Middleware](http://redux.js.org/docs/advanced/Middleware.html)
