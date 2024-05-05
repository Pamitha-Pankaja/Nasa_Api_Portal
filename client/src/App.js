import { Routes as Switch ,Route} from 'react-router-dom';
import './App.css';
import Layout from './components/Layout';
import Login from './pages/Login';
import Register from './pages/Register';
import {AuthContextProvider} from './context/AuthContext';
import { ToastContextProvider } from './context/ToastContext';
import LandingPage from './pages/LandingPage';
//Rover
import Rover from './pages/rovers/Rover';
import RoverPhotosByEarthDate from './pages/rovers/RoverPhotosByEarthDate';
import RoverPhotosBySol from './pages/rovers/RoverPhotosBySol'
import RoverManifest from './pages/rovers/RoverManifest';
//Apod
import Apod from './pages/apods/Apod';
import PicOfDay from './pages/apods/PicOfDay'
import History from './pages/apods/History'
import Random from './pages/apods/Random'

function App() {
  return (
    <>
    <AuthContextProvider>
      <ToastContextProvider></ToastContextProvider>
      <Layout
        apodDrawer={['/apod', '/today', '/history', '/random'].includes(window.location.pathname)}
        roverDrawer={['/rover', '/roverManifest', '/solRoverPhotos', '/earthDatePhotos'].includes(window.location.pathname)}
      >
    <Switch>
      <Route path='/' element={<LandingPage/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/register' element={<Register/>}></Route>

      {/* apod routes */}
      <Route path='/apod' element={<Apod/>}></Route>
      <Route path='/today' element={<PicOfDay/>}></Route>
      <Route path='/history' element={<History/>}></Route>
      <Route path='/random' element={<Random/>}></Route>

      {/* rover routes */}
      <Route path='/rover' element={<Rover/>}></Route>
      <Route path='/roverManifest' element={<RoverManifest/>}></Route>
      <Route path='/solRoverPhotos' element={<RoverPhotosBySol/>}></Route>
      <Route path='/earthDatePhotos' element={<RoverPhotosByEarthDate/>}></Route>
      
    </Switch>

    </Layout>
    </AuthContextProvider>
    </>
  );
}

export default App;
