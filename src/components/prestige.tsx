import React, { useState, useEffect } from 'react';

function allprestige(data: any) {
    
    const list = []
    for (const element of data) {
        for (const key in element) {
            if (element.type == "Prestige"){
                 list.push(<li>{element[key]}</li>)
            }
          }
        
          }
          return <ul> {list} </ul>
}
    
export default function Prestige() {
    const [listuser, updatelist] = useState("")
    useEffect(() => {
        fetch("http://localhost:3001/vehicule")
        .then(async (response) => {
            const data = await response.json()
            const res = data
            updatelist(data)
        })
        .catch((error) =>{
            console.log(error)
        })
    
    }, [] )

     allprestige(listuser)
    return (<div> {allprestige(listuser)} </div>)
}