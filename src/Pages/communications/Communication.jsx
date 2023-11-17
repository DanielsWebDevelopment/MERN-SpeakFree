import React, { useEffect, useRef } from "react";
import "./communication.css";
import Navbar from "../../components/navbar/Nav";
import Footer from "../../components/footer/Footer";
import { Link } from "react-router-dom";
import { TbArrowsLeft } from "react-icons/tb";
import newImg1 from "../../assets/newimg1.jpg";
import newImg2 from "../../assets/newimg2.jpg";
import newImg3 from "../../assets/newimg3.jpg";
import newImg4 from "../../assets/newimg4.jpg";
import newImg5 from "../../assets/newimg5.jpg";
import gsap from "gsap";

function Communication() {

  const animation = useRef(null);

  useEffect(() => {
    const animate = animation.current;
    gsap.fromTo(animate, { opacity: 0 }, { opacity: 1, duration: 2 });
    gsap.from(".infotips__1", { duration: 0.5, x: "-100%", ease: "power2.in" });
    gsap.from(".infotips__2", { duration: 0.5, x: "100%", ease: "power2.in" });
    gsap.from(".caption-image", {
      duration: 0.5,
      x: "100%",
      ease: "power2.in",
    });
    gsap.from(".caption-image1", {
      duration: 0.5,
      x: "-100%",
      ease: "power2.in",
    });
  });

  return (
    <>
      <section className="stutterinfo-container">
        <Navbar></Navbar>
        <div className="stutterpage-title" ref={animation}>
          <h1>
            Tips to help with
            <br></br>
            <span>your Communication</span>
          </h1>
          <p>
            Good communication is the art of conveying thoughts, ideas, and
            emotions in a clear and effective manner. It involves not only
            expressing oneself clearly but also actively listening to others
            with empathy and understanding. Through good communication, people
            can establish connections, build trust, and foster positive
            relationships.
          </p>
        </div>
        <div className="stutterinfo-content">
          <div className="wrapper">
            <div className="infotips__1" id="communication_exercises">
              <h2>Active listening</h2>
              <p>
                Pay full attention to the speaker, showing interest through body
                language and verbal cues, and asking clarifying questions to
                ensure a clear understanding of their message. Make eye contact
                and node to show that you are engaged. Ask open-ended questions
                to encourage the speaker to elaborate. Paraphrasing and
                summarizing the speaker's points to confirm understanding.
                Providing verbal cues such as "I see," "Tell me more," or "That
                must have been tough."
              </p>
            </div>
            <div className="caption-image">
              <img src={newImg1} alt="cfunny" />
            </div>
          </div>
        </div>
        <div className="wrapper1 communications-wrapper2 ">
          <div className="infotips__2">
            <h2>Non-verbal Communication</h2>
            <p>
              Nonverbal cues can complement and enhance verbal communication,
              helping to convey emotions, attitudes, and intentions more
              clearly. They provide additional context and depth to
              conversations, helping listeners better understand the speaker's
              message. Nonverbal cues play a crucial role in expressing
              emotions. They allow individuals to convey their feelings, such as
              happiness, sadness, anger, or surprise, even when words might fail
              to fully capture the emotion."
            </p>
          </div>
          <div className="caption-image1">
            <img src={newImg2} alt="cfunny" />
          </div>
        </div>

        <div className="wrapper2 communications-wrapper4">
          <div className="infotips__3">
            <h2>Adaptability</h2>
            <p>
              Adapting your communication style to the preferences and
              background of your audience helps ensure that your message is
              better understood. People have different ways of processing
              information, and adapting your communication can increase the
              chances of your message resonating with them. eveloping
              adaptability in communication contributes to your personal growth
              and development. It encourages you to become more attuned to
              others' needs and to expand your own communication skills"
            </p>
          </div>
          <div className="caption-image4">
            <img src={newImg3} alt="cfunny" />
          </div>
        </div>

        <div className="wrapper3 communications-wrapper5">
          <div className="infotips__4">
            <h2>Ask Questions!</h2>
            <p>
              Adapting your communication style to the preferences and
              background of your audience helps ensure that your message is
              better understood. People have different ways of processing
              information, and adapting your communication can increase the
              chances of your message resonating with them. eveloping
              adaptability in communication contributes to your personal growth
              and development. It encourages you to become more attuned to
              others' needs and to expand your own communication skills"
            </p>
          </div>
          <div className="caption-image7">
            <img src={newImg4} alt="cfunny" />
          </div>
        </div>

        <div className="wrapper4 communications-wrapper7">
          <div className="infotips__5">
            <h2>Positive Body Language</h2>
            <p>
              Positive body language reinforces your spoken words, making your
              message clearer and easier to understand. It helps to emphasize
              important points and provides visual cues that enhance
              comprehension. Positive body language, such as maintaining eye
              contact, a genuine smile, and open gestures, fosters trust and
              credibility. It signals that you are sincere, approachable, and
              honest, which is essential for building strong relationships.
            </p>
          </div>
          <div className="caption-image8">
            <img src={newImg5} alt="cfunny" />
          </div>
        </div>
        <div className="communications-cta-container">
          <div className="communcations-cta">
            <h1>
              Check out some of
              <br></br>our Exercises!
            </h1>
            <small>Click below to learn more</small>
          </div>
          <Link to="/exercises#title" className="communicate">
            <small>Our Exercises</small>
          </Link>
        </div>
      </section>
      <section>
        <div className="prev-btn">
          <Link to="/stutter" className="previous-home">
            <TbArrowsLeft />
          </Link>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Communication;
