import React from 'react'
import CardImg1 from '../assets/CardImg1.png'
import CardImg2 from '../assets/CardImg2.png'
import { FaArrowRight } from "react-icons/fa";
import CardImg3 from '../assets/CardImg3.png'
import rightIcon from "../assets/rightIcon.png"
import PauseButton from "../assets/PauseButton.png"



const Card = () => {
    return (
        <div className='mt-5 '>
            <div className='row' >
                <div className="col-lg-6">
                    <div className="row" style={{ margin: "50px" }}>
                        <div className="col-lg-6">
                            <img src={CardImg1} alt="" />
                        </div>
                        <div className="col-lg-6" style={{ marginTop: "100px" }}>
                            <img src={CardImg2} alt="" />

                            <div style={{ position: 'relative', display: 'inline-block', marginTop: '8px' }}>
                                <img src={CardImg3} alt="" className='img-fluid' />

                                <div style={{
                                    position: 'absolute',
                                    top: '50%',
                                    left: '50%',
                                    transform: 'translate(-50%, -50%)',
                                    color: 'white', 
                                    padding: '8px 12px',
                                    borderRadius: '8px',
                                    fontSize: '14px',
                                    textAlign: 'center',
                                    width: '90%' 
                                }}>
                                   <p> Lorem ipsum dolor sit amet, consectetur adipiscing</p>
                                   <img src={PauseButton} width={50} alt="" style={{cursor:"pointer"}}/>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="col-lg-6" style={{ marginTop: '100px' }}>
                    <div className='d-flex justify-content-center align-items-center' style={{ margin: "50px" }}>
                        <div>
                            <p className='who'>Who <span className='weare'>we are</span></p>
                            <p className='paragraph'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
                            <button className='Learn-more2 mt-4 px-5' style={{ border: "1px solid gray", borderRadius: "50px" }}>Learn More <span><FaArrowRight className='ms-2' /></span></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card
