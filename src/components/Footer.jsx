import React from 'react'
import Container from './Container';

const Footer = () => {
  const date = new Date();
  return (
    <div className="px-5 pt-5 mt-auto">
      <Container>
        <footer className="  bg-black text-white text-center py-2">
          {date.getFullYear()} Ecommerce. All rights reserved.
        </footer>
      </Container>
    </div>
  )
}

export default Footer