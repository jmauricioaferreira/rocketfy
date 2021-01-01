import React, { useState } from 'react';
import produce from 'immer';
import { loadLists } from '../../services/api';
import { Container } from './styles';
import BoardContext from './contex';
import List from '../List';

const data = loadLists();

const Board = () => {
  const [lists, setLists] = useState(data);

  function move(fromList, toList, from, to) {
    setLists(
      produce(lists, (draft) => {
        const dragged = draft[fromList].cards[from];
        console.log(dragged);
        draft[fromList].cards.splice(from, 1);
        draft[toList].cards.splice(to, 0, dragged);
      }),
    );
  }
  return (
    <BoardContext.Provider value={{ lists, move }}>
      <Container>
        {lists.map((list, index) => (
          <List key={list.title} data={list} index={index} />
        ))}
      </Container>
    </BoardContext.Provider>
  );
};

export default Board;
