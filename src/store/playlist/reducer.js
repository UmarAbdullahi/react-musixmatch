import actions from './actions'
import initialState from './state'
import actionTypes from '../actionTypes'

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.SET_LYRICS:
            return actions.setLyrics(state, action.payload)
        case actionTypes.PLAY:
            return actions.play(state, action.payload)
        case actionTypes.PAUSE:
            return actions.pause(state, action.payload)
        case actionTypes.SET_ID:
                return actions.setId(state, action.payload)
        default:
            return state
    }
}

//console.log(reducer)

export default reducer;