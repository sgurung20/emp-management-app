import React from 'react'
import './CardUI.css'

function CardUI(props) {
  return (
    <div className="card text-center">
                    <div className='overflow'>
                        <img src={props.imgsrc} alt='image' className='card-img-top' />
                    </div>
                    <div className="card-body">
                        <h4 className="card-title">{props.title}</h4>
                        <p>{props.para}</p>
                    </div>
                </div>
  )
}

export default CardUI