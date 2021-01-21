import React, { useState, useEffect } from "react";
import "./App.css";

const App = () => {
  const [data, setData, data1 ] = useState("");

useEffect(() => {
  getSunrise();
  getSunset();
}, []);

const getSunrise = () => {
  fetch("https://api.sunrise-sunset.org/json?lat=36.7201600&lng=-4.4203400&date=today")
    .then((res) => res.json())
    .then((data) => {
      console.log(data.results.sunrise);
      setData(data.results.sunrise);
    });

    
};

const getSunset = () => {
  fetch("https://api.sunrise-sunset.org/json?lat=36.7201600&lng=-4.4203400&date=today")
    .then((res) => res.json())
    .then((data1) => {
      console.log(data1.results.sunset);
      setData(data1.results.sunset);
    });

  
  };

return (
  <>
    <h3>Morning:</h3>
    <button onClick = {getSunrise}>Sunrise</button>
    <div>
    <p>{data}</p>
    </div>
    <h3>Evening:</h3>
    <button onClick = {getSunset}>Sunset</button>
    <p>{data1}</p>
  </>
);

function hide () {
  let x = document.getElementById("data");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
  const App1 = () => {
    const [currentLocation, setCurrentLocation] = useState("");
    const [currentDate, setCurrentDate] = useState("");
    const [dateStore, setDateStore] = useState([]);
    const handleSubmit = (e) => {
      e.preventDefault();
      setDateStore([...dateStore, { location: currentLocation, date: currentDate }]);
      setCurrentLocation("");
      setCurrentDate("");
    };

    return (
      <div>
        <form onSubmit={handleSubmit}>
          <Sunrise location={currentLocation} func={setCurrentLocation} />
          <Sunrise date={currentDate} func={setCurrentDate} />
          <button type="submit">Sunrise</button>
        </form>
        <List items={dateStore} />
      </div>
    );

  }

const Sunrise = ({ location, func }) => (
  <input value={location} onChange={(e) => func(e.target.value)}/>
);

const List = ({ items }) => (
    <ul>
      {items.map((item) => {
        return <ListItem item={item} />;
      })} 
    </ul>  
     );
    const ListItem = ({ item }) => (
      <li>
        {item.location},
        {item.date},
      </li>
    );
  
    }

export default App