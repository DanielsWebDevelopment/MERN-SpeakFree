import ReactDOM from 'react-dom'
import App from './App.jsx';
import './index.css'
import Stutterinfo from './Pages/Stutter.jsx'
import Communications from './Pages/communications/Communication.jsx'
import Exercises from './Pages/exercises/Exercises.jsx'
import ExercisesPt1 from './Pages/exercisespt1/ExercisesPt1.jsx'
import CExercises from './Pages/exercisespt2/CExercises.jsx'
import Login from './login/Login.jsx'
import Register from './register/Register.jsx'
import UserExercises from './userexercises/UserExercises.jsx'
import BreathingAwareness from './Pages/Bawareness/BAwareness.jsx'
import MTalk from './Pages/Mtalk/MTalk.jsx'
import WPace from './Pages/WPace/WPace.jsx'
import BControl from './Pages/BControl/BControl.jsx'
import VWarmUp from './Pages/VwarmUp/VWarmUp.jsx'
import CReading from './Pages/Creading/CReading.jsx'
import EasyRep from './Pages/EasyRep/EasyRep.jsx'
import Fshaping from './Pages/FluencyControl/FShaping.jsx'
import LpControl from './Pages/LPControl/LPControl.jsx'
import SDiary from './Pages/SDiary/SDiary.jsx'
import SModification from './Pages/SModification/SModification.jsx'
import SRControl from './Pages/SRControl/SRControl.jsx'
import Progress from './Pages/progress/Progress.jsx'
import { AuthProvider } from './context/AuthProvider.jsx';
import { BrowserRouter, Route, Routes } from "react-router-dom";


ReactDOM.render(
  <AuthProvider>
    <BrowserRouter>
      <>
        <Routes>
          <Route path="/" element={<App />} /> {/* This should be the first route */}
          <Route path="/stutter" element={<Stutterinfo />} />
          <Route path="/communication" element={<Communications />} />
          <Route path="/exercises" element={<Exercises />} />
          <Route path="/stutterexercises" element={<ExercisesPt1 />} />
          <Route path="/communicationexercises" element={<CExercises />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/userexercises" element={<UserExercises />} />
          <Route path="/breathingawareness" element={<BreathingAwareness />} />
          <Route path="/mirrortalk" element={<MTalk />} />
          <Route path="/wordpacing" element={<WPace />} />
          <Route path="/breathcontrol" element={<BControl />} />
          <Route path="/vocalwarmup" element={<VWarmUp />} />
          <Route path="/chroalreading" element={<CReading />} />
          <Route path="/easyrep" element={<EasyRep />} />
          <Route path="/fluencyshaping" element={<Fshaping />} />
          <Route path="/loudandproud" element={<LpControl />} />
          <Route path="/stutteringdiary" element={<SDiary />} />
          <Route path="/stutteringmodificatiion" element={<SModification />} />
          <Route path="/speechratecontrol" element={<SRControl />} />
          <Route path="/yourprogress" element={<Progress />} />
        </Routes>
      </>
    </BrowserRouter>
  </AuthProvider>,
  document.querySelector('#root')
);