import React from 'react';
import data from '../../data/index.json';

export default function MySkills() {
  // Define the BlackBox component
  const BlackBox = () => (
    <div className="black-box">
      {/* Add the title */}
      <h3 className="black-box-title">DNA Repair Capacity</h3>
      {/* Add the text */}

      {/* Add the image */}
      <img src="/img/Screen Shot 2024-03-20 at 3.21.43 PM (1).png" alt="Image" className="black-box-img" />
    </div>
  );
  return (
    <section className="skills--section" id="mySkills">
      <div className="portfolio--container">
        <h2 className="skills--section--heading">Research</h2>
      </div>
      
      <div className="skills--section--container">
        {data?.skills?.map((item, index) => (
          <div key={index} className="skills--section--card">
            <div className="skills--section--img">
              <img src={item.src} alt="Product Chain" />
            </div>
            <div className="skills--section--card--content">
              <h3 className="skills--section--title">{item.title}</h3>
              <p className="skills--section--description">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
