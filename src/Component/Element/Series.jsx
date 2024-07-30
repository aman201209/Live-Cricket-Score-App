import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function Series() {

  let [series, setSeries] = useState([])
  useEffect(() => {
    try {
      let user = async () => {
        let res = await axios.get("https://api.cricapi.com/v1/series?apikey=f4391561-dc30-4f2f-aae8-92f0792524f5&offset=0")
        setSeries(res.data.data)
        console.log(res.data.data)
      }
      user()
    } catch (error) {
      console.log(error)
    }

  }, [])

  return (
    <div className='series'>
      {
        series.map((value) => {
          return (
            <>
              <div className='series1'>
                <div className='series2'>{value.name}</div>
                <div className='series3'>{value.startDate} to {value.endDate}</div>
                <hr className='series4' />
                <div className='series5'>
                  <img src='https://png.pngtree.com/png-clipart/20221229/original/pngtree-cricket-logo-png-image_8823326.png' alt='logo' />
                </div>
                <hr className='series6' />
                <div className='series7'>
                  <div className='series8'>Series Details</div>
                </div>
              </div>
              <div className='series9'>
                <table className='series10'>
                  <tr>
                    <th>{value.name}</th>
                    <td>{value.startDate}</td>
                    <td>{value.endDate}</td>
                    <td><img className='series11' src='https://png.pngtree.com/png-clipart/20221229/original/pngtree-cricket-logo-png-image_8823326.png' alt='logo' /></td>
                    <td><button className='series12'>Series Details</button></td>
                  </tr>
                </table>
              </div>
            </>
          )
        })}

    </div>
  )
}
