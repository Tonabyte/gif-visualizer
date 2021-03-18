import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Searchbar = ({ addCategory }) => {
  
  const [text, setText] = useState('');

  const handleInput = e => { setText(e.target.value)};

  const handleSubmit = e => {
    e.preventDefault();

    if (text.trim().length) {
      addCategory(cat => [text, ...cat]);
      setText('');
    }
  }

  return (
    <form onSubmit={ handleSubmit }>
      <input type="text" onChange={ handleInput } value={text} placeholder="¿Qué te gustaría ver?"/>
    </form>
  )
};

Searchbar.propTypes = {
  addCategory: PropTypes.func.isRequired,
};

export default Searchbar;
