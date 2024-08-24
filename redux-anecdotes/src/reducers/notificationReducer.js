import { createSlice } from "@reduxjs/toolkit"
import { useSelector } from "react-redux"

const notificationSlice = createSlice({
    name: 'notification',
    initialState: '',
    reducers: {
        notificationVote(state, action) {
            return `You voted '${action.payload}'`
        },
        notificationCreate(state, action) {
            return `You created '${action.payload}'`
        },
        notificationDelete(state, action) {
            return ''

        }
    }
})

export const { notificationVote, notificationDelete, notificationCreate } = notificationSlice.actions
export default notificationSlice.reducer