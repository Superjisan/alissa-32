import React, { useState, useCallback } from 'react';
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import { photos } from "./photos";

import './App.css';

function App() {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };
  return (
    <div className="App">
      <h1>Happy Birthday Alissa Ortman</h1>
      <p>I am so thankful you are in my life bae. I made you a website of 32 images and how thankful I am to share all those memories with you. Love,
      Jisan</p>
      <a 
        href='https://photos.google.com/share/AF1QipNzEj98fcCRdo5XTrpe2rEZwX3Bz6FXpi8QCMGIsnOogZBGxZ1ARhYeaa5SH0q1Sg?key=TFNjS1pXQmFieXd4NDhwdTNPY3ZlT3oySVpaNV9R&source=ctrlq.org'>
          {/* <img src='https://lh3.googleusercontent.com/_vmWevyFAySSaEnKhOIy04u6b1jPoBn3O2rEAamipu8sqddYcZPd186pjDCfYjPeQyxqWciT6TFNt33wjpbKDLk25k5_6KRG-mZJo0vr7_34jyZZ-kmBZNtRensg-CDd2ibGur3uQA=w2400' /> */}
      </a>
      <Gallery photos={photos} onClick={openLightbox} />
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={photos.map(x => ({
                ...x,
                srcset: x.srcSet,
                caption: x.title
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </div>
  );
}

export default App;
