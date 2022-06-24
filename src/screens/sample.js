//import "./styles.css";

import '../screens/Sstyle.css';
import { useState, useEffect } from "react";

import axios from "axios";

export default function Sample() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          `http://127.0.0.1:8000/api/vorder/`
        );
        setData(response.data.vorder);
        setError(null);
      } catch (err) {
        setError(err.message);
        setData(null);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);

  return (
    <div className="App">
      <h1>API Posts</h1>
      {loading && <div>A moment please...</div>}
      {error && (
        <div>{`There is a problem fetching the post data - ${error}`}</div>
      )}
      <ul>
        {data &&
          data.map(({ id, name, slocation, elocation }) => (
            <li key={id}>
              <h4>id : {id}</h4>
              <h3>Name : {name}</h3>
              <h3>Email: {slocation}</h3>
            </li>
          ))}
      </ul>
    </div>
  );
}
