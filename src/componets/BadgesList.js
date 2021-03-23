import React, { Component } from 'react';
import {Link} from 'react-router-dom'

import Gravatar from './Gravatar';

import './styles/BadgesList.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'

class BadgesListItem extends Component {
    render() {
      const {badge} = this.props
        return (
          <div className="BadgesListItem">
            <Gravatar
              className="BadgesListItem__avatar"
              email={badge.email}
              alt={`${badge.firstName} ${badge.lastName}`}
            />
    
            <div>
              <strong>
                {badge.firstName} {badge.lastName}
              </strong>
              <br />
              <span style={{color:"#00acee"}}>
                <FontAwesomeIcon icon={faTwitter}/>@{badge.twitter}
              </span>
              <br />
              {badge.jobTitle}
            </div>
          </div>
        );
      }
    }
//este hook que se creo (todos empiezan con 'use')
// sirve para filtrar en una lista por lo que se puede reutilizar en cualquier otro lado donde tengamos que hacer busquedas
// la funcion de los hooks en poder encampsular pequenas funciones que nos ayuden a no repetir codigo
// es importante ver estas oportunidades al momento de desarrollar las apps
function useSearchBadges(badges){
    const[ query, setQuery] = React.useState('');
    const [filteredBadges, setFilteredBadges] = React.useState(badges)

    //el Hook useMemo Sirve para memorizar los calculos que realizo la funcion
    // en este caso al ya saber el resultado de escribir angel
    //traera inmediatamente el badges de angel sin tener que estar comparando todas las busquedas
    React.useMemo(() => {
      const result = badges.filter(badge => {
        return `${badge.firstName} ${badge.lastName}`
        .toLowerCase()
        .includes(query.toLowerCase());
    });

    setFilteredBadges(result)
  }, [badges, query]);

  return {query, setQuery, filteredBadges}
}   
    
function BadgesList (props) {
    const badges = props.badges;

    const {query, setQuery, filteredBadges} = useSearchBadges(badges);

    if (filteredBadges.length === 0){
      return(
        <div>
          <div className="form-group">
            <label>Filter Badges</label>
            <input type="text" className="form-control" 
              value={query}
              onChange={(e) => {
                setQuery(e.target.value)
              }}
            />
          </div>
          <h3>No badges were found</h3>
          <Link className="btn btn-primary" to="/badges/new">
            Create new badge
          </Link>
        </div>
      )
    }
    return (
        <div className="BadgesList">
          <div className="form-group">
            <label>Filter Badges</label>
            <input type="text" className="form-control" 
              value={query}
              onChange={(e) => {
                setQuery(e.target.value)
              }}
            />
          </div>
        <ul className="list-unstyled">
            {filteredBadges.map(badge => {
            return (
                //cada hijo de una lista debe tener un prop llamado key ejemplo id
                <li key={badge.id}>
                  <Link className="text-reset text-decoration-none" 
                    //to={`/badges/${badge.id}/edit`}>
                    to={`/badges/${badge.id}`}>
                      {/* lo que va dentro del link en este caso un componente completo */}
                    <BadgesListItem badge={badge} />
                  </Link>
                </li>
            );
            })}
        </ul>
        </div>
    );
    }

export default BadgesList;