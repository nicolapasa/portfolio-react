import React from 'react'

const ItemSkill = ({item}) => {
  return (
    <div className="py-2 text-white">
    <span className="font-bold uppercase ">{item.title}</span>
    <div className="w-full bg-white h-1 mt-2">
         <div className=  {` ${item.range}  h-1 ${item.bg} `}></div>
    </div>
    </div>
  )
}

export default ItemSkill
