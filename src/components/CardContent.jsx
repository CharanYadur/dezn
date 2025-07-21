  import React from 'react';
  import BG_video from "../assets/BG-video.mp4";
  import "./Landing.css";
  import { FaArrowRight } from "react-icons/fa";
  import { motion } from "framer-motion";

  const AnimatedHeading = ({ text }) => {
    return (
      <motion.div
        className="overflow-hidden"
        style={{ height: "36px", position: "relative" }}
        whileHover="hover"
        initial="initial"
      >
        <motion.div
          variants={{
            initial: { y: 0 },
            hover: { y: "-100%" },
          }}
          transition={{ duration: 0.4 }}
        >
          <h3 className="fw-bold m-0 text-black">{text}</h3>

          <h3 className="fw-bold m-0 text-primary position-absolute top-100 start-0 w-100">
            {text}
          </h3>
        </motion.div>
      </motion.div>
    );
  };

  const CardContent = () => {
    return (
     <div className="hero-wrapper">
        <video
          autoPlay
          loop
          muted
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        >
          <source src={BG_video} type="video/mp4" />
          Your browser does not support the video tag .
        </video>

        <div className='banner' style={{
          position: 'absolute',
          top: '62%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: 1,
          textAlign: 'center',
          color: '#fff',
          width: '100%'
        }}>
          <h1 style={{ fontWeight: 700, fontSize: "60px" }}>Manufacturers of High</h1>
          <h1 style={{ fontWeight: 700, fontSize: "60px" }}>Precision Equipment</h1>
          <p className='mt-4'>Manufacturers of High Precision Equipment</p>
          <button className='Learn-more mt-4 px-5'>
            Learn More <span><FaArrowRight className='ms-2' /></span>
          </button>

          <div className="row mt-5 d-flex bg-white text-black px-5 py-4" style={{
            maxWidth: '900px',
            margin: '2rem auto 0',
            borderRadius: '15px 15px 0px 5px'
          }}>
            <div className="col-lg-3">
              <div className="stat-item text-start">
                <AnimatedHeading text="20,000+" />
                <p className="mb-0" style={{ fontSize: "14px" }}>Km of Cable produced annually</p>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="stat-item text-start">
                <AnimatedHeading text="30+" />
                <p className="mb-0" style={{ fontSize: "14px" }}>Years of Industry Expertise</p>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="stat-item text-center">
                <AnimatedHeading text="100+" />
                <p className="mb-0" style={{ fontSize: "14px" }}>Cable sizes in our portfolio</p>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="stat-item text-center">
                <AnimatedHeading text="50,000" />
                <p className="mb-0" style={{ fontSize: "14px" }}>Sq. ft. State-of-the-art plant</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  export default CardContent;
