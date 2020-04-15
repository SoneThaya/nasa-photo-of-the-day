import React, {useState, useEffect} from "react";
import "./App.css";
import axios from 'axios'

const baseURL = 'https://api.nasa.gov'
const api_key = 'kfsAd7oZSGgkX8uXhUr3RI6s8QoO27sEFTpxWZus'



function App() {

  const [data, setData] = useState([])

  useEffect(() => {
    axios.get(`${baseURL}/planetary/apod?api_key=DEMO_KEY`)
      .then(res => {
        console.log(res.data)
        setData(res.data)

      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
    </div>
  );
}

export default App;
