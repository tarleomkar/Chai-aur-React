import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp()
{
  return (
    <div>
      <h1>Custom App | Chai</h1>
    </div>
  )
}

// const ReactElement = {
//   type: 'a',
//   props: {
//       href: 'https://google.com',
//       target:'_blank'
//   },
//   children: 'Cick me to visit google'
// }

const anotherUser = "Chai aur react";

const reactElement = React.createElement(
  'a',
  {href: 'https://google.com', target: '_blank'},
  'click me to visit google',
  anotherUser
)

const anotherElement = (
  <a href="https://google.com" target='_blank'>Visit Google</a>
)

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    // <MyApp />
  // </React.StrictMode>,
  // anotherElement
  // <App />
  reactElement
)
