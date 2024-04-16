import { useContext } from "react";
import { Link,useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";


const Login = () => {
  const {user, signIn} = useContext(AuthContext)
  const location = useLocation()
  const navigate = useNavigate()
  const auth = getAuth()

  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider()



  const handleGoogleSignIn = () =>{
    signInWithPopup(auth, googleProvider)
    .then(result => {
      const loggedInUser = result.user;
      console.log(loggedInUser)
      navigate('/');
      
    })
    .catch(error =>{
      console.log('error', error.message)
    })

  }


  const handleGithubSignIn = () =>{
    signInWithPopup(auth, githubProvider)
    .then(result => {
      const loggedInUser2 = result.user;
      console.log(loggedInUser2)
      navigate('/');
    })
    .catch(error =>{
      console.log('error', error.message)
    })
  }

  const handleLogin = e => {
    e.preventDefault()
    console.log(e.currentTarget)
    const form = new FormData(e.currentTarget)
    const email = form.get('email')
    const password = form.get('password')
    console.log(email, password)


    signIn(email,password)
    .then(result => {
      console.log(result.user)
      e.target.reset();
      navigate('/');

      // navigate after login
      // navigate(location?.state ? location.state : '/')
    })
    .catch( error => {
      console.error(error)
    })
  }


    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col ">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
       
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleLogin}  className="card-body">
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
          <button className="btn btn-primary">Login</button>
        </div>

        <div className="flex gap-4">
          <button onClick={handleGoogleSignIn}> <FaGoogle /></button>
          <button onClick={handleGithubSignIn}> <FaGithub /></button>
        </div>
        
        <div>
            <p>Do not have an account? <Link className="text-primary" to="/register">Register</Link></p>
        </div>
      </form>
    </div>
  </div>
</div>
        </div>
    );
};

export default Login;