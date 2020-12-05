import BugItem from './bugItem';

const BugList = ({bugs, toggle, bugRemove, removeClosed }) => {
    return(
        <section className="list">
                    <ol>
                    {bugs.map(bug => 
                        <BugItem key={bug.id} {...{bug, toggle, bugRemove}} />
                        )}
                    </ol>
                    <input type="button" value="Remove Closed" onClick={() => removeClosed(bugs)}/>
                </section>
    )
};

export default BugList;