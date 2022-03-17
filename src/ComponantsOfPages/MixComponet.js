import React from 'react'
import '../ComponantsOfPages/CSS/mixComponent.css'

export const MixComponet = () => {
  return (
    <div>MixComponet</div>
  )
}

export const Heading = (props)=>{
    return(
      <div className="page-Heading">
        <h2 className='onlyHeading'>{props.text} <strong className='onlyHeadingColoring'>{props.colorText}</strong></h2>
      </div>
      
    )
}

export const PagesPath =  (props)=>{
  return(
    <div className="pages-path-container">
      <h2>{props.pageName}</h2>
      <h4>{`Home > ${props.pageName}`}</h4>
    </div>
  )
}
