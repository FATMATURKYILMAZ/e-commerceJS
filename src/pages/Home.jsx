import React, { useState } from 'react'
import SliderComp from '../components/home/SliderComp'
import SortingComp from '../components/home/SortingComp'
import Category from '../components/home/Category'
import Products from '../components/home/Products'

const Home = () => {
  const[sort,setSort]=useState('')
  const[category,setCategory]=useState('')
  return (
    <div>
      <SliderComp />
      <SortingComp setSort={setSort} />
      <div className='flex'> {/*categorileri ayri bir köşede göstereceğimiz için div açtik*/}
        <Category setCategory={setCategory} />
        <Products category={category} sort={sort} />
      </div>
    </div>
  )
}

export default Home
