let initialState = [];
        function bugReducer(currentState = initialState, action){
            if(action.type === 'BUG_ADD_NEW'){
                const newState = [...currentState, action.payload];
                return newState;
            }
            if(action.type === 'BUG_REPLACE'){
                const bugToReplace = action.payload,
                newState = currentState.map(bug => bug.id === bugToReplace.id ? bugToReplace : bug);
                return newState;
            }
            if(action.type === 'BUG_REMOVE'){
                const bugToRemove = action.payload,
                newState = currentState.filter(bug => bug.id != bugToRemove.id);
                return newState;
            }
            if(action.type === 'REMOVE_CLOSED_BUGS'){
                const bugsToRemove = action.payload,
                newState = currentState.filter(bug => !bugsToRemove.find(b => b.name === bug.name));
                return newState;
            }
            return currentState;
        }

        export default bugReducer;