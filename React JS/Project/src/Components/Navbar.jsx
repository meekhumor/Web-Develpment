import React from 'react'
import styles from "./style.module.css";

function Navbar({data}) {
  return (
    <div className='w-full bg-zinc-300 px-4 py-3 flex justify-between items-center'>
      <h3 className={`${styles.a} ${styles.b} p-2 rounded-md text-semibold`}>Orange</h3>
      <div className='flex p-2 px-4 bg-orange-600 text-white rounded-md text-sm gap-3'>
        <h3>Favourites</h3>
        <h4>{data.filter(item => item.added).length}</h4>
      </div>
    </div>
  )
}

export default Navbar
