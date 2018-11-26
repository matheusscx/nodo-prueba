import React, { Component } from 'react';
import Home from '../pages/Home';


const URL = 'https://api.got.show/api/characters/'

class App extends Component {

  state = {
    characters: [],
    auxCharacters: [],
    page: {
      start: 0,
      end: 10
    },
    detail: {
      status: false,
      character: {}
    },
    search: ''


  }

  componentWillMount() {
    this.getAllCharacters()
  }

  getAllCharacters() {
    fetch(URL)
      .then(resp => resp.json())
      .then(data => this.setState({ characters: data }))
  }

  getCharactersById = (id) => {
    fetch(`${URL}byId/${id}`)
      .then(resp => resp.json())
      .then(data => {
        this.setState(state => {
          return {
            ...state,
            detail: {
              status: true,
              character: data.data
            }
          }
        })
      })
  }

  searchCharacter = (search) => {

    if (search.length && !this.state.auxCharacters.length) {
      this.setState({ auxCharacters: this.state.characters })
      let key = new RegExp(search, 'i')
      let newState = this.state.characters.filter(character => key.test(character.name))
      this.setState(state => {
        return {
          characters: newState,
          page: {
            start: 0,
            end: 10
          }
        }
      });
    } else if (!search.length) {
      this.setState(state => {
        return {
          ...state,
          characters: !state.auxCharacters.length ? state.characters : state.auxCharacters,
          auxCharacters: [],
          page: {
            start: 0,
            end: 10
          }
        }
      })
    }

  }


  getSearchState = (search) => {
    this.setState({ search })
  }

  resetDetail = () => {
    this.setState(state => {
      return {
        ...state,
        detail: { status: false, character: {} },
        search: '',
        characters: !state.auxCharacters.length ? state.characters : state.auxCharacters,
        auxCharacters: [],
        page: {
          start: 0,
          end: 10
        }

      }
    })
  }

  nextPage = () => {
    this.setState(state => {
      const { page, characters } = state;
      const { start, end } = page;
      if (end <= characters.length)
        return {
          ...state,
          page: {
            start: start + 10,
            end: end + 10
          }
        }
    })
  }

  backPage = () => {
    this.setState(state => {
      const { page, } = state;
      const { start, end } = page;
      if (start > 0)
        return {
          ...state,
          page: {
            start: start - 10,
            end: end - 10
          }
        }
    })
  }

  render() {
    return (
      <Home
        getSearchState={this.getSearchState}
        searchCharacter={this.searchCharacter}
        nextPage={this.nextPage}
        backPage={this.backPage}
        resetDetail={this.resetDetail}
        getCharactersById={this.getCharactersById}
        props={this.state}
      ></Home>
    );
  }
}

export default App;
