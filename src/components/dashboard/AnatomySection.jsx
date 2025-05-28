import React from 'react';
import '../styles/anatomy.css';

function AnatomySection() {
  return (
    <div className="anatomy">
      <img src="/assets/image1.png" className="anatomy-image" alt="Human Anatomy" />
      <div className="indicator heart">Healthy Heart</div>
      <div className="indicator leg">Healthy Leg</div>
    </div>
  );
}
export default AnatomySection;
