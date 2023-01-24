import React from 'react'
import { useRouteError } from 'react-router-dom'

const Error = () => {
    const {status, statusText} = useRouteError()
  return (
    <h2>{status + " " +statusText}</h2>
  )
}

export default Error