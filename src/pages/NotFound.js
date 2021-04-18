import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import image from '../images/error404.jpg'

function NotFound() {
  return (
    <>
      <Header />
      <h3>The page you are looking for do not exist</h3>
      <div className="img-container">
        <img src={image} alt="Error 404" />
      </div>
      <a href="https://br.freepik.com/vetores/abstrato">Vetor abstrato criado por freepik - br.freepik.com</a>
      <Footer />
    </>
  )
}

export default NotFound;
