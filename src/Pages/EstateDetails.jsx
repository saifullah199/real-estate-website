import {  useLoaderData,useParams } from "react-router-dom";



const EstateDetails = () => {

    const estate = useLoaderData();
    const {id} = useParams()
    const idInt = parseInt(id)
    const house = estate.find( house => house.id === idInt)
   

    
    return (
        <div>

           <div data-aos="zoom-in" data-aos-duration="1000" className="card relative  bg-base-100 shadow-xl">
  <figure className="relative">
    <img className="rounded-2xl" src= {house.image} alt="Album"/>
    </figure>
  <div className="card-body absolute top-72 right-10 text-black">
    <h2 className="card-title text-3xl font-bold"> {house.estate_title} </h2>
    <div className="text-2xl font-medium">
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