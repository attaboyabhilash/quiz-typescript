import { SET_NAME } from "../types"

const main = (state = { userInfo: "Student" }, action) => {
    switch (action.type) {
        case SET_NAME:
            return {
                ...state,
                userInfo: action.payload,
            }
        default:
            return { ...state }
    }
}

export default main
