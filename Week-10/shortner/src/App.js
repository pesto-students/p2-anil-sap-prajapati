import React, { useRef, useState } from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import axios from 'axios';
import './App.css';

function App() {
  const input_box = useRef();
  const [urlList, setUrlList] = useState([]);
  const [shortURL, setShortURL] = useState([]);


  const createURL = async () => {
    try {
      const url = new URL(input_box.current.value).toString();
      const res = await axios(`https://api.shrtco.de/v2/shorten?url=${url}`);
      setShortURL([...shortURL, res.data.result.full_short_link])
      urlList.push(url);
    } catch (err) {
      alert(err.message);
      input_box.current.value = '';
    }
  }

  return (
    <div className="App">
      <h1 id="heading" >Enter Your URL</h1>
      <input id="UrlInput"
        ref={input_box}
        type="text"
        placeholder='Shortan a link here'
      />
      <button id="SubmitButtom" onClick={createURL}>Submit</button>
      <ul className="urlList" >{shortURL.map((shortURL, index) => {
        return (
          <li id="list" >
            <span id="Actual_URL" >{urlList[index]}</span>
            <span id="shortanURL" >{shortURL}</span>
            <CopyToClipboard
              text={shortURL}
              onCopy={() => alert("coppied")}
            >
              <button id="copyButton">Copy</button>
            </CopyToClipboard>
          </li>
        )
      })
      }
      </ul>
    </div>
  );
}

export default App;
