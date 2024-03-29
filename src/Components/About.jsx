import React from 'react';

function About(props) {
  return (
    <div id='about'>
      <div className='about-image'>
        <img src={props.image} alt="" />
      </div>
      <div className='about-text'>
          <h2>{props.title}</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, sunt. Molestias repellendus culpa dolores, nulla libero vitae odio aliquam, doloremque accusamus dignissimos dicta aspernatur adipisci possimus quas incidunt deserunt qui maiores, dolor dolorem itaque sapiente.</p>
          <button>{props.button}</button>
      </div>
    </div>
  );
}

export default About;
