import { useEffect, useState } from "react";
// import fakeFetch from "./Api/fakefetch"

const UserStatus = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fakeFetch("https://example.com/api/users/status");
      setData(response.data.users);
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
};
export default UserStatus;
