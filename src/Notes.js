import React from 'react';
import { activate, deactivate, defer, del, NOTE_CREATED, select, unselect } from './store';
import checkMark from './check-mark.png';
import arrowDownPurple from './arrow-down-purple.png';
import arrowDown from './arrow-down.png';
import clock from './clock.png';
import trash from './trash.png';
import './Notes.css';
import { useDispatch, useSelector } from 'react-redux';

function Note({ index }) {
    const { values, selected } = useSelector(state => state);
    const isSelected = index === selected;
    const dispatch = useDispatch();
    const { text, type } = values[index];

    function onArrowClick() {
        if (!isSelected)
            dispatch(select(index));
        else
            dispatch(unselect());
    }

    function onCheckClick() {
        if (type === NOTE_CREATED)
            dispatch(activate(index));
        else
            dispatch(deactivate(index));
    }

    function onClockClick() {
        dispatch(defer(index));
    }

    function onTrashClick() {
        dispatch(del(index));
    }

    return (
        <div className='Note'>
            <img
                className={isSelected ? 'active' : ''}
                src={type === NOTE_CREATED ? arrowDown : arrowDownPurple}
                alt='arrow-down'
                onClick={onArrowClick}
            />
            <img
                src={checkMark}
                alt='check-mark'
                onClick={onCheckClick}
                className={isSelected ? 'Note-items' : ''}
            />
            <img
                src={clock}
                alt='clock'
                onClick={onClockClick}
                className={isSelected ? 'Note-items' : ''}
            />
            <img
                src={trash}
                alt='trash'
                onClick={onTrashClick}
                className={isSelected ? 'Note-items' : ''}
            />
            <span>{text}</span>
        </div>
    )
}

export default function Notes() {
    const { values } = useSelector(state => state);

    return (
        <div className='Notes'>
            {values.map((_, i) => <Note key={i} index={i} />)}
        </div>
    );
}