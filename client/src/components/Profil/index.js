import './style.scss';
import Me from './moi2.png';

function Profil () {

    return (

       <div className="profil">
        <div className="profil-photo"> </div>
        <div className="profil-txt" style={{ fontFamily: 'Anuphan, sans-serif' }}>
            <h1 className="profil-title">À propos de moi </h1>
            <br /><br /> 
            <p className="profil-bio">Actuellement en bachelor "Développement web",  je me suis plongé dans le développement depuis quelques années et souhaite me spécialisé dans le secteur de CyberSécurité. 
               Pour cela j'aimerais donc acquérir de l'expérience et pourquoi pas construire ma propre entreprise et monter une équipe afin de m'aider dans la réalisation de ce projet. 
               Étant actuellement développeur Full Stack je souhaiterai devenir un "Hacker éthique" pour cela il faut que je développe certaines compétences et évoluer dans le monde professionel aux côtés de gens qui pourront m'y aider.  
            </p>
        </div>

       </div>
    )
}

export default Profil;