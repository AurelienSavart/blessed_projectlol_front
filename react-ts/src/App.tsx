import { useState } from 'react'
import { useEffect } from 'react';

function App() {
  const [champions, setChampions] = useState<any>({});

  useEffect(() => {
     function getData() {
       return fetch('http://localhost:3000/api/champions') 
         .then(response => response.json())
         .then(data => {
           setChampions(data)
           console.log("data", champions);
         })
     }

     getData()
   }, [])

  return (
    <>
      <main className="champions">
        {Object.keys(champions).map((champion) => (
        <div key={champions[champion].key} className="champion">
          <a href={'/champion/' + champions[champion].name}>
              <img src={`https://ddragon.leagueoflegends.com/cdn/13.13.1/img/champion/${champions[champion].image.full}`} width={200} height={200} alt={champions[champion].name} />
              <h2 className="text-lg font-bold text-white">{champions[champion].name}</h2>
          </a>
        </div>
      ))}
    </main>
    </>
  )
}

export default App
