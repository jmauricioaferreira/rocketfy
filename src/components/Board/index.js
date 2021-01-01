import React, { useState } from 'react';
import produce from 'immer';
import { loadLists } from '../../services/api';
import { Container } from './styles';
import BoardContext from './contex';
import List from '../List';

const data = loadLists();

const Board = () => {
  const [lists, setLists] = useState(data);

  function move(from, to) {
    console.log(from, to);
  }
  return (
    <BoardContext.Provider value={{ lists, move }}>
      <Container>
        {lists.map((list) => (
          <List key={list.title} data={list} />
        ))}
      </Container>
    </BoardContext.Provider>
  );
};

export default Board;
