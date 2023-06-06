import reduxToolkit from "../../core/reduxToolkit"

let initialState = {
    flag: false,
    loaddingLogin: false,


}

let { reducer, type, action } = reduxToolkit({
    name: 'shared',
    initialState,
    reducers: {
        toggleShadow(state, action) {
            return {
                ...state,
                flag: action.payload,
            }
        },

    }
})

export default reducer;

export const AUTH = type;

export const { toggleShadow } = action;


