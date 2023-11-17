import React, { useContext, useEffect } from 'react'
import './userexercises.css'
import { BsFillPenFill } from 'react-icons/bs'
import { AiFillHome } from 'react-icons/ai'
import { AiFillBook } from 'react-icons/ai'
import { FiLogOut } from 'react-icons/fi'
import { MdDashboard } from 'react-icons/md'
import { Link, useNavigate } from 'react-router-dom'
import Img11 from '../assets/img11.svg'
import AuthContext from '../context/AuthProvider';


function UserExercises() {
  const { auth } = useContext(AuthContext);
  const navigate = useNavigate();  

  useEffect(() => {
    if (!auth.isAuthenticated) {
      navigate("/login");
    }
  }, [auth.isAuthenticated, navigate]);

  return (
  <>
    <div className="dashboard__container">
      <nav className='sidebar'>
        <div className="main-sidebar__logo">
          <a href='/'><img src={Img11} alt='sidebar-logo' className='sidebar-logo_image'/></a>
        </div>
        <div className="logo"></div>
        <ul className='sidebar-main'>
          <li className='active'>
            <a href='/'><MdDashboard className='sidebar-icon'/>
              <span>Dashboard</span>
            </a>
          </li>
          <li>
            <Link to="/"><AiFillHome className='sidebar-icon'/>
              <span>Home</span>
            </Link>
          </li>
          <li>
            <a href='/'><AiFillBook className='sidebar-icon'/>
              <span>Exercises</span>
            </a>
          </li>
          <li>
            <a href='/yourprogress'><BsFillPenFill className='sidebar-icon'/>
              <span>Progress</span>
            </a>
          </li>
          <li className='logout'>
            <a href='/login'><FiLogOut className='sidebar-icon'/>
              <span>Logout</span>
            </a>
          </li>
          {/* plan for redirect */}
        </ul>      
      </nav>
      <div className='main-dashboard_container'> 
          <div className="dashboard-wrapper">
            <div className="dashboard-title">
              <small>Your Personal</small>
              <h3>Dashboard</h3>
            </div>

            <div className="dashboard-links">
              <Link to="/communicationexercises">Communication</Link>
              <Link to="/stutterexercises">Stuttering</Link>
            </div>
          </div>
          <div className="all-exercises_container">
            <div className="all-exercises_title">
              <h2>All Exercises</h2>
              <span>Choose  any exercise from easy to hard</span>
            </div>


            <div className="all-exercises_main">
              <h4 className='all-exercises_sub'>Foundational Communication Exercises</h4>
              <div className="all-exercises_cards">
                <div className="all-exercise_card">
                  <div className="exercise_dash-title">
                    <h6>Breathing Awareness</h6>
                  </div>
                  <div className="exercies-dash-info">
                    <small>Take your Breathing to the 
                    <br></br>next level!</small>
                  </div>
                  <div className="viewlinks">
                    <Link to="/breathingawareness" className='view-link'>View Exercise</Link>
                  </div>
                </div>
                <div className="all-exercise_card">
                  <div className="exercise_dash-title">
                    <h6>Mirror Talk</h6>
                  </div>
                  <div className="exercies-dash-info">
                    <small>Focus on practicing Mirror 
                      <br></br>Talk</small>
                    <Link to="/mirrortalk" className='view-link'>View Exercise</Link>
                  </div>
                </div>

                <div className="all-exercise_card">
                  <div className="exercise_dash-title">
                    <h6>Word Pacing</h6>
                  </div>
                  <div className="exercies-dash-info">
                    <small>Pace your words and 
                      <br></br>practice with word pacing</small>
                    <Link to="/wordpacing" className='view-link'>View Exercise</Link>
                  </div>
                </div>

                <div className="all-exercise_card">
                  <div className="exercise_dash-title">
                    <h6>Breath Control</h6>
                  </div>
                  <div className="exercies-dash-info">
                    <small>Control your breathing with 
                    <br></br>Breath Control.</small>
                    <Link to="/breathcontrol" className='view-link'>View Exercise</Link>
                  </div>
                </div>

                <div className="all-exercise_card">
                  <div className="exercise_dash-title">
                    <h6>Vocal Warm-Up</h6>
                  </div>
                  <div className="exercies-dash-info">
                    <small>Warm-up your voice with 
                    <br></br>Vocal Warm-ups.</small>
                    <Link to="/vocalwarmup" className='view-link'>View Exercise</Link>
                  </div>
                </div>

                <div className="all-exercise_card">
                  <div className="exercise_dash-title">
                    <h6>Choral Reading</h6>
                  </div>
                  <div className="exercies-dash-info">
                    <small>Practice your speech with 
                    <br></br>Choral Reading.</small>
                    <Link to="/chroalreading" className='view-link'>View Exercise</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>


          <div className="intermediate_communication">
            <h1 className='intermediate-communcation_exercises'>Foundational Stuttering <br></br>Exercisess</h1>
            <small className='sub-intermediate__exercises'>Choose any exercise from easy to hard</small>
          </div>

          <div className="sub-intermediate_communcation_exercises">
            <div className="all-exercise_card">
              <div className="exercise_dash-title">
                  <h6>Easy Repitition</h6>
              </div>
                <div className="exercies-dash-info">
                  <small>Enhance your speech with 
                  <br></br>Easy Repitition</small>
                  <Link to="/easyrep" className='view-link'>View Exercise</Link>
                </div>
            </div>

            <div className="all-exercise_card">
              <div className="exercise_dash-title">
                  <h6>Fluency Shaping</h6>
              </div>
              <div className="exercies-dash-info">
                <small>Shape your speech with nice
                <br></br>Fluency Shaping.</small>
                <Link to="/fluencyshaping" className='view-link'>View Exercise</Link>
              </div>
            </div>

            <div className="all-exercise_card">
              <div className="exercise_dash-title">
                  <h6>Loud and Proud</h6>
              </div>
              <div className="exercies-dash-info">
                <small>Volcalize your voice with 
                <br></br> bring Loud and Proud.</small>
                <Link to="/loudandproud" className='view-link'>View Exercise</Link>
              </div>
            </div>

            <div className="all-exercise_card">
              <div className="exercise_dash-title">
                  <h6>Stuttering Diary</h6>
              </div>
              <div className="exercies-dash-info">
                <small>Start your next chapter with 
                <br></br> starting to take notes.</small>
                <Link to="/stutteringdiary" className='view-link'>View Exercise</Link>
              </div>
            </div>

            <div className="all-exercise_card">
              <div className="exercise_dash-title">
                  <h6>Stuttering Modification</h6>
              </div>
              <div className="exercies-dash-info">
                <small>Modify your speech with our 
                <br></br>Speech Modification.</small>
                <Link to="/stutteringmodificatiion" className='view-link'>View Exercise</Link>
              </div>
            </div>

            <div className="all-exercise_card">
              <div className="exercise_dash-title">
                  <h6>Speech Rate Control</h6>
              </div>
              <div className="exercies-dash-info">
                <small>Control the rate of your Speech 
                <br></br>with Speech Rate Control.</small>
                <Link to="/speechratecontrol" className='view-link'>View Exercise</Link>
              </div>
            </div>
          </div>
      </div>
    </div>
  </>
  )
}

export default UserExercises

