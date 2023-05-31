import React, { useEffect, useState } from 'react';

const ListPage = ({ token }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://192.168.1.38:8097/v1/api/users/login', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(response => response.json())
      .then(data => {
        setData(data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, [token]);

  return (
    <div>
      <h2>List Page</h2>
      <ul>
        {data.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListPage;
