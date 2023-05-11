import reactLogo from "./assets/react.svg";
import "./App.css";
import useSWR from 'swr';
import { useQuery } from "react-query";

const fetcher = (url) => fetch(url).then((response) => response.json());

const fetchUsers = async () => {
  return fetcher("https://jsonplaceholder.typicode.com/users");
};

function App() {
  const { data, isLoading, error } = useQuery("users", fetchUsers);
  const { data: dataSWR, isLoading: loadingSWR, error: errorSWR } = useSWR('https://jsonplaceholder.typicode.com/users', fetcher);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div className="light">
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>React - React Query</h1>
      <div>
        <h3>React Query</h3>
        {data.map((user) => (
          <div key={user.id} className="card">
            <p>{user.name}</p>
            <p>{user.email}</p>
            <hr />
          </div>
        ))}
      </div>
      <div>
        <h3>SWR</h3>
        {dataSWR.map((user) => (
          <div key={user.id} className="card">
            <p>{user.name}</p>
            <p>{user.email}</p>
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
