import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const { id } = useParams() // id is a string, not an integer
  return (
    <>
      User: {id}
    </>
  )
}

export default User
