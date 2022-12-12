import React from 'react';
import { add } from './store';
import { useDispatch } from 'react-redux';
import './Input.css';

export default function Input() {
    const [text, setText] = React.useState('');
    const dispatch = useDispatch();

    function onKeyDown(event) {
        if (event.key !== 'Enter') return;
        onSubmit();
    }

    function onSubmit() {
        if (!text) return;
        dispatch(add(text));
        setText('');
    }

    return (
        <div className='Input'>
            <input value={text} onChange={event => setText(event.target.value)} onKeyDown={onKeyDown} />
            <button onClick={onSubmit}>Добавить</button>
        </div>
    );
}