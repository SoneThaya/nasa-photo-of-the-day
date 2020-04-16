import React, {useState, useEffect} from "react";
import "./App.css";
import axios from 'axios';
import { useForm } from 'react-hook-form'
import Photo from './components/photo';
import Title from './components/title';
import DateOne from './components/date';
import Copyright from './components/copyright';
import Explanation from './components/explanation';
import styled from 'styled-components'

const baseURL = 'https://api.nasa.gov'
const api_key = 'kfsAd7oZSGgkX8uXhUr3RI6s8QoO27sEFTpxWZus'



function App() {

  let today = new Date()
  let dd = String(today.getDate()).padStart(2, '0');
  let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  let yyyy = today.getFullYear();
  today = yyyy + '-' + mm + '-' + dd;

  console.log(today)

  const { register, handleSubmit } = useForm()
  const [data, setData] = useState([])
  const [photoDate, setPhotoDate] = useState(today)

  const onSubmit = e => setPhotoDate(e.date)

  useEffect(() => {
    axios.get(`${baseURL}/planetary/apod?api_key=${api_key}&date=${photoDate}`)
      .then(res => {
        console.log(res.data)
        setData(res.data)

      })
      .catch(err => {
        console.log(err)
      })
  }, [photoDate])

  const InputButton = styled.input`
    
    background: ${props => props.primary ? "palevioletred" : "white"};
    color: ${props => props.primary ? "white" : "palevioletred"};

    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid palevioletred;
    border-radius: 3px;

    &:hover {
      background: ${props => props.primary ? "white" : "palevioletred"};
      color: ${props => props.primary ? "palevioletred" : "white"};
    }
  `

  const InputField = styled.input`

  font-size: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;

  `

  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
      
      <DateOne date={data.date} />
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputField ref={register} name="date" placeholder="YYYY-MM-DD" />
        <InputButton BgColor='red' type='submit' scream />
      </form>
      <Photo image={data.url} alt={data.media_type} />
      <Title title={data.title} />
      <Copyright copyright={data.copyright} />
      <Explanation explanation={data.explanation} />
    </div>
  );
}

export default App;
