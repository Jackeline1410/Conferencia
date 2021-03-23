import React from 'react';
import {Link} from 'react-router-dom';

import Badge from '../componets/Badge'
import DeleteBadgeModal from '../componets/DeleteBadgeModal'

import './styles/BadgeDetails.css'
import confLogo from '../images/platziconf-logo.svg'


function useIncreaseCount(max) {
    const [count, setCount] = React.useState(0)

    if (count > max){
        setCount(0)
    }

    return [count, setCount]
}

//UI component o componente presentacional es un componente que se encarga de mostrar solamente el contenido
// por ello no se declara el container ya que no habra cambios de logica en este compoente
// solamente se encarga de mostrar el contenido final
function BadgeDetails(props) {
    const [count, setCount] = useIncreaseCount(4);
    //const count = 3;
    const badge = props.badge;
    return (
        <div>
        <div className="BadgeDetails__hero">
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <img src={confLogo} alt="Logo de la conferencia"/>
                    </div>
                    <div className="col-6 .BadgeDetails__hero-attendant-name">
                        <h1>{badge.firstName} {badge.lastName}</h1>
                    </div>
                </div>
            </div>
        </div>
        <div className="container">
            <div className="row">
                <div className="col-6">
                    <Badge 
                    name={badge.firstName || 'FIRST_NAME'}
                    lastname={badge.lastName || 'LAST_NAME'}
                    jobtitle={badge.jobTitle || 'JOB_TITLE'}
                    email={badge.email || 'EMAIL'}
                    twitter={badge.twitter || 'twitter'}
                    />
                </div>
                <div className="col-6">
                    <h2>Actions</h2>
                    <div>
                        <div>
                            {/* Ejemplo de uso de Hook comentado */}
                            {/* <button onClick={() => {
                                setCount(count + 1);
                            }} className="btn btn-primary">
                                Increase Count: {count}
                            </button> */}
                            <Link className="btn btn-primary mb-4"
                            to={`/badges/${badge.id}/edit`}>
                            Edit
                            </Link>
                        </div>
                        <div><button onClick={props.onOpenModal} className="btn btn-danger">Delete</button>
                         <DeleteBadgeModal 
                         isOpen={props.modalIsOpen}
                         onClose={props.onCloseModal}
                         onDeleteBadge={props.onDeleteBadge}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default BadgeDetails;