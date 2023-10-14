import React from "react"
import './TimeLine.css'

const TimeLine = () => <footer className="page-footer font-small blue pt-4">
    <div className="container-fluid text-center text-md-left">
        <div className="row">
            <div className="col-md-6 mt-md-0 mt-3">
                <h5 className="footer-h">  STAY CONNECTED  </h5>
                <p className="footer-p">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                 when an unknown printer took a galley of type and scrambled it to make a type specimen book..</p>
            </div>

            <hr className="clearfix w-100 d-md-none pb-0"/>

            <div className="footer-list col-md-3 mb-md-0 mb-3">
                <h5 className="text-uppercase">Links</h5>
                <ul >
                    <li><a href="home"  className="footer-list">Home</a></li>
                    <li><a href="skills" className="footer-list  ">Skills </a></li>
                    <li><a href="experience" className="footer-list  ">Experience </a></li>
                    <li><a href="about" className="footer-list  ">AboutUs </a></li>
                </ul>
            </div>

            {/* <div className="col-md-3 mb-md-0 mb-3">
                <h5 className="text-uppercase">Links</h5>
                <ul className="list-unstyled">
                    <li><a href="#!">Link 1</a></li>
                    <li><a href="#!">Link 2</a></li>
                    <li><a href="#!">Link 3</a></li>
                    <li><a href="#!">Link 4</a></li>
                </ul>
            </div> */}
        </div>
    </div>

    <div className="footer-copyright text-center py-3">© 2023 Copyright:
        <a href="/"> myportofolio.com</a>
        <p>Developed by Sandesh Kedari</p>
    </div>

</footer>

export default TimeLine


