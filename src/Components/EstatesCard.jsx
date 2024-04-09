import { Link } from "react-router-dom";


const EstatesCard = ({estate}) => {
    const {image,estate_title, price, description, status,id } = estate
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src={image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{estate_title}</h2>
    <div className="flex justify-between">
        <p> {price} </p>
        <p> {status} </p>
    </div>
    <p> {description} </p>
    <div className="card-actions ">
      <Link to={`/estates/${id}`}>
            <button className="btn btn-primary w-full"> View Property </button>
      </Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default EstatesCard;