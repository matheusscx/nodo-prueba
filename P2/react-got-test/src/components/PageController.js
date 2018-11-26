
import React from 'react';

const PageController = (props) => {
  const { backPage, nextPage } = props;
  return (
    <div className="btn-group text-center d-flex justify-content-center mt-5" role="group">
      <button
        onClick={backPage.bind(this)}
        type="button"
        className="btn btn-primary">
        Anterior
      </button>

      <button
        onClick={nextPage.bind(this)}
        type="button"
        className="btn btn-primary">
        Siguiente
        </button>
    </div>
  );
}

export default PageController;