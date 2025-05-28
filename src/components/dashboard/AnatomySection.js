import React from 'react';
import '../../styles/anatomy.css'; // ✅ Corrected relative path


function AnatomySection() {
  return (
    <div className="anatomy">
      <img src="/assets/images/image1.png" className="anatomy-image" alt="Anatomy" />
      <div className="indicator heart">Healthy Heart</div>
      <div className="indicator leg">Healthy Leg</div>
    </div>
  );
}

export default AnatomySection;
