import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function Player() {

    let {id}=useParams()
    let [player , setPlayer] = useState({})
    useEffect(()=>{
        let user = ()=>{
            setTimeout(async() => {
                try {
                    let res = await axios.post(`https://api.cricapi.com/v1/players_info?apikey=f4391561-dc30-4f2f-aae8-92f0792524f5&id=${id}`)
                    setPlayer(res.data.data)
                } catch (error) {
                    console.log(error)
                }
            },1000);
        }
        user()
    },[id])
    console.log(player)
  return (
    <div className='player'>
        <div className='players'>
            <lable  className='players1'>Name:-{player.name}</lable>
            <div className='players2'>
                <img src={player.playerImg} alt={player.name} />
            </div>
            <lable className='players3'>Batting Style:-{player.battingStyle}</lable>
            <lable className='players4'>Bowling Style:-{player.bowlingStyle}</lable>
            <lable className='players5'>Date Of Birth:-{player.dateOfBirth}</lable>
            <lable className='players6'>Place Of Birth:-{player.placeOfBirth}</lable>
            <lable className='players7'>Country:-{player.country}</lable>
        </div>
    </div>
  )
}
