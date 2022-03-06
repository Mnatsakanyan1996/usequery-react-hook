# usequery-react-hook
# 📦 NPM Package for React js App

## Installing usequery-react-hook

To use hook, all you need to do is install the
`usequery-react-hook` package and its peer dependencies:

```sh
$ yarn add usequery-react-hook react-router-dom@^6

# or

$ npm i usequery-react-hook react-router-dom@^6
```

## Usage

To start using the hook, please follow these steps:

1. Wrap your application with the `BrowserRouter` provided by
   **react-router-dom**.

```jsx
import { BrowserRouter } from 'react-router-dom';

// Do this at the root of your application
function App({ children }) {
  return <BrowserRouter>{children}</BrowserRouter>
}
```

2. Now you can start using hook like so!:

URL Example: http://localhost:3000/?id=20&firstName=Mikayel&lastName=Mnatsakanyan

```jsx
import useQuery from 'usequery-react-hook';

function Example() {
  const { id, firstName, lastName } = useQuery(['id', 'firstName', 'lastName']);
  return <ul>
    <li>Id: {id}</li>
    <li>First Name: {firstName}</li>
    <li>Last Name: {lastName}</li>
  </ul>;
}
```
