import React, { Fragment, useEffect, useState } from "react";
import EditTravel from "./EditTravel";

const ListTravel = () => {

    const [travel, setTravel] =useState([]);

    const deleteTravel = async id => {
        try {
            const deleteTravel = await fetch(`http://localhost:5000/newtravel/${id}`,{
                method: "DELETE"
            });

            setTravel(travel.filter(newtravel => newtravel.travel_id !==id));
        } catch (err) {
            console.error(err.message);
        }
    }

    const getTravel = async () =>{
        try {
            
            const response = await fetch("http://localhost:5000/newtravel");
            const jsonData = await response.json()

            setTravel(jsonData);

        } catch (err) {
            console.error(err.message);
        }
    }

    useEffect(() =>{
        getTravel();
    }, []);

    console.log(travel);  
    return <Fragment>
        <table class="table mt-5 text-center">
    <thead>
      <tr>
        <th>Description</th>
        <th>Edit</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
        {}

    {travel.map(newtravel =>(
        <tr key = {newtravel.travel_id}> 
            <td>
            {newtravel.description}
            </td>
            <td><EditTravel newtravel={newtravel}/></td>
            <td><button className="btn btn-danger" onClick={() => deleteTravel(newtravel.travel_id)}>Delete</button></td>
        </tr>
    ))}

    </tbody>
  </table>
    </Fragment>;
};

export default ListTravel;