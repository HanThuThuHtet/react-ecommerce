import React from 'react'
import CategoryButton from './CategoryButton';

const CategorySection = () => {
    const title = "Product Categories";
    const categories = ["all","electronics","jewelery","men's clothing","women's clothing"];
  return (
        <section id="category-section" className="p-5">
            <p className="text-sm text-gray-500 mb-2">{title}</p>
            <div className='flex overflow-scroll'>
                {categories.map((category) => (
                    <CategoryButton key={category} name={category} current={true}/>
                    ))}
            </div>
        </section>
          )
}

export default CategorySection