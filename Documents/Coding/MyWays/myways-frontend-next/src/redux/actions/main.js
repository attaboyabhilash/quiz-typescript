import { SET_NAME } from "../types"

export const setInfo = (userInfo) => ({
    type: SET_NAME,
    payload: userInfo,
})
