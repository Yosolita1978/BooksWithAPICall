import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import fetch from 'node-fetch';


const app = express();
const PORT = 8080;

// Configuring cors middleware
app.use(cors());

// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// //creates an endpoint for the route `/`
app.get("/", (req, res) => {
    res.json("Hello Techtonica Server for a Game");
  });

// Make the GET request for the GAME Api for grabbing all the questions 


  // //hardcode the game response for testing reasons to don't saturate my API call. 
app.get('/api/books', async (req, res) =>{
    const URL = "https://gutendex.com/books/";
    try {
      const apiRequest = await fetch(URL);
      const books = await apiRequest.json();
      res.send(books.results);
    } catch (err){
      console.log(err);
    }

})



app.listen(PORT, () => console.log(`Hola! Server running on Port http://localhost:${PORT}`));