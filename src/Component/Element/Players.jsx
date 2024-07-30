import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'




export default function Players() {

  let navigate = useNavigate()
  let [player, setPlayer] = useState([])
  useEffect(() => {
    try {
      let user = async () => {
        let res = await axios.get("https://api.cricapi.com/v1/players?apikey=f4391561-dc30-4f2f-aae8-92f0792524f5&offset=0")
        setPlayer(res.data.data)
      }

      user()
    } catch (error) {
      console.log(error)
    }
  }, [])



  const handleClick = (key) => {
    navigate(`/player/${key}`)
  }
  return (
    <div className='player'>
      {
        player.map((value) => {
          return (
            <div className='player1' key={value.id}>
              <div className='player2'>{value.name}</div>
              <div className='player3'>{value.country}</div>
              <div className='player4'></div>
              <div className='player5'>
                <button onClick={() => handleClick(value.id)}> Player Details</button>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}
