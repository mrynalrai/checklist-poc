const initialState = {
    player: '',
    messiChecklist: [
        { id: 'mostGoals', checked: false },
        { id: 'mostAssists', checked: false },
        { id: 'mostTackles', checked: false }
    ],
    ronaldoChecklist: [
        { id: 'mostGoals', checked: false },
        { id: 'mostAssists', checked: false },
        { id: 'mostTackles', checked: false }
    ]
  }
  
  // Use the initialState as a default value
  export default function appReducer(state = initialState, action) {
    // The reducer normally looks at the action type field to decide what happens
    switch (action.type) {
      // Do something here based on the different types of actions
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