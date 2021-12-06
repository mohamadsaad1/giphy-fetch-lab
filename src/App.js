import React, { useState, useEffect } from 'react';
import './App.css';
import Form from './Form';
import GiphyInfo from './GiphyInfo';

function App() {
  const [giphyData, setGiphyData] = useState('');
  const [giphyTitle, setGiphyTitle] = useState('science')

  const handleSubmit = title => {
    console.log('App - makeApiCall - title', title);
    setGiphyTitle(title)
  };

useEffect(() => {
  let giphyUrl = `https://api.giphy.com/v1/gifs/random?api_key=8UBAffkS9I38HzbP77laWxvT6wnpchkw&tag=${giphyTitle}`


  const makeApiCall = () => {
    fetch(giphyUrl)
    .then(res => res.json())
    .then(data => {
      console.log('giphyData', data)
      setGiphyData(data)
    })
  }
  makeApiCall()
}, [giphyTitle])

  return (
    <div className="App">
      <Form handleSubmit={handleSubmit} />
      {giphyData.data ? <GiphyInfo giphy={giphyData} /> : null}
    </div>
  );
}

export default App;