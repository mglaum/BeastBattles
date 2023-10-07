import React, { useState, useEffect } from 'react';

const MyComponent = () => {
  const [names, setNames] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiKey = '8b502348149944048544c7971ff1339d'; // Replace with your actual API key
        const apiUrl = 'https://randommer.io/api/Name';

        const nameType = 'firstname'; // Replace with the desired name type
        const quantity = 5; // Replace with the desired quantity

        const response = await fetch(`${apiUrl}?nameType=${nameType}&quantity=${quantity}`, {
          headers: {
            'X-Api-Key': apiKey,
            'Content-Type': 'application/json',
            // Add other headers if required by the API
          },
        });

        const result = await response.json();
        setNames(result);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {names.map((name, index) => (
            <li key={index}>{name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MyComponent;
