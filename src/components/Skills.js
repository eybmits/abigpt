import React from 'react';
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  const videoContainerStyle = {
    position: 'relative',
    width: '100%',
    paddingBottom: '56.25%', // 16:9 Aspect Ratio
    height: 0,
    marginTop: '20px', // Adjust as needed for spacing
  };

  const videoStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    borderRadius: '15px', // Rounded corners
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>Behalte den Überblick, wann du bereit bist für die Prüfung.</p>
              <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5>Analysis</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Image" />
                  <h5>Stochastik</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="Image" />
                  <h5>Geometrie</h5>
                </div>
              </Carousel>
              {/* Embed YouTube Video */}
              <div style={videoContainerStyle}>
                <iframe
                  style={videoStyle}
                  src="https://www.youtube.com/embed/YDV1mo7QlnA" // Replace [VIDEO_ID] with the actual ID of the YouTube video
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen>
                </iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  );
}

export default Skills;
