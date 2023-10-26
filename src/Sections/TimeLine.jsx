import React from "react"
import './TimeLine.css'

const TimeLine = () =>
    <footer className="timeLine_section ">
         
            <div className="row mt-3">
                <div className="col-3">
                    <h5 className="footer-h">  Follow me on  </h5>
                    </div>
                    <div className="col-1">
                    <a href="git" className="footer-list  ">Git </a>
                    </div>
                    <div className="col-1">
                    <a href="linkdin" className="footer-list  ">Linkdin </a>
                    </div>
                    <div className="col-1">
                    <a href="kaggle" className="footer-list  ">Kaggle </a>
                    </div>
                    <div className="col-1">
                    <a href="instagram" className="footer-list  ">Instagram </a>
                    </div>
                    <div className="col-1">
                    <a href="email" className="footer-list  ">Email </a>
                    </div>
                    <div className="col-2">
                    <button className="btn_downloadcv">Download CV </button>
                    </div>
                    
                    
                    
                   
                    
                    

            </div>
        

        <div className="footer-copyright text-center py-3">© 2023 Copyright:
            <a href="/"> myportofolio.com</a>
            <p>Developed by Sandesh Kedari</p>
        </div>

    </footer>

export default TimeLine


