import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function Subscription() {

    let [country , setCountry]  = useState([])
    useEffect(()=>{
        let user = async()=>{
            let res = await axios.get("https://api.cricapi.com/v1/countries?apikey=f4391561-dc30-4f2f-aae8-92f0792524f5&offset=0")
            setCountry(res.data.data)
        }
        user()
    },[])
    console.log(country)
  return (
    <div style={{display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:"#949494", borderRadius:"20px"}}>
        <table className='country2'>
            <tr>
                <th>Country</th>
                <th>Country Flag</th>
            </tr>
            {
            country.map((value)=>{
                return(
                    <tr>
                        <td className='country'>{value.name}</td>
                        <td className='country1'><img className='image' src={value.genericFlag} alt={value.name} /></td>
                    </tr>
                )
            })
        }
        </table>
    </div>
  )
}
