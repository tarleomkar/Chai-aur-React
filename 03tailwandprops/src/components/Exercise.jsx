import React from 'react';

function Exercise({brand}) {
  return (
    <h2>I am a {brand}!</h2>
  )

  function Garage() {
    return (
        <>
            <h1>Who lives in my garage?</h1>
            <Car brand="Mahindra 3X0"/>
        </>
    )
  }
}

export default Exercise;