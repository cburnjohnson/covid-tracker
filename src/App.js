import React, {useEffect} from 'react'
import axios from 'axios'

function App() {

  useEffect(() => {
    async function getData() {
      const results = await axios.get('https://api.covidtracking.com/v1/us/daily.json')
      console.log(results);
    }
    getData()
  })

  return (
    <div>COVID MAP</div>
  );
}

export default App;
