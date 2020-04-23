import React, { useState, useEffect } from 'react';
import { Bar  } from 'react-chartjs-2';
import './App.css';

function App() {
  const [numID, setNumID] = useState(1234567890123)
  const [data, setData] = useState([])
  useEffect(() => {
    var data = new Array(10)
    var label = []
    for (var i = 0; i < 10; i++) {
      data[i] = 0
      label.push((i*1000)+"-"+((i+1)*1000-1))
    }
    for (i = 1; i < 1000; i++) {
      if (i%10 === 0) {
        continue
      }
      const deno = i/10
      const score = parseInt((numID/deno).toFixed(4).split('.')[1])
      data[Math.floor(score/1000)] += 1
    }
    setData({
      labels: label,
      datasets: [{
        label: 'Possible Score',
        backgroundColor: 'rgba(255,99,132,0.2)',
        borderColor: 'rgba(255,99,132,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(255,99,132,0.4)',
        hoverBorderColor: 'rgba(255,99,132,1)',
        data: data
      }]
    })
  }, [numID])
  return (
    <div className="App">
      <header className="App-header">
        <input type="number" onChange={(e) => setNumID(e.target.value)} placeholder="กรอกเลข"></input>
        <p>เลขบัตร: {numID}</p>
        <Bar
          data={data}
          width={100}
          height={100}
          options={{ maintainAspectRatio: false }}
        />
      </header>
    </div>
  );
}

export default App;
