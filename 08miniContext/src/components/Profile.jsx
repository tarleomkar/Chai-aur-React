import {useContext} from 'react'
import UserContext from '../context/UserContext'

const Profile = () => {
    const {user, setUser } = useContext(UserContext)
    
    if (!user) return <div>Please Login</div>

    return (
        <div>
            <h3>Welcome {user.username}</h3>
            <button onClick={() => setUser(null)}>Logout</button>
        </div>
    )
    
}

export default Profile