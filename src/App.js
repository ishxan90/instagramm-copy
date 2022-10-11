import './App.css';
import {Routes, Route} from 'react-router-dom'
import HeaderWrapper from './pages/HeaderWrapper';
import Posts from './components/Posts/Posts';
import AddImg from './components/AddImg/AddImg';
import Messenges from './components/Messenges/Messenges';
import Profile from './components/Profile/Profile';
import Login from './components/Login/Login';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/main' element={<HeaderWrapper />}>
            <Route index element={<Posts />} />
            <Route path='newpost' element={<AddImg />}/>
            <Route path='messages' element={<Messenges />}/>
            <Route path='profile' element={<Profile />}/>
        </Route>
        <Route path="*" element={<h1>Error 404</h1>} />
      </Routes>
    </div>
  );
}

export default App;
