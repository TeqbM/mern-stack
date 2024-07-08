import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
import Container from '../Atoms/Container'
export default function Post() {
  const [post, setPost] = useState('');

  const blogUrl = import.meta.env.VITE_GET_POST;
  const param = useParams();

  let postUrl = `${blogUrl}/${param.id}`

  useEffect(() => {
    try {
      axios.get(postUrl).then((response) => {
        setPost(response.data);
      })
    } catch (error) {
      console.log(error.message);
    }
  }, [])

  const { body, category, date, id, image, title } = post

  return (
    <>

      <div className="py-12 bg-sky-100/50 mt-1">
        <h1 className="text-center text-3xl font-bold text-sky-600 capitalize">{title}</h1>
      </div>

      <section className='py-3 bg-sky-100/50 border-t-4 border-sky-100'>
        <Container>
          <ul className='flex gap-2 items-center'>
            <li><Link to="/" className='flex gap-2 items-center hover:text-sky-600'> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" class="size-5"><path fill-rule="evenodd" d="M9.293 2.293a1 1 0 011.414 0l7 7A1 1 0 0117 11h-1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-3a1 1 0 00-1-1H9a1 1 0 00-1 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-6H3a1 1 0 01-.707-1.707l7-7z" clip-rule="evenodd"></path></svg> Home</Link></li> /
            <li><Link to="/blog"> Back Blog</Link></li>
          </ul>
        </Container>
      </section>

        <section className="mb-16">
          <div className="w-full max-w-3xl mx-auto py-2">
            <div className="relative">
              <span className="badge">{category}</span>
              <img src={image} alt="" className=" w-full" />
              <small className="text-slate-400">{date}</small>

              <div>
                {body}
              </div>

            </div>
          </div>
        </section>
    </>
  )
}
