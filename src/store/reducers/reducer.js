const initialState = {
    isIframe: false,
    player: '',
    messiChecklist: {
        mostGoals: false,
        mostAssists: false,
        mostTackles: false
    },
    ronaldoChecklist: {
        mostGoals: false,
        mostAssists: false,
        mostTackles: false
    }
  }
  
  // Use the initialState as a default value
  export default function appReducer(state = initialState, action) {
    // The reducer normally looks at the action type field to decide what happens
    switch (action.type) {
        // Do something here based on the different types of actions
        case 'iframeUpdated':
            return {
                ...state,
                isIframe: action.payload
            }
        case 'playerUpdated':
            return {
                ...state,
                player: action.payload
            }
        case 'messiChecklistUpdated':
            return {
                ...state,
                messiChecklist: action.payload
            }
        case 'ronaldoChecklistUpdated':
            return {
                ...state,
                messiChecklist: action.payload
            }
      default:
        // If this reducer doesn't recognize the action type, or doesn't
        // care about this specific action, return the existing state unchanged
        return state
    }
  }