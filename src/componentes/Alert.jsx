import React from 'react'

export const Alert = ({ msgAlert, color }) => {
  return (
    <p className={color}>{msgAlert}</p>
  )
}
export default Alert;