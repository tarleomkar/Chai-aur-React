import { useEffect, useState } from 'react'

const UseFetch = () => {
    const[users, setUsers] = useState([]);
    console.log(users)

    useEffect(() => {
        fetch('https://api.github.com/users')
        .then(response => response.json())
        .then(data => setUsers(data))
        .catch(error => console.error(error))
    }, [])

  return [users]
}

export default UseFetch