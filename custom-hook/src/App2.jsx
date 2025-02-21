import UseFetch from "./UseFetch";

const App2 = () => {
    const [users] = UseFetch(); // ✅ Correct destructuring

    return (
        <div>
            <h1>User List</h1>
            <ul>
                {users.length > 0 ? (
                    users.map(user => (
                        <li key={user.id}>
                            <a href={user.html_url} target="_blank" rel="noopener noreferrer">
                                {user.login}
                            </a>
                        </li>
                    ))
                ) : (
                    <p>Loading users...</p>
                )}
            </ul>
        </div>
    );
};

export default App2;
