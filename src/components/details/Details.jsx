import Footer from '../footer/Footer';
import React, { useEffect,useState } from 'react';
import './details.css'
import Nav from './../navbar/nav';

const Details = ()=> {
   const [postId,setPostId]=useState([]);
  useEffect(()=>{
  
    if (localStorage.getItem('single_post')) {
      let localPost= JSON.parse(localStorage.getItem('single_post'));
      setPostId(localPost[0]);
      console.log(localPost);
    }

  },[setPostId]);
    return (
      <>
      <Nav/>
          <div className='details-container'>
<div>{postId.title}</div>
<div>{postId.description}</div>
<div>{postId.name}</div>
          </div>
      
      </>
    )
  }


export default Details
