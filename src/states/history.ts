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
        updateProcessHistory(state, action) {
            console.log('updateProcess', action.payload)
            const { id, data } = action.payload;
            let updated = {}
            state.data = state.data.map((el: ProcessType) => {
                if (el.id == id) {
                    updated = {
                        ...el,
                        ...data
                    }

                    return {
                        ...el,
                        ...data
                    }
                }
                return el
            })
            console.log('updated', updated)
            state.showEditor = false;
            state.edit = null;
            updateItemById('history', id, updated)
        },
        setEdit(state, action) {
            state.showEditor = true;
            state.edit = action.payload
        },
        setShowEditor(state) {
            state.showEditor = true;
        },
        cancelEdit(state) {
            state.edit = null;
            state.showEditor = false;
        },
        
    }
})

export const { addHistory, clearHistory, deleteProcess, updateHistory, updateProcessHistory, cancelEdit, setEdit, setShowEditor } = historySlice.actions;
export default historySlice.reducer;