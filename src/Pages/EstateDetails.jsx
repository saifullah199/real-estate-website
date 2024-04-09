import {  useLoaderData,useParams } from "react-router-dom";



const EstateDetails = () => {

    const estate = useLoaderData();
    const {id} = useParams()
    const idInt = parseInt(id)
    const house = estate.find( house => house.id === idInt)
   

    
    return (
        <div>

           <div className="card  bg-base-100 shadow-xl">
  <figure><img className="rounded-2xl" src= {house.image} alt="Album"/></figure>
  <div className="card-body">
    <h2 className="card-title text-3xl font-bold"> {house.estate_title} </h2>
    <div className="text-2xl ">
        <p> Price: {house.price} </p>
        <p>Status: {house.status}</p>
        <p>Segment Name: {house.segment_name}</p>
        <p>Area: {house.area}</p>
        <p>Location: {house.location}</p>
        <p>Facilities: {house.price}</p>
        
    </div>
    <p className="text-2xl"> {house.description} </p>
    
    <div className="card-actions justify-end">
      
    </div>
  </div>
</div> 


        </div>
    );
};

export default EstateDetails;