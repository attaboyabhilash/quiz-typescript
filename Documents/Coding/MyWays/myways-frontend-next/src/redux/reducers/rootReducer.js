import main from "./main"
import { combineReducer } from "redux"

const rootReducer = combineReducer({
    main: main,
})

export default rootReducer
