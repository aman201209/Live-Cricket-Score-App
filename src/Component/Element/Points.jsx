import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function Points() {

    let [points , setPoints] = useState([])
    useEffect(()=>{
        let user = async()=>{
            let res = await axios.get("https://api.cricapi.com/v1/series_points?apikey=f4391561-dc30-4f2f-aae8-92f0792524f5&id=d917eec2-816d-49ff-b87e-f45b36bfecf9")
            setPoints(res.data.data)
        }
        user()
    },[])



  return (
    <div>
        <table>
            <tr>
                <th>TEAM NAME</th>
                <th>MATCH</th>
                <th>WIN</th>
                <th>LOSS</th>
                <th>TIES</th>
                <th>IMAGES</th>
            </tr>
            {
            points.map((value)=>{
                return(
                    <tr>
                        <th>{value.teamname}</th>
                        <td>{value.matches}</td>
                        <td>{value.wins}</td>
                        <td>{value.loss}</td>
                        <td>{value.ties}</td>
                        <td><img src={value.img} alt={value.teamname} /></td>
                    </tr>
                )
            })
        }
        </table>
    </div>
  )
}
