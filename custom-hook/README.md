Custom Hook: in React is just a reusable function that manages state or side effects. It must start with use.

```
import { useState, useEffect } from "react";

const useCustomHook = (url) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((result) => {
                setData(result);
                setLoading(false);
            })
            .catch((error) => console.error(error));
    }, [url]); // Dependency array

    return [data, loading]; // ✅ Custom hooks return array/object
};

export default useCustomHook;
```

🔥 How to Use It in a Component
```
import useCustomHook from "./useCustomHook";

const MyComponent = () => {
    const [users, loading] = useCustomHook("https://api.github.com/users");

    return (
        <div>
            <h1>User List</h1>
            {loading ? <p>Loading...</p> : 
                <ul>
                    {users.map((user) => (
                        <li key={user.id}>{user.login}</li>
                    ))}
                </ul>
            }
        </div>
    );
};

export default MyComponent;
```

🚀 Key Takeaways:
✅ Custom hooks are functions that start with use
✅ They handle reusable logic (like fetching data, managing state, etc.)
✅ They use built-in hooks like useState and useEffect
✅ They return values (usually an array or object) for easy destructuring