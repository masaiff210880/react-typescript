import React from 'react'
type GreetProps = {
    name : string,
    count : number,
    isAuth : boolean
}
const Greeting = (props:GreetProps) => {
  return (
    <h1>Welcome to {props.name} playlist you have {props.count} video's to learn type script! {props.isAuth ? "Logged In" : "Logout"}</h1>
  )
}

export default Greeting