import React, { useState } from 'react';
import UploadPdf from './UploadPdf'; // Import the UploadPdf component
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';
import './header.css';

const Header = () => {
  const [videoUrl, setVideoUrl] = useState('');

  return (
    <div className="gpt3__header section__padding" id="home">
      <div className="gpt3__header-content">
        <h1 className="gradient__text">Let&apos;s summarize PDF and transform it into video </h1>
        <p>With VidifyPDF, you can turn your PDF into stunning professional-looking video content just in a few clicks without any significant efforts. This is a versatile tool for those who want to create efficient video production.</p>

        <div className="gpt3__header-content__input">
          <input type="email" placeholder="Enter PDF" />
          <button type="button">Convert to video</button>
        </div>

        <div className="gpt3__header-content__people">
          <UploadPdf setVideoUrl={setVideoUrl} /> {/* Pass setVideoUrl as a prop */}
        </div>
      </div>

      <div className="gpt3__header-image">
        {videoUrl && <video controls src={videoUrl} type="video/mp4" />}
        <img src={ai} />
      </div>
    </div>
  );
};

export default Header;
