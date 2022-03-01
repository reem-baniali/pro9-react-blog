import { Link } from "react-router-dom";
import React, { useEffect } from 'react';
import Nav from '../navbar/nav';
import Main from '../mainImage/Main';
import Footer from '../footer/Footer';
import faker from "@faker-js/faker";

const Blog = ({posts,setPosts})=>{
 
useEffect(()=>{
  
  if (localStorage.getItem('posts')) {

    setPosts(JSON.parse(localStorage.getItem('posts')));
  }
  console.log(posts);
},[setPosts]);

    const goDetails = (id)=>{
        localStorage.setItem('post_id',id);
        let localPost= JSON.parse(localStorage.getItem('posts'));
        console.log();
        let reminder = localPost.filter(post =>post.id === id);
        localStorage.setItem('single_post',JSON.stringify(reminder));

      }
       
      
          
  return (
    
    <>
      <Nav/>
   <Main/>
  
      <div className='blogs-container'>
      {posts.map((post)=>(
      <div class="ui card">
  <div class="image">
    <img src={post.img}  />
  </div>
  <div class="content">
    <a class="header">{post.title}</a>
    <div class="meta">
      <span class="date">{post.date}</span>
    </div>
    <div class="description">
      <strong>Writer : <b> {post.name}</b></strong>
    </div>
  </div>
  <div class="extra content">
    <a>
      <Link onClick={()=>goDetails(post.id)}  to="/Details"  className='card-btn'>Read Blog</Link>

    </a>
  </div>
</div>
     ))}
      {/* {posts.map((post)=>(

  <div class="blog">
  <img src={post.img} alt="rblog-imageeem" />
  <div className='card-body'>
    <div className='card-title'><strong className=''>{post.title}</strong></div>
    <div className='card-title'><strong className=''>{post.name}</strong></div>
    <div className='card-navigat'>
  <Link onClick={()=>goDetails(post.id)}  to="/Details"  className='card-btn'>Read Blog</Link>
  </div>
  </div>
</div>
      ))} */}
      </div>
      <Footer/>
      </>
  
  )
}
export default Blog