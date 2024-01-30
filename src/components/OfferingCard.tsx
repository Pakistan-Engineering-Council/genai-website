import React from 'react'
import { offeringData } from '../data/Data'
import Card from './Cards'
export default function OfferingCard() {
  return (
    <main>
        <div className="mt-8 grid grid-cols-1 gap-4 px-2 md:grid-cols-2 md:px-16 lg:grid-cols-3 lg:px-8">
          {offeringData.map((data, i) => (
            <Card data={data} key={i} />
          ))}
        </div>
    </main>
  )
}
