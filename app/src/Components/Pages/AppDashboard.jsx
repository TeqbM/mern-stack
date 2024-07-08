import React from 'react'
import AddPost from '../Blog/AddPost'
import Section from '../Atoms/Section'
import Container from '../Atoms/Container'

export default function AppDashboard() {
  return (
    <>
     <Section>
          <Container>
               <AddPost />
          </Container>
     </Section>
    </>
  )
}
