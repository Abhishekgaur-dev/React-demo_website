import React from 'react'
import Card from './Card'
import Sdata from './Sdata'

function Services() {
    return (
        <>
            <div className="mt-3">
                <h1 className="text-center">Services</h1>
                <hr className="w-25 mx-auto"/>
            </div>
            <div className="container-fluid mb-5">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row">
                           { Sdata.map((val,index) =>{
                              return  <Card 
                                  key = {index}
                                  imgsrc = {val.imgsrc}
                                  title = {val.title}
                                  desc = {val.desc}
                                />
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Services
