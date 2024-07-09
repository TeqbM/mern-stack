import React, { useState } from 'react'
import Container from '../Atoms/Container'
import Input  from '../Atoms/Input'
import Button  from '../Atoms/Button'

export default function AddPost() {
  const [title, setTitle] = useState('')
  const [desc, setDesc] = useState('')
  const [cat, setCat] = useState('')
  const [imgurl, setImgUrl] = useState('')
  const [date, setDate] = useState('')

  const addPosts = (ele) =>{
    ele.preventDefault();

    const post ={
      id: Date.now(),
      title,
      body:desc,
      category:cat,
      image:imgurl,
      date,
    }
    console.log(post);

  }
  return (
    <>
      <section>
        <Container>

          <div className="max-w-xl mx-auto w-full cart">
            <h1 className='title'>Add Post </h1>
            <form onSubmit={addPosts}>
              <Input placeholder="Enter title" value={title} onChange={(e)=> setTitle(e.target.value)}/>
              <div className='mt-3'>
                <textarea name="" value={desc} onChange={(e)=> setDesc(e.target.value)} placeholder='Enter Description'></textarea>
              </div>
              <Input placeholder="Enter category" value={cat} onChange={(e)=> setCat(e.target.value)}/>
              <Input type="url" placeholder="Enter url" value={imgurl} onChange={(e)=> setImgUrl(e.target.value)}/>
              <Input type="date" placeholder="Enter title" value={date} onChange={(e)=> setDate(e.target.value)}/>
              <div className="mt-3">
                <Button>Add post</Button>
              </div>
            </form>

          </div>
        </Container>
      </section>   
    </>
  )
}
