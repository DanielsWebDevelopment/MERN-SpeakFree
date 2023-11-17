import React, { useEffect, useRef } from "react";
// stylesheet import
import "./stutter.css";
import { Link } from "react-router-dom";
import { TbArrowsLeft } from "react-icons/tb";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from "../components/navbar/Nav";
import Footer from "../components/footer/Footer";
import Img8 from "../assets/img8.jpg";
import Img6 from "../assets/img6.jpg";
import Img9 from "../assets/img9.jpg";
import Img7 from "../assets/img7.jpg";
import Img10 from "../assets/img10.jpg";
import gsap from 'gsap';


gsap.registerPlugin(ScrollTrigger);

function Stutter() {

  const animation = useRef(null);

  useEffect(() => {
    const animate = animation.current;
    gsap.fromTo(animate, { opacity: 0}, { opacity: 1, duration: 2 });
    gsap.from(".infotips__1", { duration: 0.5, x: "-100%", ease: "power2.in" });
    gsap.from(".infotips__2", { duration: 0.5, x: "100%", ease: "power2.in" });
    gsap.from(".caption-image", { duration: 0.5, x: "150%", ease: "power2.in" });
    gsap.from(".caption-image1", { duration: 0.5, x: "-150%", ease: "power2.in" });
    
  });

  return (
    
      <>
{/* main stutter title */}
      <section className="stutterinfo-container">
        <Navbar></Navbar>
        <div className="stutterpage-title" ref={animation} id="title">
          <h1>Tips to help with <span>your speech</span></h1>
          <p>
            Whether you're seeking practical strategies to overcome stuttering,
            looking to refine your communication skills, or simply striving for
            greater self-expression, StutterFreeSpeak is your partner on this
            transformative journey. Join us and embark on a path towards
            clearer, confident, and more effective communication. Your voice
            matters, and we're here to help it shine.
          </p>
        </div>

{/* main Sutter Info */}
        <div className="stutterinfo-content">
          <div className="wrapper">
            <div className="infotips__1">
              <h2>Take it Slow!</h2>
              <p>
                Speaking slowly can be a powerful tool in overcoming stammering
                and enhancing your speech. By consciously slowing down your
                speech rate, you allow your mind and vocal apparatus to
                synchronize more effectively, reducing the likelihood of
                stumbling over words. This deliberate pace gives you the time to
                formulate your thoughts and choose your words with precision,
                leading to increased clarity and fluency.
              </p>
            </div>
            <div className="caption-image">
              <img src={Img8} alt="cfunny" />
            </div>
          </div>
        </div>

        <div className="stutterinfo-content">
          <div className="wrapper1">
            <div className="infotips__2">
              <h2>Sound out the words!</h2>
              <p>
                Sounding out words can be a valuable technique for managing
                stuttering and promoting smoother speech. When you sound out
                words, you break them down into smaller, manageable segments,
                allowing your speech muscles to execute each sound more fluidly.
                This method helps alleviate the pressure of anticipating potential
                blocks and eases the natural flow of conversation.
              </p>
            </div>
            <div className="caption-image1">
              <img src={Img6} alt="cfunny" />
            </div>
          </div>
        </div>

        <div className="new_info">
          <div className="stutterinfo-content">
            <div className="wrapper2">
              <div className="infotips__3">
                <h2>Try Humming!</h2>
                <p>
                  Humming can serve as a beneficial technique for individuals who
                  stutter Humming engages and activates various speech-related
                  muscles, including those responsible for articulation and breath
                  control. By humming you create a gentle vibration that can help
                  reduce tension and increase airflow, promoting a more relaxed and
                  controlled speaking environment
                </p>
              </div>
              <div className="caption-image4">
                <img src={Img9} alt="cfunny" />
              </div>
            </div>
          </div>
        </div>

        <div className="new_info">
          <div className="stutterinfo-content">
            <div className="wrapper3">
              <div className="infotips__4">
                <h2>Example Humming!</h2>
                <p>
                  Humming can serve as a beneficial technique for individuals who
                  stutter Humming engages and activates various speech-related
                  muscles, including those responsible for articulation and breath
                  control. By humming you create a gentle vibration that can help
                  reduce tension and increase airflow, promoting a more relaxed and
                  controlled speaking environment
                </p>
                <div className="lineinfo6"></div>
              </div>
              <div className="caption-image7">
                <img src={Img7} alt="cfunny" />
              </div>
            </div>
          </div>
        </div>

        <div className="new_info">
          <div className="stutterinfo-content">
            <div className="wrapper4">
              <div className="infotips__5">
                <h2>Gentle Onset!</h2>
                <p>
                  Gentle onset techniques help prevent or minimize the occurrence of
                  stuttering blocks, where a person gets stuck on a word or sound.
                  By starting speech in a controlled manner, the likelihood of
                  getting caught in a block is reduced, allowing for smoother
                  communication. A good example would be to Start speaking with a
                  slow and relaxed initiation. Gradually increase your speaking rate
                  as you feel more comfortable.
                </p>
                <div className="lineinfo7"></div>
              </div>
              <div className="caption-image8">
                <img src={Img10} alt="cfunny" />
              </div>
            </div>
          </div>
        </div>
{/* End main Sutter Info */}

{/* StutterInfo CTA */}
        <div className="communications-cta-container">
          <div className="communcations-cta">
            <h1>Check out some of 
            <br></br>our Communication Tips!</h1>
            <small>Click below to learn more</small>
          </div>
          <Link to="/communication#title" className="communicate">
            <small>Communication Tips</small>
          </Link>
        </div>
      </section>
      <section>
        <div className="prev-btn">
          <Link to="/" className="previous-home">
            <TbArrowsLeft />
          </Link>
        </div>
      </section>
      <Footer />
      </>
  );
}
export default Stutter;
