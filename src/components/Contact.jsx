import React,{useState} from 'react'


function Contact() {

        const [data,setdata]  = useState({
               name: "",
                email: "",
                msg: ""
        });

        const handleSubmit = (e) => {
            e.preventDefault()
            console.log(data)

        }

        const updateinput = (e) => {
            setdata( {
                ...data,
                [e.target.name] : e.target.value
            })
        }

    return (
        <div className="container-fluid contact_style">
            <div className="row mt-3">
                <div className="col-10 col-lg-6 mx-auto">
                    <div className="text-center">
                        <h1 className="display-4">Contact Us</h1>
                        <hr className="w-50 mx-auto"/>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-10 col-lg-6 mx-auto">
                    <form onSubmit={handleSubmit}>
                        <div class="mb-3">
                            <label for="exampleInputName1" class="form-label">Name</label>
                            <input type="text" name="name" value={data.name} onChange={updateinput}
                            className="form-control" id="exampleInputName1" 
                            aria-describedby="Name"/>
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Email address</label>
                            <input type="email" name="email" value={data.email} onChange={updateinput}
                            class="form-control" id="exampleInputEmail1" 
                            aria-describedby="emailHelp"/>
                        </div>
                        <div class="mb-3">  
                            <label for="exampleFormControlTextarea1" class="form-label">Message</label>
                            <textarea  name="msg" value={data.msg} onChange={updateinput}
                            class="form-control" id="exampleFormControlTextarea1" 
                            rows="3"></textarea>
                        </div>
                        <button type="submit" class="btn btn-primary" >Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact
