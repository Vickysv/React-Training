const BugItem = ({ bug, toggle, bugRemove }) => {
    return(
    <li>
        <span className={"bugname " + (bug.isClosed ? 'closed' : '')}
            onClick={() => toggle(bug)}>{bug.name} {bug.projectName}</span>
        <div className="datetime">{bug.createdAt.toString()}</div>
        <input type="button" value="Remove" onClick={() => bugRemove(bug)} />
    </li>
    )
}

export default BugItem;