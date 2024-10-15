import React from 'react'

const CategoryButton = ({categoryName,current}) => {
  return (
    <div>
        <button className={`${ current && 'bg-black text-white'} border text-nowrap px-4 py-2 me-2 `}>
            {categoryName}
        </button>
    </div>
  )
}

export default CategoryButton