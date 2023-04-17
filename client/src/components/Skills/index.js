import './style.scss';

function Skills (){

    return (

        <main className="main">
        <div className="skills">
            <div className='skill'>
                <h3 className='skill-title'>Dévelopement front-end</h3>
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>React</li>
                </ul>
            </div>
            <div className='skill'>
                <h3 className='skill-title'>Dévelopement back-end</h3>
                <ul>
                    <li>Python</li>
                    <li>C</li>
                    <li>PhP</li>
                </ul>
            </div>
            <div className='skill'>
                <h3 className='skill-title'>Bases de données</h3>
                <ul>
                    <li>SQL</li>
                    <li>MySQL</li>
                    <li>PostgreSQL</li>
                </ul>
            </div>
            </div>
            </main>
    )
}

export default Skills;