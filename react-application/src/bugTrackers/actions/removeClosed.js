export function removeClosed(bugs){
    const closedBugs = bugs.filter(bug => bug.isClosed);
    const action = {type: 'REMOVE_CLOSED_BUGS', payload: closedBugs};
    return action;
}