import React from 'react';



const addCharacters = ({ characters, page, getCharactersById }) => {
  return characters.filter((character, index) => index >= page.start && index < page.end)
    .map((character, index) => {
      return (
        <tr key={index}>
          <td>{character.name}</td>
          <td>{character.house}</td>
          <td>
            <button
              className="btn btn-primary"
              onClick={getCharactersById.bind(null, character._id)}
            >Ver detalle
            </button>
          </td>
        </tr>
      )
    })
}

const ListCharacters = (props) => (
  <table className="table table-hover table-striped text-center shadow">
    <thead className="thead-dark">
      <tr>
        <th scope="col">Nombre</th>
        <th scope="col">Casa</th>
        <th scope="col">Detalle</th>
      </tr>
    </thead>
    <tbody>
      {addCharacters(props)}
    </tbody>
  </table>
)


export default ListCharacters;