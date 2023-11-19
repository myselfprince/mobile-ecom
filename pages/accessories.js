import React from 'react'
import AccessoriesBlock from '../components/Blocks/AccessoriesBlock'

const Accessories = () => {
  return (
    <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap -m-4">
      
      <AccessoriesBlock />
      <AccessoriesBlock />
      <AccessoriesBlock />
      <AccessoriesBlock />
      <AccessoriesBlock />
      <AccessoriesBlock />
    </div>
  </div>
</section>
  )
}

export default Accessories