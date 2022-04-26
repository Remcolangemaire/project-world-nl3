import React from 'react'
import './cards.scss'

const TextCard = (props) => {
    return (
        <div className="card">
          <div className="card__body">
            <h2 className="card__title">{props.title}</h2>
            <p className="card__description">{props.description}</p>
          </div>
        </div>
      );
    }

export default TextCard