import { Route, Routes } from 'react-router-dom';
import NavBar from '../NavBar';
import Profil from '../Profil';
import Skills from '../Skills';
import Projects from '../Projects';
import Contact from '../Contact';

function App(){

    return (
        <>
        <NavBar />
        <Routes>
            <Route path='/' element={<Profil />}/>
            <Route path='/skills' element={<Skills />}/>
            <Route path='/projects' element={<Projects />}/>
            <Route path='/contact' element={<Contact />}/>
        </Routes>
        </>
    )
}

export default App;