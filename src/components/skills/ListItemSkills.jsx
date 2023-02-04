import React from 'react'
import ItemSkill from './ItemSkill'

const param=[{title: 'HTML5 & CSS3', bg: 'bg-green-900', range: 'w-4/4'},
{title: 'javascript', bg: 'bg-green-800', range: 'w-3/4'}     ]

    


const ListItemSkills = () => {
  return (
    <div className="py-4">
    <div className="flex flex-col py-2">
      {
        param.map((item)=>(
             
            <ItemSkill item={item} />

        )  )
      }
     </div>
     </div>   
  )
}

export default ListItemSkills
