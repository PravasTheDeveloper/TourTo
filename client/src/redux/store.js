import { configureStore } from "@reduxjs/toolkit"
import userReducer from "./ReduxSlices/userReducer"

const store = configureStore({
    reducer: {
        userdata: userReducer
    }
})

export default store;