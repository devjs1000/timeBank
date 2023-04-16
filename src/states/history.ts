import { createSlice } from "@reduxjs/toolkit";
import { ProcessType } from "./process";
import { deleteItemById, updateItemById } from "../helpers/db";


interface HistoryState {
    data: ProcessType[],
    edit: ProcessType | null,
    showEditor: boolean
}

const initialState: HistoryState = {
    data: [],
    showEditor: false,
    edit: null
}

export const historySlice = createSlice({
    initialState,
    name: 'history',
    reducers: {
        updateHistory(state, action) {
            state.data = action.payload
        },
        addHistory(state, action) {
            state.data.push(action.payload)
        },
        deleteProcess(state, action) {
            const id = action.payload
            state.data = state.data.filter((el: ProcessType) => {
                return id != el.id
            })
            deleteItemById('history', id)
        },
        clearHistory(state) {
            state.data = []
        },
        updateProcess(state, action) {
            const { id, data } = action.payload;
            let updated = {}
            state.data = state.data.map((el: ProcessType) => {
                if (el.id == id) {
                    updated = {
                        ...el,
                        ...data
                    }

                    return {
                        ...state,
                        ...data
                    }
                }
                return el
            })
            state.showEditor = false;
            state.edit = null;
            updateItemById('history', id, updated)
        },
        setEdit(state, action) {
            state.edit = action.payload
        },
        setShowEditor(state, action) {
            state.edit = action.payload;
            state.showEditor = true;
        },
        cancelEdit(state) {
            state.edit = null;
            state.showEditor = false;
        },
    }
})

export const { addHistory, clearHistory, deleteProcess, updateHistory, updateProcess } = historySlice.actions;
export default historySlice.reducer;