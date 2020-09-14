import React from 'react'
import { Link } from 'react-router-dom'

function Common(props) {
    return (
        <>
            <section>
                <div className="container-fluid home d-flex align-items-center ">
                    <div className="row">
                        <div className="col-10 pb-5 mx-auto">
                            <div className="row">
                                <div className="col-lg-6 col-12 pt-5 pt-lg-0 order-lg-1 order-2 d-flex justify-content-center flex-column  ">
                                    <h1 >
                                        {props.title}
                                         <strong className="navbar_brand"> AGTech</strong>
                                    </h1>
                                    <p className="my-3">{props.des}</p>
                                    <Link to={props.page_link}><button className="mt-3 btn_style">{props.btn_info}</button></Link>
                                </div>
                                <div className="col-lg-6 col-12 pt-1 pt-lg-0 order-lg-2 order-1 mx-auto">
                                    <img src={props.imgsrc} className="img_edit image-fluid" alt="undraw" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
        </>
    )
}

export default Common
