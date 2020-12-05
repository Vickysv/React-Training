import { Fragment } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import BugStat from './views/bugStat';
import BugSort from './views/bugSort';
import BugNames from './views/bugNames';
import BugList from './views/bugList';
import * as bugActionCreators from './actions';

const BugTracker = ({ bugs, projects, toggle, bugRemove, removeClosed, newBug }) => (
  <Fragment>
    <h3>Bug Tracker</h3>
    <hr />
    <BugStat bugs={bugs} />
    <BugSort />
    <BugNames projects={projects} newBug={newBug} />
    <BugList {...{ bugs, toggle, bugRemove, removeClosed }} />
  </Fragment>
);

function mapStateToProps(storeState){
    const bugs = storeState.bugState;
    const projects = storeState.projectState;
    return { bugs: bugs, 
            projects: projects};
}

function mapDispatchersToProps(dispatch){
    const bugActionDispatchers = bindActionCreators(bugActionCreators, dispatch);
    return bugActionDispatchers;
}

export default connect(
    mapStateToProps, 
    mapDispatchersToProps)
    (BugTracker);