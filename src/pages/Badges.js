import React, { Component } from 'react';
import { Link } from 'react-router-dom';

//import Navbar from '..//componets/Navbar'
import BadgesList from '../componets/BadgesList'
import PageLoading from '../componets/PageLoading'
import PageError from '../componets/PageError'
import api from '../api'

import './styles/Badges.css'

import confLogo from '../images/platziconf-logo.svg'
class Badges extends Component {
        state = { 
            loading:true,
            error:null,
            data:undefined
        };
        
        componentDidMount (){
            this.fetchData()

            this.intervalId = setInterval(this.fetchData,5000);
        }

        componentWillUnmount(){
            clearInterval(this.intervalId);
        }

        fetchData = async () => {
            this.setState({loading:true, error:null})

            try{
                const data = await api.badges.list()
                this.setState({loading:false,data:data})
            } catch(error){
                this.setState({loading:false,error:error})
            }
        }
    render() {
        if (this.state.loading === true && !this.state.data){
            return <PageLoading />
        }

        if (this.state.error) {
            return <PageError error={this.state.error}/>;
        }
        return (
            <React.Fragment>
                {/* <Navbar /> */}

                <div className="Badges">
                    <div className="Badges__hero">
                        <div className="Badges__container">
                            <img className="Badges_conf-logo" src={confLogo} alt="Conf logo"/>
                        </div>
                    </div>
                </div>

                <div className="Badges__container">
                    <div className="Badges__buttons">
                        <Link to="/badges/new" className="btn btn-primary">
                            New Badge
                        </Link>
                    </div>
                    <BadgesList badges={this.state.data} />
                </div>
            </React.Fragment>
        );
    }
}

export default Badges;