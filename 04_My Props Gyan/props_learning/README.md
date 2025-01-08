# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

My Gyan
What Are Props?
Props are a way to pass data from a parent component to a child component in React. They are similar to function arguments in JavaScript and attributes in HTML. Props are used to pass dynamic data, event handlers, and more to child components, enabling them to be more reusable and customizable.

Key Characteristics of Props
1.Read-Only: Props are immutable. Once a prop is set, it cannot be changed by the child component that receives it. If the data needs to be changed, it should be done at the parent level.

2.Unidirectional Data Flow: Props follow a one-way data flow, meaning data is passed from the parent component to the child component. This unidirectional flow makes it easier to understand how data changes affect the application.

3.Pass Any Data Type: You can pass any data type through props, including strings, numbers, arrays, objects, functions, and even JSX elements.

Using Props in a Component
To use props in a React component:

1.Define the Component: You can define a component as a function or a class.

2.Receive Props: In a function component, props are received as an argument. In a class component, they are accessed via this.props.

3.Access and Use Props: You can use props to render data, pass data to other components, or trigger functions.