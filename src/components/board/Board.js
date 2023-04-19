import React from 'react';
import './Board.scss';

const Board = () => {
    return (
        <main className="board__container">
            <p className='board__empty__text'>This board is empty. Create a new column to get started.</p>
            <button className='board__add__column__btn'>+Add New Column</button>
        </main>
    );
};

export default Board;