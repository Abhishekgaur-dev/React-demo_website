import React from 'react'
import Common from './Common'

function About() {
    return (
        <Common 
            title="Grow Your Bussiness With"
            des="We are a company of talented devs who create best products for your business according to your requirments."
            btn_info="Contact Us"
            imgsrc={require("../images/about_page.svg")}
            page_link = "/contact"
        />
    )
}

export default About
