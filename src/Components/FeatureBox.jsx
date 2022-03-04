import React from 'react';

function FeatureBox(props) {
  return (
    <div className='a-box'>
        <div className='a-b-img'>
            <img src={props.image} alt="" />
        </div>
      <div className='s-b-text'>
          <h2>{props.title}</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit maiores deserunt dolores nihil labore possimus, voluptas minima recusandae, earum maxime beatae quod! Pariatur incidunt harum tempora aliquam assumenda odio! Quidem!</p>
      </div>
    </div>
  );
}

export default FeatureBox;
