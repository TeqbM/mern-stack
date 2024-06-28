import Section from '../Atoms/Section'
import Container from '../Atoms/Container'
import Input from '../Atoms/Input'
import { useState } from 'react'



export default function Contact() {
const [name,setName] = useState('');
const [email,setEmail] = useState('');
const submitForm = (ele)=>{
  console.log({name,email});
  ele.preventDefault()
} 

  return (
    <Section>
        <Container>
            <form onSubmit={submitForm}>
              <Input value={name} onChange={(e)=> setName(e.target.value)} />
              <Input value={email} onChange={(e)=> setEmail(e.target.value)} />
              <br />
              <button type='submit' className='btn'>Add</button>
            </form>
        </Container>
    </Section>
  )
}