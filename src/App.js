import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import Panigation from "./Componnent/Panigation";
import Header from "./Componnent/Header";
import "./App.css";
import Main from "./Componnent/Main";
import Footer from "./Componnent/Footer";
import OddMovie from "./Componnent/OddMovie";

function App() {
  const [page, setPage] = useState(1);
  const total = 15;
  const [html, setHtml] = useState([]);
  useEffect(() => {
    fetch(`https://reqres.in/api/users?page=${page}}`)
      .then((res) => res.json())
      .then((res) => {
        setHtml(res.data);
        // setTotal(res.total_pages);
      })
      .catch((err) => console.log(err));
  }, [page]);
  const handleClick = (e) => {
    setPage(e.i);
  };
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/about" component={OddMovie} />
        </Switch>
        <Footer />
        {/* <div className="list-item">
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
          </div> */}
      </div>
    </Router>
  );
}

export default App;
