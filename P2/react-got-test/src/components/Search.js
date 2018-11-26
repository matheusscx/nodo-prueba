import React, { Component } from 'react';

class Search extends Component {

  onChange = e => {
    this.props.getSearchState(e.target.value)
    if (!e.target.value.length) {
      this.props.searchCharacter('');
    }
  }

  handleSubmit = e => {
    e.preventDefault();
  }

  render() {
    const {
      searchCharacter,
      search
    } = this.props

    return (
      <form onSubmit={this.handleSubmit} >
        <div className="row">
          <div className="col-7 col-sm-5 col-md-4 ">
            <input
              onChange={this.onChange}
              placeholder='Buscar por nombre'
              type='text' className='form-control'
            />
          </div>

          <div className="col-12 col-sm-4 col-md-6 d-none d-sm-block">
          </div>

          <div className="col-5 col-sm-3 col-md-2 text-right ">
            <button
              className='btn btn-primary mb-3 mr-lg-3 justify-content-end shadow-sm'
              onClick={searchCharacter.bind(null, search)}
              type='submit'>
              Buscar
						</button>
          </div>
        </div>
      </form>
    );
  }
}

export default Search;