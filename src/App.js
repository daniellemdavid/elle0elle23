import './App.css';
import Header from './Header.js';
import './styles/normalize.css';
import './styles/toc.css'
// import run from './notion.js'
// import { useEffect } from 'react';

function App() {
  // useEffect( () =>{
  //   return(
  //     run()
  //   )
  // }, []
  // )
  const tc = ["home", "philosophy", "books", 
                  "music","coding projects"];
  return (
    <div className='container'>
      <div className="App">
        <Header/>
        <div className='toc'>

          
          {tc.map( (el, i) => {
             return(
              <div className='toc-el'><a href='#'><span> 0{i+1}</span>  {el} </a></div>
             )
             }
          )}

        </div>
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header> */}
      </div>
      <div className='App2'>
        <Header title = "Welcome to infinity"/>
        <div className='main'>
          <div className='welcome'>
            Hi, My name is Danielle. Welcome to infinity. <br/>
            If all was well in the world then we would have no need to fret but all is certainly not well. <br/>
            In fact we have no idea how to be well in the slightest. 
          </div>

          {/* foreach post */}
          <div className='post'>
            <h2 className='postTitle'>               </h2>
            ipsum Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis. <br/>
            If all is well in the world then we would have no need to fret but all is certainly not well. <br/>
            In fact we have no idea how to be well in the slightest bit. 
          </div>


        </div>
      </div>

      {/* remote can be used for music */}
      <div className='remote'>
        <div className='remote-contents'>

        </div>
         + -
      </div>
    </div>
  );
}

export default App;
