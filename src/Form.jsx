import React, {useState} from 'react';

function Form(props) {
  const [giphyTitle, setGiphyTitle] = useState('')

  const handleSubmit = e => {
    console.log('handleSubmit clicked');
    e.preventDefault();
    props.handleSubmit(giphyTitle)
    setGiphyTitle('')
  };

  const handleChange = e => {
    console.log('handleChange clicked');
    const title =  e.target.value
    setGiphyTitle(title)
  };

  const refreshPage = ()=>{
    window.location.reload();
  }

    return (
      <>
        <form onSubmit={handleSubmit}>
        <h1 style={{fontSize:"xx-large"}}>Giphy</h1>
        <div>
          <input style={{margin:"5px"}}
            placeholder="type of giphy"
            type="text"
            value={giphyTitle}
            onChange={handleChange}
          />
          <input type="submit" />
          </div>
        <button onClick={refreshPage}> Make API Call Again</button>
        <h1>Pull random gifs from Giphy</h1>
        </form>
      </>
    );
}

export default Form;