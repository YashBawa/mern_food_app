import React,{useState} from "react";
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar';


export default function SignUp() {
    // prevents reloading and it reflects on our page 
    const [credentials, setCredentials] = useState({name:"",email:"",password:"",geolocation:""})
    
    // let [address, setAddress] = useState("");

    const handleSubmit = async(e) =>{
        e.preventDefault();
        const response = fetch("https://localhost:5000/api/createuser",{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({ name: credentials.name, email: credentials.email, password: credentials.password, location: credentials.geolocation })
        });
    const json = await response.json()
    console.log(json);
    if (!json.sucess)
    {
        alert("Enter Valid Credentials")
    }
}
    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }
    return (
        <div style={{ backgroundImage: 'url("https://images.pexels.com/photos/1565982/pexels-photo-1565982.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")', backgroundSize: 'cover',height: '100vh' }}>
          <div>
          <Navbar />
          </div>
    
            <div className='container' >
              <form className='w-50 m-auto mt-5 border bg-dark border-success rounded' onSubmit={handleSubmit}>
                <div className="m-3">
                  <label htmlFor="name" className="form-label">Name</label>
                  <input type="text" className="form-control" name='name' value={credentials.name} onChange={onChange} aria-describedby="emailHelp" />
                </div>
                <div className="m-3">
                  <label htmlFor="email" className="form-label">Email address</label>
                  <input type="email" className="form-control" name='email' value={credentials.email} onChange={onChange} aria-describedby="emailHelp" />
                </div>
                <div className="m-3">
                  <label htmlFor="address" className="form-label">Address</label>
                  <fieldset>
                    <input type="text" className="form-control" name='address' placeholder='"Click below for fetching address"' value={address} onChange={(e)=>setAddress(e.target.value)} aria-describedby="emailHelp" />
                  </fieldset>
                </div>
                {/* <div className="m-3">
                  <button type="button" onClick={handleClick} name="geolocation" className=" btn btn-success">Click for current Location </button>
                </div>  */}
                
                <div className="m-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                  <input type="password" className="form-control" value={credentials.password} onChange={onChange} name='password' />
                </div>
                
                <button type="submit" className="m-3 btn btn-success">Submit</button>
                <Link to="/login" className="m-3 mx-1 btn btn-danger">Already a user</Link>
              
              </form>
            </div>
          </div>
      )
    }
