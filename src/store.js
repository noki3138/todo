import { configureStore, createSlice } from '@reduxjs/toolkit';

export const NOTE_CREATED = 'created';
export const NOTE_ACTIVE = 'active';

export const notesSlice = createSlice({
    name: 'notes',
    initialState: {
        values: [],
        selected: null
    },
    reducers: {
        /** @function dsdsd */
        add(state, action) {
            state.selected = null;
            const text = action.payload;
            state.values.unshift({ text, type: NOTE_CREATED });
        },
        activate(state, action) {
            state.selected = null;
            const index = action.payload;
            state.values[index].type = NOTE_ACTIVE;
        },
        deactivate(state, action) {
            state.selected = null;
            const index = action.payload;
            state.values[index].type = NOTE_CREATED;
        },
        defer(state, action) {
            state.selected = null;
            const index = action.payload;
            const item = state.values.splice(index, 1)[0];
            state.values.push(item);
        },
        del(state, action) {
            state.selected = null;
            const index = action.payload;
            state.values.splice(index, 1);
        },
        select(state, action) {
            const index = action.payload;
            state.selected = index;
        },
        unselect(state) {
            state.selected = null;
        }
    }
})

export const { add, activate, deactivate, defer, del, select, unselect } = notesSlice.actions;

export const store = configureStore({ reducer: notesSlice.reducer });
