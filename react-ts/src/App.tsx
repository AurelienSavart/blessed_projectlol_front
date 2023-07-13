// import { useState } from 'react'
// import { useEffect } from 'react';

function App() {
  // const [champions, setChampions] = useState<any>({});

  const champions: any = {
    "Aatrox": {
        "id":"Aatrox",
        "key":"266",
        "name":"Aatrox",
        "title":"Épée des Darkin",
        "blurb":"Autrefois, Aatrox et ses frères étaient honorés pour avoir défendu Shurima contre le Néant. Mais ils finirent par devenir une menace plus grande encore pour Runeterra : la ruse et la sorcellerie furent employées pour les battre. Cependant, après des...",
        "image":{
            "full":"Aatrox.png",
            "sprite":"champion0.png",
            "group":"champion",
            "x":0,
            "y":0,
            "w":48,
            "h":48},
        "tags":
            ["Fighter","Tank"]
          },
          "Bard": {
            "id":"Bard",
            "key":"256",
            "name":"Bard",
            "title":"Le gros Bard",
            "blurb":"Autrefois, Bard et ses frères étaient honorés pour avoir défendu Shurima contre le Néant. Mais ils finirent par devenir une menace plus grande encore pour Runeterra : la ruse et la sorcellerie furent employées pour les battre. Cependant, après des...",
            "image":{
                "full":"Bard.png",
                "sprite":"champion0.png",
                "group":"champion",
                "x":0,
                "y":0,
                "w":48,
                "h":48},
            "tags":
                ["Buster","Peugeot 208"]
              }
    };
  // useEffect(() => {
  //   function getData() {
  //     return fetch('http://localhost:3000/champions') 
  //       .then(response => response.json())
  //       .then(data => {
  //         console.log("data", data);
  //         setChampions(data.data)
  //       })
  //   }

  //   getData()
  // }, [])

  return (
    <>
      <main className="min-h-screen bg-slate-900 grid grid-cols-4 gap-4">
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
