//dividir el componente en UI component y container component
// es una buena practica de programacion separar la logica y lo presantacional
// en este componente se hace un ejemplo
import React, { Component } from 'react';

import BadgeDetails from '../pages/BadgeDetails'
import PageLoading from '../componets/PageLoading'
import PageError from '../componets/PageError'
import Api from '../api'
import api from '../api';

//Container Components o componente container 
//es el encargado de la logica de un componente aquel que se encarga de manejar los datos
//consultarlos, guardarlos etc
class BadgeDetailsContainer extends Component {
    state = {
        loading:true,
        error:null,
        data:undefined,
        modalIsOpen:false
    }

    componentDidMount(){
        this.fetchData()
    }

    fetchData = async () => {
        this.setState({loading:true, error:null})

        try{
            const data =  await Api.badges.read(
                this.props.match.params.badgeId
            )
            this.setState({loading:false, data: data})
        } catch (error){
            this.setState({loading:false, error:error})
        }
    }
    handleOpenModal = e => {
        this.setState({ modalIsOpen: true })
    }

    handleCloseModal = e => {
        this.setState({ modalIsOpen: false })
    }

    handleDeleteBade = async e => {
        this.setState({ loading:true, error:null})

        try{
            await api.badges.remove(
                this.props.match.params.badgeId
            )
            this.setState({loading:false})

            this.props.history.push('/badges')
        }catch(error){
            this.setState({loading:false, error:error})
        }
    }
    render() {
        if (this.state.loading){
            return <PageLoading />
        }

        if (this.state.error){
            return <PageError error={this.state.error} />
        }

        return (
           <BadgeDetails 
           onCloseModal={this.handleCloseModal}
           onOpenModal={this.handleOpenModal}
           modalIsOpen={this.state.modalIsOpen}
           onDeleteBadge={this.handleDeleteBade}
           badge={this.state.data}/>
        );
    }
}

export default BadgeDetailsContainer;