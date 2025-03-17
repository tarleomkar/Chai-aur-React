import React from 'react'
import list from '../list.js'
import Card from './Card.jsx'

const Shop = ({ handleClick  }) => {
  return (
    <section>
        {list.map((item) => {
            return <Card item={item} key={item.id} handleClick={handleClick} />
        })}
    </section>
  )
}

export default Shop