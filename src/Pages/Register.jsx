import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { useForm } from "react-hook-form";


const Register = () => {

  const {createUser} = useContext(AuthContext)
  
  const handleRegister = e =>{
    e.preventDefault();
    console.log(e.currentTarget)
    const form = new FormData(e.currentTarget)
    const name = form.get('name')
    const photo = form.get('photo')
    const email = form.get('email')
    const password = form.get('password')

    console.log(name,photo, email,password)

    // create user

    createUser(email,password)
    .then(result =>{
      console.log(result.user)
    })
    .catch(error => {
      console.error(error)
    })

  }
  

  
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col ">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Register Now!</h1>
      
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleRegister}   className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Full Name</span>
          </label>
          <input type="text" name="name" placeholder="Your Name" className="input input-bordered"  
          required />
          
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered" required />
          
        </div>
        <div className="form-control mt-6">
          <button  className="btn btn-primary">Register</button>
        </div>
        <div>
            <p>Already have an account? <Link className="text-primary" to="/login">Login</Link></p>
        </div>
      </form>
    </div>
  </div>
</div>
        </div>
    );
};

export default Register;