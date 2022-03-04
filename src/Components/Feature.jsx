import React from 'react';
import FeatureBox from './FeatureBox';
import featureimage from '../Components/images/feature_1.png';
import featureimage1 from '../Components/images/feature_2.png';
import featureimage2 from '../Components/images/feature_3.png';
function Feature() {
  return (
    <div id='features'>
      <div className='a-container'>
        <FeatureBox image={featureimage} title='Development Course'></FeatureBox>
        <FeatureBox image={featureimage1} title='Money Saving Services'></FeatureBox>
        <FeatureBox image={featureimage2} title='Usability Interface'></FeatureBox>
      </div>
    </div>
  );
}

export default Feature;
