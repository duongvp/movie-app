import React, { Children } from 'react'
function Category(props)
{
    const{link,name}=props;
    const a = ["Phim Hành Động","Phim Võ Thuật","Phim Hoạt Hình","Phim Hoạt Hình","Phim Hành Động","Phim Võ Thuật","Phim Hoạt Hình","Phim Hoạt Hình"]
    return(
        <div className="cartegory-lst cartegory1">
                {
                    a.map(item=>(
                        <div className="cartegory-child">
                            <p className="item-cartegory-child m-0">
                               <a href={link}>{item}</a>
                            </p>
                        </div>
                    ))
                }
        </div>
        
    );
} 
export default Category;