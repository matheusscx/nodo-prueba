import React, { Component } from 'react';
import Header from '../shared/Header'
import ListCharacters from '../components/ListCharacters'
import CharacterDetail from '../components/CharacterDetail'
import PageController from '../components/PageController'
import Search from '../components/Search'

class Home extends Component {

  render() {

    const { getSearchState, searchCharacter, resetDetail, getCharactersById, props, nextPage, backPage } = this.props;
    const { page, characters, detail, search } = props;
    const { status, character } = detail;

    return (
      <React.Fragment>
        <Header>GAME OF THRONES</Header>
        <section className="container p-5">
          {
            status ?
              <CharacterDetail resetDetail={resetDetail} character={character} ></CharacterDetail>
              :
              <React.Fragment>
                <Search
                  search={search}
                  searchCharacter={searchCharacter}
                  getSearchState={getSearchState}>
                </Search>
                <ListCharacters
                  getCharactersById={getCharactersById}
                  searchCharacter={searchCharacter}
                  page={page}
                  characters={characters}>
                </ListCharacters>
                <PageController
                  nextPage={nextPage}
                  backPage={backPage}>
                </PageController>
              </React.Fragment>
          }
        </section>
      </React.Fragment>
    )
  }


}

export default Home;