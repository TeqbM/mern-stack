import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { data } from './data'
export default function Post() {
  const param = useParams();
  const [blog, setBlog] = useState(data);
  let titleUrl = blog?.find(itml => itml.title.replaceAll(' ', '-') === param.id)
  
  const { body, category, date, id, image, title } = titleUrl


  return (
    <>

      <div className="py-12 bg-sky-100 mt-1">
        <h1 className="text-center text-3xl font-bold text-sky-600 capitalize">{title}</h1>
      </div>

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
    </>
  )
}
