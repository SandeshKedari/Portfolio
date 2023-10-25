import React from 'react';
import Titlebar from './Navbar';
import About from './About';
import TechnicalSkills from './TechnicalSkills';
import Experience from './Experience';
import TimeLine from './TimeLine';

//import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
const Page = () => {
    return (
        
        <>
            <Titlebar />
            <About/>
            <TechnicalSkills/>
            <Experience/>

            <div className="footer m-1">
            <TimeLine/>
            </div>




        </>

    );
};

export default Page;

// <Router>
//             <Titlebar />
//             <Routes>
//                 <Route path="/" element={<About />} />

//                 <Route path="technicalskill" element={<TechnicalSkills />} />
//                 <Route path="experience" element={<Experience />} />
//                 <Route path="downloadcv" element={<About />} />
//                 <Route path="footer" element={<TimeLine />} />
                 

//             </Routes>
//         </Router>