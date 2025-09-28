import React from 'react'
import {benefitsSection} from "../../../assets/Constance/constance"
import "./benefitssection.css"
const BenefitsSection = () => {
  return (
    <div className=' mx-auto flex flex-col md:flex-row items-center justify-between mt-9 mb-9 gap-2 md:gap-0 conStyle py-8 shadow-lg'>
      {benefitsSection.map((bene , beneIndex ) => (
        <div key={beneIndex} className='w-full  md:w-1/4 h-full flex flex-col items-center gap-4 md:gap-8 justify-between  '>
        <div className='rounded-full p-5 bg-neutral-200'>{bene.beneIcon}</div>
        <p className='text-xl md:text-2xl font-normal'>{bene.benedisc}</p>
        </div>
      ))}
    </div>
  )
}

export default BenefitsSection
