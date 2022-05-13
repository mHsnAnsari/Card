import React  from 'react';
import { useState } from 'react'; 




export default function Card () {
    return(<>
        <div className='card-div'>
            <div className='img-div'>
                <img src="https://picsum.photos/id/237/200/300"></img>
                <p>Hello World</p>
                <button className='btn' onClick={()=>{
                    alert("Hello \n Dear ")
                }}>Add To Cart</button>
            </div>
        </div>
    </>)

};