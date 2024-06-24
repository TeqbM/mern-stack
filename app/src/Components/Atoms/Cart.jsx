import Button from './Button'
export default function Cart({}) {

  return (
    <div className='p-4 rounded-md border border-sky-100  dark:bg-slate-800 dark:[&_*:not(.btn)]:text-white'>
          <h3>Lorem, ipsum dolor.</h3>
          <div className='my-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis magni similique placeat recusandae praesentium illo!</div>
          <Button>Read More..</Button>
    </div>
  )
}
