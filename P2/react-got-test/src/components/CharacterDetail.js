import React from 'react';

const characterDetail = (props) => {

  const { character, resetDetail } = props

  const { imageLink, name, house, mother, father, heir, spouse, male, titles } = character;

  return (
    <div className="row ">
      <div className=" offset-4 col-4">
        <div className="content">
        <div className="card shadow ">
          {imageLink ? <img className="card-img-top" src={`https://api.got.show${imageLink}`} alt={name} height='400' /> : null}
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <h6 className="card-subtitle mb-3 text-muted">{house}</h6>
            {father ? <p className="card-text"><strong>Padre: </strong> {father} </p> : null}
            {mother ? <p className="card-text"><strong>Madre: </strong> {mother} </p> : null}
            {spouse ? <p className="card-text"><strong>{male ? 'Esposa:' : 'Esposo:'} </strong> {spouse}</p> : null}
            {heir ? <p className="card-text"><strong>Heredero: </strong> {heir}</p> : null}
            {titles.length ? <p className="card-text"><strong>Titulos: </strong> {titles.join(', ')}</p> : null}
            <button onClick={resetDetail.bind(null)} className="btn btn-primary">Volver</button>
          </div>
        </div>
        </div>
      </div>
    </div>










  )
}


export default characterDetail;