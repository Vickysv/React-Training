import { useState } from 'react';

const BugNames = ({ newBug , projects}) => {
    const [bugName, setBugName] = useState('');
    const [projectName, setprojectName] = useState('');
    return(
    <section className="edit">
                    <label htmlFor="">Bug Name :</label>
                    <input type="text" name="" id="" onChange={evt => setBugName(evt.target.value)}/>
                    <label htmlFor="">Project :</label>
                    <select onChange={evt => setprojectName(evt.target.value)}>
                    {projects.map(project =>
                        <option value={project.name}>{project.name}</option>
                        )}
                    </select>
                    <input type="button" value="Add New" onClick={() => newBug(bugName, projectName)}/>
                </section>
    )
};

export default BugNames;