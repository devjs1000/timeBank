import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import shortid from 'shortid';
import { multiUpdateDb, updateDb } from "../helpers/db";
const initialState: ProcessType = {
    hasStarted: false,
    time: 0,
    title: "START",
    description: 'I Will!',
    modalStatus: false,
    startTime: 0,
    id: ''
}

export const stop:any = createAsyncThunk('process/stop', async (payload: ProcessType) => {
    try {
        await multiUpdateDb([
            {
                collection: 'history',
                data: { ...payload },
                updateMethod: 'push',
            },
            {
                collection: 'process',
                data: {},
                updateMethod: 'update',
            },
        ]);
        return true;
    } catch (error) {
        console.log(error)
        return false;
    }

})

const processSlice = createSlice({
    initialState,
    name: 'process',
    reducers: {
        start(state, action) {
            const { title, description } = action.payload
            state.description = description;
            state.title = title
            state.time = 0;
            state.startTime = Date.now()
            state.hasStarted = true
            state.modalStatus = false;
            state.id = shortid.generate();
            updateDb('process', { ...state })
        },

        openModal(state) {
            if (!state.hasStarted) {
                state.modalStatus = true;
            }
        },
        closeModal(state) {
            state.modalStatus = false
        },
        toggleModal(state) {
            state.modalStatus = !state.modalStatus
        },
        updateSecond(state) {
            state.time = Date.now() - state.startTime
        },
        updateProcess(state, action) {
            const { title, description, hasStarted, id, modalStatus, startTime }: ProcessType = action.payload
            state.title = title;
            state.description = description;
            state.time = Date.now() - startTime;
            state.hasStarted = hasStarted;
            state.id = id;
            state.modalStatus = modalStatus;
            state.startTime = startTime;
        }
    },
    extraReducers(builder) {
        builder.addCase(stop.fulfilled, (state, action) => {
            if (action.payload) {
                state.title = 'START';
                state.description = 'I Will!';
                state.hasStarted = false;
                state.time = 0;
                state.startTime = 0;
                state.modalStatus = false;
                state.id = '';
            }
        })
    },

})

export interface ProcessType {
    hasStarted: boolean;
    time: number;
    title: string;
    description: string;
    modalStatus: boolean;
    startTime: number
    id: string;
}

export const { start, closeModal, openModal, toggleModal, updateSecond, updateProcess } = processSlice.actions
export default processSlice.reducer