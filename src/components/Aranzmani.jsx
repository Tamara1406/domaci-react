import React from 'react'
import JedanAranzman from './JedanAranzman'

const Aranzmani = ({ aranzmani  }) => {
  

  return (
    <div className='all-products'>
      {
        aranzmani.map((arr) => ( <JedanAranzman aranzman = {arr} key = {arr.id}  rez = {1}/> ))
      };
    </div>
  )
}

export default Aranzmani
