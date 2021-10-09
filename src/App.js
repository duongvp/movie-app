import React  from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Panigation from './Componnent/Panigation'
import './App.css';

function App() {
  const[page,setPage] =useState(1);
  const total = 15;
  const [html,setHtml]=useState([]);
  useEffect(() => {
    fetch(`https://reqres.in/api/users?page=${page}}`)
      .then(res => res.json())
      .then((res)=>{
            setHtml(res.data);  
            // setTotal(res.total_pages); 
          })
      .catch((err)=>console.log(err));
      },[page]);
  const handleClick=(e)=>{
    setPage(e.i);
  } 
  return (
    <div className="App">
        <div className="list-item">
            {
              html.map((item)=>(
                  <div key={item.id}>
                          <img src={item.avatar} alt={"anh"}></img>
                          <div className="infoName">
                              <p>{item.email}</p>
                              <p>{item.first_name}</p>
                              <p>{item.last_name}</p>
                          </div>
                  </div>))
            }
            <Panigation totalPage={total} onClick={handleClick} page={page}/>
        </div>
    </div>
  );
}

export default App;
