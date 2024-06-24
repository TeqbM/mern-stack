import { useParams } from 'react-router-dom';

export default function Home() {
  let {userId} = useParams();
  
  console.log(userId);
  return (
    <section>
        Home page
    </section>
  )
}
