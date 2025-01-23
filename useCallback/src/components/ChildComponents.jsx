/* eslint-disable react/prop-types */
const ChildComponents = (props) => {
    console.log("Child component got re-rendered again");
    
    return (
      <div>
        <button onClick={props.handleClick}>
          {props.buttonName}
        </button>
      </div>
    )
  }

export default ChildComponents

// React.memo -> wrap -> component -> component
// re-render tabhi hoga jab props change nahi toh
// re-render nahi hoga

// if you are sending a function, then React.memo wont be able to save you from re-rendering