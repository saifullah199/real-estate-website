import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div>
            <h3> Oopps!</h3>
            <p> Your destination is not found! </p>
            <Link to='/'> <button className="btn"> Go to Home </button> </Link>
        </div>
    );
};

export default ErrorPage;