let initialId = 0;

export function newBug(bugName, projectName){
    const newBug = {
        id: ++initialId,
        name: bugName,
        isClosed: false,
        createdAt: new Date(),
        projectName: projectName
    };
    const action = {type: 'BUG_ADD_NEW', payload: newBug}
    return action;
}