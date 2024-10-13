import React from 'react'

const CategoryButton = ({name,current}) => {
  return (
    <div>
        <button className={`${ current ? 'bg-black text-white' : ''} border text-nowarp px-4 py-2 me-2`}>
            {name}
        </button>
    </div>
  )
}

export default CategoryButton