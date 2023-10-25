import React from "react";
 
const SkillCards = (props) => {
    return (
        <>
            <div   >
                <div className="card">
                    <div className="card-body text-center"  >
                        <h5 className="card-title " >{props.title}</h5>
                    </div>
                </div>
            </div><br /><br />
        </>
    )
}

export default SkillCards