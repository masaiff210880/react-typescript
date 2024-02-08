import React from 'react'
type PersonList = {
    name : {
        first : string,
        last : string,
        age : number
    }[]
}
const PersonList = (props:PersonList) => {
    console.log('props',props)
  return (
    <div>
        {props?.name?.map((item,index)=>(
            <h1 key={index}>{item?.first} {item?.last} {item.age}</h1>
        ))}
    </div>
  )
}

export default PersonList