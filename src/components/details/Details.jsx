import Footer from '../footer/Footer';
import React, { useEffect,useState } from 'react';
import './details.css'
import Nav from './../navbar/nav';

const Details = ()=> {
   const [postId,setPostId]=useState([]);
   const [comment,setComment]=useState();
   const [comments,setComments]=useState([]);
   const [editInput,setEditInput]=useState('');
   const [c,setC]=useState({});


  useEffect(()=>{
  
    if (localStorage.getItem('single_post')) {
      let localPost= JSON.parse(localStorage.getItem('single_post'));
      setPostId(localPost[0]);
      // console.log(localPost);
    }
    if(localStorage.getItem('comments')){
      let all_comments = JSON.parse(localStorage.getItem('comments')) ;
      console.log(all_comments);
      setComments(all_comments);
      console.log(comments) 
    }
  },[]);

  const handelAddComment = (e)=>{
    let c = {postId:postId.id,st:comment,id:Math.random()*1000}
   let allComments=JSON.parse(localStorage.getItem('comments'))
    console.log(allComments)
    let newArr = [];
    if(allComments)
    newArr.push(...allComments)
    newArr.push(c)
    localStorage.setItem('comments',JSON.stringify(newArr))


   
    }




localStorage.setItem('comment',comment)
localStorage.setItem('comment_post_id',postId.id)
   localStorage.setItem(postId.id,comment)
let myIndex=-1;
const Delete = (id)=>{
comments.map(((ele,index) =>{
  console.log(id)
  console.log(ele.id)
  if(ele.id === id){
    myIndex=index;
    let id = document.getElementById('id');
    id.style.display='none'
    localStorage.clear();
  }


  }))
console.log('111111','----',myIndex);

comments.splice(myIndex,1,'')
localStorage.setItem('comments',JSON.stringify(comments));
// console.log(comments.indexOf(myC));
}
const edit=(id)=>{
  comments.map(((ele,index) =>{
    console.log(id)
    console.log(ele.id)
    if(ele.id === id){
      myIndex=index;
    }
    }))
  console.log('111111','----',myIndex);

  comments.splice(myIndex,1,{postId:postId.id,st:editInput,id:Math.random()*100})
  localStorage.setItem('comments',JSON.stringify(comments));
}

    return (
      <>

      <Nav/>
  
          <div className='details-container'>

          <div class="ui cards" style={{ width:'70vw '}}>
  <div class="card">
    <div class="content">
      <div class="header">
      {postId.title}
      </div>
      <div class="meta">
      {postId.date}      </div>
      <div class="description">
      {postId.description}      </div>
    </div>
    <div class="extra content">
    <div class="ui input add-comment">
        <input
          type="text"
          placeholder="Add Comment"
          onChange={(e)=>setComment(e.target.value)}
        />
        <button style={{ padding: '0 28px 0 28px !important'}} class="ui secondary button" onClick={handelAddComment}>
          Add comment
        </button>
      </div>
    </div>
  </div>
  

</div>
          
       


          </div>

          {/* {comments.map(ele=>(
          <div class="ui cards">
  <div class="card">
    <div class="content">
      <div class="header">
      {ele.st}
      </div>
    
    </div>
    <div class="extra content">
      <div class="ui two buttons">
        <div class="ui basic green button" onClick={()=>edit(ele.id)}>Edite</div>
        <div class="ui basic red button" onClick={()=>Delete(ele.id)}>Delete</div>
      </div>
    </div>
  </div>

</div>
 ))} */}
 <div>
{comments.map(ele=>(
<div id='id'>
  <h1>{ele.st}</h1>
  
<button onClick={()=>Delete(ele.id)}>delete</button>
<button onClick={()=>edit(ele.id)}>update</button>
</div>
))}
</div> 
 <div>
          
           <div>
              <input type="text" name='editInput' onChange={(e)=>{setEditInput(e.target.value)}}/>
            </div>
          </div> 
      
         <form class="ui form"> 
  <div class="field"> 
    <label>First Name</label> 
    <input type="text" name="first-name" placeholder="First Name" /> 
  </div >

 <button class="ui button" type="submit">Update</button> 
</form> 

      </>
    )
  }


export default Details



