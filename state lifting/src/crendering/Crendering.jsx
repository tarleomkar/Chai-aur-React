import React, { useState } from 'react'
import LogOut from '../components/LogOut';
import LoginButton from '../components/LoginButton';

const Crendering = () => {
    // 1. First Case
    // const [isLoggedIn, setLoggedIn] = useState(false);

    // if (isLoggedIn) {
    //     return (
    //         <LogOut/>
    //     )
    // }
    // else {
    //     return (
    //         <LoginButton/>
    //     )
    // }

//   return (
//     <div>
//         {isLoggedIn ? <LogOut/> : <LoginButton/>}
//     </div>
//   )

// 2. Second Case
  const [isLoggedIn, setLoggedIn] = useState(true);

    if(!isLoggedIn) {
        return (
            <LoginButton/>
        )
    }
    
  return (
    <div>
        <h1>Welcome Everyone to CodeHelp web dev course</h1>
        <div>
        {isLoggedIn && <LoginButton/>}
        </div>
    </div>
  )
}

export default Crendering