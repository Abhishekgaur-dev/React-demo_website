import React from 'react'

function Card(props) {
    return (
       <>

            <div className="col-md-4 col-10 gy-4">
                    <div className="card h-100">
                        <img src={props.imgsrc} className="card-img-top image-fluid" alt="web dev" />
                    <div className="card-body">
                        <h5 className="card-title">{props.title}</h5>
                        <p className="card-text ">{props.desc}</p>
                    </div>
                    </div>
            </div>
       </>
    )
}

export default Card
