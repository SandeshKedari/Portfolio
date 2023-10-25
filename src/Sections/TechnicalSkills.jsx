import React from 'react';
import SkillCards from './SkillCards';

const TechnicalSkills = () => {
    return (
        <>
            <h1>What I do</h1>
            <h5>Below is the quick overview of my technical skill sets and technology i use.
                Want to find more about my experience ? Checkout my Resume & Work Experience</h5>
            <div className="container" >
                <div className="row" >

                    <div className="col">
                        <SkillCards name='welcome to Page'
                            title="ReactJS"
                        />
                    </div>

                    <div className="col">
                        <SkillCards name='welcome to Page'
                            title="HTML"
                        />
                    </div>

                    <div className="col">
                        <SkillCards name='welcome to Page'
                            title="CSS"
                        />
                    </div>
                    <div className="col">
                        <SkillCards name='welcome to Page'
                            title="JavaScript"
                        />
                    </div>
                    <div className="col">
                        <SkillCards name='welcome to Page'
                            title="Bootstrap"
                        />
                    </div>

                    <div className="col">
                        <SkillCards name='welcome to Page'
                            title="NodeJS"
                        />
                    </div>

                </div>
            </div>
        </>
    );
};

export default TechnicalSkills;


// <div className="container" >
// <div className="row" >

//     <div className="col">
//         <Card name='welcome to About Page'
//             imgsrc="Aster.jpg"
//             title="Aster Plant"
//             price="₹ 40"
//             desc='/Aster' />
//     </div>
//     <div className="col">
//         <Card name='welcome to About Page'
//             imgsrc="Dahila.jpg"
//             title="Dahila Plant" price="₹ 40" />

//     </div>


//     <div className="col">
//         <Card name='welcome to About Page'
//             imgsrc="JatrophaRed.jpg"
//             title="Jatropha Red Plant" price="₹ 40" />
//     </div>
// </div>
// </div>