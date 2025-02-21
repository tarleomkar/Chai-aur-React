import UseFetch from "./UseFetch"

const App3 = () => {
    const [users] = UseFetch();

  return (
    <div>
        <h1>User List</h1>
        <ul>
            {users.length > 0 ? (
                users.map(user => (
                    <li key={user.id}>
                        <a href={user.html_url}>{user.login}
                        </a>
                    </li>
                ))
            ) : (
                <p>loading users...</p>
            )}
        </ul>
    </div>
  )
}

export default App3