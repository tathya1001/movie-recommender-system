import React, { useState } from 'react';

function App() {
  const [movie, setMovie] = useState('');
  const [responseContent, setResponseContent] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submitted")
    fetch(`http://127.0.0.1:5000/recommend/${movie}`)
      .then(response => response.json())
      .then(data => setResponseContent(data))
      .catch(error => console.error('Error:', error));
  };

  return (
    <div>
      <h1>Movie Recommendation System</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Enter Movie Name:
          <input
            type="text"
            value={movie}
            onChange={(e) => setMovie(e.target.value)}
            required
          />
        </label>
        <button type="submit">Get Recommendations</button>
      </form>

      <h2>Response Content:</h2>
      <div>
        {responseContent &&
          responseContent.map((item, index) => (
            <img src={item} key={index}></img>
          ))
        }
      </div>
    </div>
  );
}

export default App;
