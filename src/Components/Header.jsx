import React from 'react';
import Navbar from './Navbar';
function Header() {
  return (
    <div id='main'>
      <Navbar/>
      <div className='name'>
        <h1><span>Lanuch Your App</span> With Confidance And Creativity</h1>
        <p className='details'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo totam asperiores error nihil aliquam sequi earum, sed sunt hic, pariatur natus, voluptas quidem omnis excepturi minus consectetur cupiditate ipsum alias!</p>
        <a href="#" className='cv-btn'>Download</a>
      </div>
    </div>
  );
}

export default Header;
