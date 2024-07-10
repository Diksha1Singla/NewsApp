import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


import React, { useState } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'

const App = () => {
  const pageSize=9;
  const MyapiKey = process.env.REACT_APP_NEWS_API

    const [progress,setprogress] =  useState(0)


      return (
        <div>

          <Router>
              <LoadingBar
                color='#f11946'
                progress={progress}
                height={2}
              />
            <NavBar/>
            <Routes>
              <Route exact path="/" element={<News progress={setprogress} apiKey={MyapiKey} key="general" pageSize={pageSize} country='in'category='general'/ > }> </Route>
              <Route exact path="/home" element={<News progress={setprogress} apiKey={MyapiKey} key="general" pageSize={pageSize} country='in'category='general'/ > }> </Route>
              <Route exact path="/technology" element= {<News progress={setprogress} apiKey={MyapiKey} key="technology" pageSize={pageSize} country='in' category='technology'/>}></Route>
              <Route exact path="/business" element={<News progress={setprogress} apiKey={MyapiKey} key="business" pageSize={pageSize} country='in' category='business'/>}> </Route>
              <Route exact path="/entertainment" element={<News progress={setprogress} apiKey={MyapiKey} key="entertainment" pageSize={pageSize} country='in' category='entertainment'/>}> </Route>
              <Route exact path="/health" element={<News progress={setprogress} apiKey={MyapiKey} key="health" pageSize={pageSize} country='in' category='health'/>}> </Route>
              <Route exact path="/science" element={<News progress={setprogress} apiKey={MyapiKey} key="science" pageSize={pageSize} country='in' category='science'/>}> </Route>
              <Route exact path="/sports" element={<News progress={setprogress} apiKey={MyapiKey} key="sports" pageSize={pageSize} country='in' category='sports'/>}> </Route>
            </Routes>
            </Router>
      </div>
    );

}

export default App
