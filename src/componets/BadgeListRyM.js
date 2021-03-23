import React, { Component } from 'react';

import './styles/BadgesList.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'

class BadgesListItem extends Component {
    render() {
      const {badge} = this.props
        return (
          <div className="BadgesListItem">
            <img
              className="BadgesListItem__avatar"
              src={badge.image}
              alt={`${badge.name}`}
            />
    
            <div>
              <strong>
                {badge.name} {badge.location.name}
              </strong>
              <br />
              <span style={{color:"#00acee"}}>
                <FontAwesomeIcon icon={faTwitter}/>@{badge.type}
              </span>
              <br />
              {badge.status}
            </div>
          </div>
        );
      }
    }
    
class BadgeListRyM extends Component {
    render() {
    const {badges} = this.props
    return (
        <div className="BadgesList">
        <ul className="list-unstyled">
            {badges.map(badge => {
            return (
                //cada hijo de una lista debe tener un prop llamado key ejemplo id
                <li key={badge.id}>
                <BadgesListItem badge={badge} />
                </li>
            );
            })}
        </ul>
        </div>
    );
    }
}

export default BadgeListRyM;