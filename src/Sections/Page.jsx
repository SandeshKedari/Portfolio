import React from 'react';
import Titlebar from './Navbar';
import About from './About';
import TechnicalSkills from './TechnicalSkills';
import Experience from './Experience';
import TimeLine from './TimeLine';
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