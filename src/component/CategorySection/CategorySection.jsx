import React from 'react'

import CategoryCard from '../CategoryCard/CategoryCard'
import earbuds_4 from "../../assets/image/earbuds_4.png"
import shoes_boys_4 from "../../assets/image/shoes_boys_4.png"
import shoes_girls_4 from "../../assets/image/shoes_girls_4.png"
import tops_4 from "../../assets/image/tops_4.png"
import jeans_4 from "../../assets/image/jeans_4.png"
import shirt_1 from "../../assets/image/shirt_1.png"
import kurti_4_long from "../../assets/image/kurti_4_long.png"
import saree_4_chiffon from "../../assets/image/saree_4_chiffon.png"
function CategorySection() {

    const categeries = [
        { name: "Electronics", image: earbuds_4,bg:"bg-blue-100" },
        {name:"Boys Shoes",image:shoes_boys_4,bg:"bg-pink-100"},
        {name:"Girls Shoes",image:shoes_girls_4,bg:"bg-green-100"},
        {name:"Tops",image:tops_4 ,bg:"bg-yellow-100"},
        {name:"Jeans",image:jeans_4, bg:"bg-blue-100"},
        {name:"Shirts",image:shirt_1 ,bg:"bg-orange-100"},
        {name:"Kurti",image:kurti_4_long, bg:"bg-red-100"},
        {name:"Saree",image:saree_4_chiffon, bg:"bg-purple-100"},
    ]

    return (
        <div className='container mx-auto flex flex-col gap-15 py-10 justify-center items-center'>
            <div>
                <h1 className='text-center text-3xl font-bold'>Shop By Category</h1>
                <div className="w-16 h-1 bg-blue-500 mx-auto mt-2 rounded"></div>
            </div>
            <div className='flex gap-8 justify-center '>
                {categeries.map((cat,index) => (
                    <CategoryCard
                        key={index}
                        name={cat.name}
                        image={cat.image}
                        bg={cat.bg}
                    />
                ))}
            </div>
        </div>
    )
}

export default CategorySection
