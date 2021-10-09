import React from "react";
import { useState } from "react";
function Panigation(props){
    let rows=[];
    let [a,setA]=useState(0);
    let [b,setB]=useState(5);
    for(let i=1;i<=props.totalPage;i++)
         rows.push(<li className="page-item" key={i}><button className={"page-link"+(i===props.page?" active":"")} onClick={(e)=>{props.onClick({i})}}>{i}</button></li>);
    const display = ()=>{
        if(b===props.page)
        {
            setB(b+1);
            setA(a+1);
        }
        if(a===props.page)
        {
            setB(b-1);
            setA(a-1);
        }
        console.log(a);
        rows=rows.slice(a,b);
    }
    display();
    const handlePev = ()=>{
        props.onClick({i:((props.page-1)>1)?(props.page-1):1})
    }
    const handleNext = ()=>{
        props.onClick({i:((props.page+1)<props.totalPage)?(props.page+1):props.totalPage});
    }
    return(
        <nav aria-label="Page navigation example">
            <ul className="pagination" style={{display: "flex"}}>
                <li className="page-item">
                <button className="page-link" 
                        aria-label="Previous"
                        style={{opacity:(props.page===1?"0":"1")}} 
                        onClick={handlePev}>
                    <span aria-hidden="true">&laquo;</span>
                </button>
                </li>
                {rows}
                <li className="page-item">
                <button className="page-link" 
                        aria-label="Next"
                        style={{opacity:(props.page ===props.totalPage ?"0":"1")}}
                        onClick={handleNext}>
                    <span aria-hidden="true">&raquo;</span>
                </button>
                </li>
            </ul>
        </nav>
    )
}
export default Panigation;

