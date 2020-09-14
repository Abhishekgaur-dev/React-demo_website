import React from 'react'
import Common from './Common'



function Home() {
    return (
        <>
            <Common 
                title="Welcome to the "
                des = "We are here to help you with our best Talents and Technologies"
                btn_info = "Get Started"
                imgsrc= {require("../images/code_image.svg")}
                page_link = "/services"
            />

        </>
    )
}

export default Home
