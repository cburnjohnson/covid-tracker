import React, {useEffect, useState} from 'react'
import axios from 'axios'

import CurrentUSMap from './components/maps/CurrentUSMap'

function App() {
  const [currentUSStats, setCurrentUSStates] = useState({})
  useEffect(() => {
    async function getData() {
      const results = await axios.get('https://api.covidtracking.com/v1/us/current.json')
      setCurrentUSStates(results.data[0])
    }
    getData()
  })

  return (
    <div>
      <h1>COVID MAP</h1>
      <div className="stats-container">
        <div className="total-stats">
          <h2>TOTAL</h2>
          <div>TESTED POSITIVE: {currentUSStats.positive}</div>
          <div>TESTED NEGATIVE: {currentUSStats.negative}</div>
          <div>HOSPITALIZED: {currentUSStats.hospitalizedCumulative}</div>
          <div>ICU: {currentUSStats.inIcuCumulative}</div>
          <div>DEATHS: {currentUSStats.death}</div>
        </div>
        
        <div className="current-stats">
          <h2>CURRENTLY</h2>
          <div>HOSPITALIZED: {currentUSStats.hospitalizedCurrently}</div>
          <div>ICU: {currentUSStats.inIcuCurrently}</div>
        </div>
      </div>
     
      <CurrentUSMap />
    </div>
    
  );
}

export default App;
