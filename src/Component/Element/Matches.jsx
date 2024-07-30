import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function Matches() {

  let [match, setMatch] = useState([

  ])

  useEffect(() => {
    try {
      let user = async () => {
        let res = await axios.get("https://api.cricapi.com/v1/matches?apikey=f4391561-dc30-4f2f-aae8-92f0792524f5&offset=0")
        setMatch(res.data.data)
        console.log(res.data.data)
      }
      user()

    } catch (error) {
      console.log(error)
    }
  }, [])
  return (
    <div className='match'>
      {
        match.map((value) => {
          return (
            <div className='match0'>
              <div className='match1'>{value.matchType}</div>
              <div className='match2'>{value.name}</div>
              <div className='match3'>{value.venue}</div>
              <div className='match4'>{value.date}</div>
              <div className='match5'>{value.dateTimeGMT}</div>
              <div className='match6'>{value.status}</div>
              <hr className='series6' />
              <div className='match7'>
                <div className='match8'>Player Details</div>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}
