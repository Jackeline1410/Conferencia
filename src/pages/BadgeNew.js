import React, { Component } from 'react';

//import Navbar from '../componets/Navbar'
import Badge from '../componets/Badge'
import BadgeForm from '../componets/BadgeForm'
import PageLoading from '../componets/PageLoading'
import api from "../api"

import './styles/BadgeNew.css'

import headerlogo from '../images/platziconf-logo.svg'

class BadgeNew extends Component {
    state ={ 
        loading: false,
        error:null,
        form: {
        firstName:'',
        lastName:'',
        email:'',
        jobTitle:'',
        twitter:''
        
    } };

    handleChange = e => {
        // Copiar el estado y ir poniendo cada ves que cambie
        // const nextForm = this.state.form
        // nextForm[e.target.name] = e.target.value;
        this.setState({
            form:{
                //copiar datos del ultimo estado que tiene y agregarle el nuevo
                ...this.state.form,
                [e.target.name]:e.target.value
            }
        })
    }

    handleSubmit = async e => {
        e.preventDefault()
        this.setState({loading:true, error:null})

        try{
            await api.badges.create(this.state.form)
            this.setState({loading:false})

            this.props.history.push('/badges');
        }catch(error){
            this.setState({loading:false, error:error})
        }
    }
    render() {
        if (this.state.loading){
            return <PageLoading/>
        }
        return (
        <React.Fragment>
            {/* componente barra de navegacion */}
            {/* <Navbar />  */}
            <div className="BadgeNew__hero">
                <img className="BadgeNew__hero-image img-fluid" 
                src={headerlogo} alt="Logo"/>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-6">
                        {/* Segundo componete que llamo mi badge */}
                    <Badge 
                        // si el primer campo esta vacio muestra el segundo
                        name={this.state.form.firstName || 'FIRST_NAME'}
                        lastname={this.state.form.lastName || 'LAST_NAME'}
                        jobtitle={this.state.form.jobTitle || 'JOB_TITLE'}
                        email={this.state.form.email || 'EMAIL'}
                        //avatar='https://es.gravatar.com/userimage/170163826/557e113f09223a3c9fab2b54903874e3.jpg'
                        twitter={this.state.form.twitter || 'twitter'}
                        />
                    </div>
                    <div className="col-6">
                        {/* Tercer componente que es el formulario
                        se pueden declarar con cualquier nombre los props y las funciones que mandan llamar */}
                        <BadgeForm
                        title="New Attendant" 
                        onChange={this.handleChange}
                        onSubmit={this.handleSubmit} 
                        formValue={this.state.form}
                        error={this.state.error}/>
                    </div>
                </div>
            </div>
        </React.Fragment>
        );
    }
}

export default BadgeNew;