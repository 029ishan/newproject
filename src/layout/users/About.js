import React from 'react'
import styled from 'styled-components'
import UserNavbar from './UserNavbar'

const About = () => {
  const Wrapper= styled.section`;`
  return (
    <Wrapper>
      <UserNavbar/>
    <h2 className='container'>Feel Free to contact Us</h2>

    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.0455663650887!2d85.31851898072442!3d27.684986514816774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19735ce5cb9b%3A0x9937647256eca8d8!2sAegis%20Software%20Pvt.%20Ltd.!5e0!3m2!1sen!2snp!4v1718361082935!5m2!1sen!2snp" title='Example Website' width="100%" height="450" style={{border:0}} allowFullScreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    
    {/* <div className="container">
       <div className='contact-form'>
        <form action='#' method='POST'>
      <input type='text'
      name='username'
      placeholder='username'
      autoComplete='off'
      required/>
      <input type='email'
      name='email'
      placeholder='email'
      autoComplete='off'
      required/> 
      <textarea name="message" cols="30" row ="6" autoComplete='off'
      required/>
        </form>
       </div>
    </div> */}
    </Wrapper>
  )
}

export default About
