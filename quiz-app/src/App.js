import './App.css';
import { useState, useEffect } from 'react';



const [questions, setQuestions] = useState([]);
const [loading, setLoading] = useState(true);
useEffect(() => {
  // Fetch trivia questions
  fetch("https://opentdb.com/api.php?amount=10")
    .then((response) => response.json())
    .then((data) => {
      setQuestions(data.results);
      setLoading(false);
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
      setLoading(false);
    });
}, []);

return (
  <>
  
  </>
);
}

export default App;
