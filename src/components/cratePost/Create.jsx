import React, { useState } from 'react';
import Nav from '../navbar/nav';
import Footer from '../footer/Footer';
import  moment  from 'moment';
import faker from "@faker-js/faker";


const Create = ({posts,setPosts})=>  {

const [post,setPost] = useState({
    id: Math.random()*1000,
    title:"",
    description:'',
    img:faker.image.avatar(),
    name:faker.name.firstName(),
    date: moment().calendar(),

});

const handleChangeTitle = (e)=>{
    setPost({...post,title:e.target.value})
    }
  const  handleChangeDesc = (e)=>{
    setPost({...post,description:e.target.value})

    }
    const  handleSubmit = (e)=> {
        e.preventDefault();
        console.log(post.title);
   var userPost = {
    id: Math.random()*1000,
    title:"",
    description:'',
    img:faker.image.avatar(),
    name:faker.name.firstName(),
    date: moment().calendar(),
}
console.log(userPost);

if (JSON.parse(localStorage.getItem("posts")) === null) {
    localStorage.setItem("posts", JSON.stringify([userPost]));
    setPosts([userPost]);
  } else {
    let posts = JSON.parse(localStorage.getItem("posts"));
    let newPosts = [...posts, userPost];
    localStorage.setItem("posts", JSON.stringify(newPosts));
    setPosts(newPosts);
  }
 setPost({
    id: '',
    title:"",
    description:'',
    img:'',
    name:'',
    date:'',

 })
}
    return (
      <div className='create-post-container'>
          <Nav />
          <div className='form-title'><h2>Create your Blog</h2></div>

          <div className='form-container'>
          <form onSubmit={handleSubmit}>
              <div>
                  <label >Title</label>
                  <input type="text" 
                  value={post.title} 
                  id="title" 
                  name="title" 
                  onChange={handleChangeTitle}/>
              </div>
              <div className='desc-box'>
                  <label htmlFor="">Description</label>
                  <textarea type="text" 
                  value={post.description} 
                  id="desc" 
                  name="desc" 
                 onChange={handleChangeDesc}  />
              </div>
              <button className='form-btn' type="submit" value="Submit" >submit</button>
          </form>
          </div>
          <Footer />
      </div>
    )
  }


export default Create;