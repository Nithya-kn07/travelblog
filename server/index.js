const express = require("express");
const app = express();
const cors = require('cors');
const pool = require("./db");

app.use(cors());
app.use(express.json());

//Routes

//Create a travel

app.post("/newtravel", async(req, res) =>{
    try{
        const{description} = req.body;
        const newTravel = await pool.query(
            "INSERT INTO newtravel(description) VALUES($1) RETURNING *",
            [description]
        );

        res.json(newTravel.rows[0]);
    } catch(err){
        console.error(err.message);
    }
});

//get all travel

app.get("/newtravel", async(req, res) =>{
    try {
        const allTravels = await pool.query("SELECT * FROM newtravel");
        res.json(allTravels.rows);
    } catch (err) {
        console.error(err.message);
    }
})

//get a travel

app.get("/newtravel/:id", async(req, res) =>{
    try{
        const { id} = req.params;
        const travel =  await pool.query("SELECT * FROM newtravel WHERE travel_id = $1", [id]);

        res.json(travel.rows[0]);
    }catch(err){
        console.error(err.message);
    }
})

//update a travel

app.put("/newtravel/:id", async (req, res) =>{
    try {
        const {id} = req.params;
        const {description} = req.body;
        const updateTravel = await pool.
        query("UPDATE newtravel SET description = $1 WHERE travel_id = $2",
        [description,id]);
        
        res.json("Travel was Updated");
    } catch (err) {
        console.error(err.message);
    }
})

//delete a travel

app.delete("/newtravel/:id", async(req, res) =>{
    try{
        const { id} = req.params;
        const deleteTodo = await pool.query("DELETE FROM newtravel WHERE travel_id = $1", [
            id
        ]);

        res.json("Travel was Deleted");
    }catch(err){
        console.error(err.message);
    }
})


app.listen(5000, () =>{
    console.log("Server has started on port 5000");
});
