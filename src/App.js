import { useEffect, useState } from "react";
import { fakeFetch } from "./Api/fakefetch";
import "./styles.css";

export default function App() {
  const [data, setData] = useState([]); // Step I

  const fetchData = async () => {
    try {
      const response = await fakeFetch("https://example.com/api/users/status");
      // console.log(response.data.users);
      setData(response.data.users); // Step II
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <h1> Showcase Wishlist </h1>
      <ul>
        {data.map((users) => {
          return (
            <li
              key={users.id}
              style={{ color: users.status === "Online" ? "Green" : "Red" }}
            >
              <p>
                {users.name} - {users.status}
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
