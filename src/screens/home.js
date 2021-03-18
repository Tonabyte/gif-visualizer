import React, { useState } from 'react';

// Components
import SearchBar from '../components/searchBar';
import Grid from '../components/grid';

const Home = () => {
  const [category, setCategory] = useState(['Elfen Lied']);

  return(
    <>
    <h2>Gif Visualizer</h2>
    <SearchBar addCategory={setCategory}/>
    <hr/>
    <ol>
    {
      category.map(cat => <Grid category={cat} key={cat}/>)
    }
    </ol>
    </>
  );
};

export default Home;