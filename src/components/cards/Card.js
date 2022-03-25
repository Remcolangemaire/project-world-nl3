import React from 'react'

const Card = (props) => {
    return (
        <div className="card">
          <div className="card__body">
            <img src={props.img} alt={props.alt} class="card__image" />
            <h2 className="card__title">{props.title}</h2>
            <p className="card__description">{props.description}</p>
          </div>
          <button className="card__btn">More</button>
        </div>
      );
    }

export default Card