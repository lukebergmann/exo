import './App.css';
function App() {

fetch('https://cors-anywhere.herokuapp.com/https://exoplanet-api.herokuapp.com/exoplanet/habitable/zone/true')
  .then((response) => {
    console.log(response)
    return response.json()
  }).then((data) => {
    console.log("WHAT IS DARTA", data)
  })


  return (
    <div className="App">
     
    </div>
  );
}

export default App;
