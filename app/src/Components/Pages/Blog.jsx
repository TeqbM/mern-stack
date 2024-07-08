import React from 'react'
import Section from '../Atoms/Section';
import Container from '../Atoms/Container';
import AllPost from '../Blog/AllPost';


export default function Blog() {
  

  return (
    <>
    <Section>
      <Container className='mb-12'>
        <AllPost />
        
      </Container>
    </Section>
    </>
  )
}