// import React, { Component } from 'react';
// import s from './Searchbar.module.css';

// export default class Searchbar extends Component {
//   onChangeQuery = event => {
//     event.preventDefault();
//     const newSearchTerm = event.target.elements.search.value;
//     this.props.onSubmit(newSearchTerm);
//   };

//   render() {
//     return (
//       <header className={s.Searchbar}>
//         <form className="form" onSubmit={this.onChangeQuery}>
//           <button type="submit" className="button">
//             <span className="button-label">Search</span>
//           </button>

//           <input
//             className="input"
//             type="text"
//             autoComplete="off"
//             autoFocus
//             placeholder="Search images and photos"
//             name="search"
//           />
//         </form>
//       </header>
//     );
//   }
// }

import React, { useState, useCallback } from 'react';
import s from './Searchbar.module.css';

const Searchbar = ({ onSubmit }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = useCallback(event => {
    setSearchTerm(event.target.value);
  }, []);

  const handleSubmit = useCallback(
    event => {
      event.preventDefault();
      onSubmit(searchTerm);
    },
    [onSubmit, searchTerm]
  );

  return (
    <header className={s.Searchbar}>
      <form className="form" onSubmit={handleSubmit}>
        <button type="submit" className="button">
          <span className="button-label">Search</span>
        </button>
        <input
          className="input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={searchTerm}
          onChange={handleInputChange}
          name="search"
        />
      </form>
    </header>
  );
};

export default Searchbar;
