import React, { useState} from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios';
import Results from './Results';

function ApiComponent() {
  const [url, setUrl] = useState('');
  const [wordCount, setWordCount] = useState(0);
  const [total,setTotal] = useState(0)
  const [links, setLinks] = useState([]);
  let real = []

  const handleInputChange = (e) => {
    setUrl(e.target.value);
  };

  const handleCheckWordCount = async () => {
    try {
      const response = await axios.get(`http://localhost:3001/count?url=${encodeURIComponent(url)}`);
      setWordCount(response.data.wordCount);
      setLinks((prev)=>[...prev,response.data.links])
      setTotal((prev)=> prev+1)
      console.log(wordCount);
      real = [...real, ...links]
      console.log(real);

    } catch (error) {
      console.error('Error checking word count:', error);
    }
  };

  return (
    <div style={{"textAlign":"center"}}>
      <h1>Webpage Scraper</h1>
      <input type="text" value={url} onChange={handleInputChange} placeholder="Enter website URL" /><br /><br />
      <button onClick={handleCheckWordCount}>Get insights</button>
      <p>Word Count: {wordCount}</p>
      {/* <p>Web-Links: {links}</p> */}
      
      <Results links={links} wordCount={wordCount} total={total} url={url}/>
      
    </div>
  );
}

export default ApiComponent;
