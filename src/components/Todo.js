import React from 'react'

export default function Todo({eachItems}) {
  return (
    <div>
      <label>
        <input type='checkbox' checked={eachItems.unDone}/>
        {eachItems.name}
      </label>
    </div>
  )
}
