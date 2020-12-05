export function bugRemove(bugToremove){
    const action = {type: 'BUG_REMOVE', payload: bugToremove};
    return action;
}