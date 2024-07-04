import { Link } from "react-router-dom"

import { useEffect, useState } from "react";
import axios from 'axios'

export default function Addblog() {
     const [post, setPost] = useState([]);
     const blogUrl = import.meta.env.VITE_GET_POST;

     useEffect(() =>{
          try {
               axios.get(blogUrl).then((response)=>{
                    setPost(response.data);
               })
          } catch (error) {
               console.log(error.message);
          }
          
     },[])
     
     const getDateFormat =(date) =>{
          const dateObject = new Date(date);
          let day = dateObject.getDate()
          let month = dateObject.getMonth() +1
          let year = dateObject.getFullYear();
          let fulldate = `${day}-${month}-${year}`;
          return fulldate
     }


     return (
          <>
               {post.length > 0 ? (
                    <ul className="grid grid-cols-3 gap-3">
                         {post?.map(itm => <li key={itm.id} className="cart">
                              <span className="badge">{itm.category}</span>
                              <img src={itm.image} alt={itm.title} className="rounded-md " />
                              <Link to={`/blog/${itm.title.replaceAll(' ', '-')}`}> <h3 className="text-sky-600 font-semibold text-2xl my-2">{itm.title}</h3></Link>
                              <div>{itm.body.slice(0,50)}...</div>
                              <div className="my-3">
                                   <Link to={`/blog/${itm.title.replaceAll(' ', '-')}`} className="btn stressed-linked">
                                        Read More...
                                   </Link>
                              </div>
                              <div className="border-t pt-2 mt-3">
                                   <small className="text-slate-400">{getDateFormat(itm.date)}</small>
                              </div>
                         </li>
                    )}
                    
                    </ul>
               ) : (
                    <ul>
                         <li>datat not found</li>
                    </ul>
               )
               }
          </>
     )
}
