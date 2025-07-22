import React from 'react'
import "./Landing.css"
import Icon1 from "../assets/Icon1.png"
import Icon2 from "../assets/Icon2.png"
import Icon3 from "../assets/Icon3.png"
import Icon4 from "../assets/Icon4.png"
import Icon5 from "../assets/Icon5.png"
import Icon6 from "../assets/Icon6.png"
import Icon7 from "../assets/Icon7.png"
import Icon8 from "../assets/Icon8.png"
import IndustriesImg from "../assets/IndustriesImg.png"

const Industries = () => {
    return (
        <div>
            <div className='row industryDiv p-3' style={{ position: "relative" }}>
                <div className="col-md-9">
                    <div style={{ maxWidth: "500px", paddingLeft: "80px" }}>
                        <p className='who'>Who <span className='weare'>we are</span></p>
                        <p className='paragraph'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
                    </div>
                    <div className='redDiv'>
                        <div className="row">
                            <div className="col-lg-3 d-flex align-items-center gap-2">
                                <img src={Icon1} width={50} alt="" />
                                <p>Power distribution</p>
                            </div>
                            <div className="col-lg-3 d-flex align-items-center gap-2">
                                <img src={Icon2} width={50} alt="" />
                                <p>Rubber Industry</p>
                            </div>
                            <div className="col-lg-3 d-flex align-items-center gap-2">
                                <img src={Icon3} width={50} alt="" />
                                <p>Aerospace</p>
                            </div>
                            <div className="col-lg-3 d-flex align-items-center gap-2">

                            </div>
                        </div>
                        <div className="row mt-4">
                            <div className="col-lg-3 d-flex align-items-center gap-2">
                                <img src={Icon4} width={50} alt="" />
                                <p>Geophysical</p>
                            </div>
                            <div className="col-lg-3 d-flex align-items-center gap-2">
                                <img src={Icon5} width={50} alt="" />
                                <p>Automotive</p>
                            </div>
                            <div className="col-lg-3 d-flex align-items-center gap-2">
                                <img src={Icon6} width={50} alt="" />
                                <p> Appliance</p>
                            </div>
                            <div className="col-lg-3 d-flex align-items-center gap-2">

                            </div>
                        </div>
                        <div className="row mt-4">
                            <div className="col-lg-3 d-flex align-items-center gap-2">
                                <img src={Icon7} width={50} alt="" />
                                <p>Electronic</p>
                            </div>
                            <div className="col-lg-3 d-flex align-items-center gap-2">
                                <img src={Icon8} width={50} alt="" />
                                <p>Telecommunication</p>
                            </div>
                            <div className="col-lg-3 d-flex align-items-center gap-2">
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-md-3 '>
                    <div style={{ position: "absolute", top: 30, right: 130 }} className='industryImage'>
                        <img src={IndustriesImg} width={550} alt="" />
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Industries
