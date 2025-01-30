import { useEffect, useState } from "react"
import { useLoaderData } from "react-router-dom"

const Github = () => {
    const data = useLoaderData();

    /* This code snippet is a React functional component named `Github` that fetches data from the
    GitHub API for the user "tarleomkar" and displays the number of followers and the avatar image
    of that user. */
    // const [data, setData] = useState([]);

    // useEffect(() => {
    //     fetch('https://api.github.com/users/tarleomkar')
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log(data);
    //         setData(data)
    //     })
    // }, [])

  return (
    <div className="text-center m-4 bg-gray-500 text-white p-4 text-3xl">Github followers: {data.followers}
    <img src={data.avatar_url} alt="Git picture" width={300}/>
    <p className="text-center m-4 bg-gray-500 text-white p-4 text-3xl">Name: {data.name}</p>
    </div>
  )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/tarleomkar'); // Await the fetch call
    return response.json(); // Return the parsed JSON data
  };
