import React, {useState, useEffect} from "react";
import axios from "axios";
import PhotoCard from "./components/PhotoCard.js";
import "./App.css";

function App() {

  // const [data, setData] = useState({});
  // useEffect(() => {
  //   console.log("first render");
  //   axios.get("https://api.nasa.gov/planetary/apod?api_key=FAUdszLounEdIsoz1DvCVeqSN1Q0Q1YUs2a3G2zU")
  //   .then(response => {
  //     console.log(response.data);
  //     setData(response.data);
  //   });
  // }, []);

  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p>
      // {data ? <PhotoCard title={data.title} url={data.url} explanation={data.explanation} date={data.date}/> : <div>Loading</div>}
    </div>
  );
}

export default App;
