import React from 'react'
import list from '../list.js'
import Card from './Card.jsx'

const Shop = () => {
  return (
    <section>
        {list.map((item) => {
            return <Card item={item} key={item.id} />
        })}
    </section>
  )
}

export default Shop