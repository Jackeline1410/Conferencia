import React, { Component } from 'react';
import { Link } from 'react-router-dom';

//import Navbar from '..//componets/Navbar'
//import BadgesList from '../componets/BadgesList'
import BadgeListRyM from '../componets/BadgeListRyM'

import './styles/Badges.css'

import confLogo from '../images/platziconf-logo.svg'
class Badgesej extends Component {
        // constructor(props){
        //     super(props);
        //     console.log('1. contructor()');
        //     this.state = {
        //         data: [],
        //         }
        // }
        state = { 
            //hay que inicializar mis datos del state para evitar errores
            //los 3 estados de carga de una api loading, erro y data
            loading: true,
            error: null,
            data: {
                info:{},
                results:[]
            },
            nextPage:1
        }
        componentDidMount(){
            //console.log('3.componentDidMount()');
            //se ejecutara esta funcion cuando el comonente se muestre o monte
            this.fetchCharacters();
            // this.timeoutId = setTimeout(() => {
            //     this.setState({
            //         data: [
            //             {
            //               id: '2de30c42-9deb-40fc-a41f-05e62b5939a7',
            //               firstName: 'Freda',
            //               lastName: 'Grady',
            //               email: 'Leann_Berge@gmail.com',
            //               jobTitle: 'Legacy Brand Director',
            //               twitter: 'FredaGrady22221-7573',
            //               avatarUrl:
            //                 'https://www.gravatar.com/avatar/f63a9c45aca0e7e7de0782a6b1dff40b?d=identicon',
            //             },
            //             {
            //               id: 'd00d3614-101a-44ca-b6c2-0be075aeed3d',
            //               firstName: 'Major',
            //               lastName: 'Rodriguez',
            //               email: 'Ilene66@hotmail.com',
            //               jobTitle: 'Human Research Architect',
            //               twitter: 'MajorRodriguez61545',
            //               avatarUrl:
            //                 'https://www.gravatar.com/avatar/d57a8be8cb9219609905da25d5f3e50a?d=identicon',
            //             },
            //             {
            //               id: '63c03386-33a2-4512-9ac1-354ad7bec5e9',
            //               firstName: 'Daphney',
            //               lastName: 'Torphy',
            //               email: 'Ron61@hotmail.com',
            //               jobTitle: 'National Markets Officer',
            //               twitter: 'DaphneyTorphy96105',
            //               avatarUrl:
            //                 'https://www.gravatar.com/avatar/e74e87d40e55b9ff9791c78892e55cb7?d=identicon',
            //             },
            //           ],
            //     });
            // },3000)
        }
        
        //funcion asincronica por que no sabemos cuando nos llegaran los datos de la api
        fetchCharacters = async () => {
            this.setState({loading:true, error:null});

            try{
                //fetch sirve para llamar una api por get osea toma lo que sea que arroje el link que esta llamando
                const response = await fetch(
                    `https://rickandmortyapi.com/api/character/?page=${this.state.nextPage}`
                );
                //se le asigna el data de la respuesta de la api a una variable
                const data = await response.json();

                this.setState({
                    loading:false,
                    data: {
                        info: data.info,
                        //forma de concatenar info, al momento de mostrar mas personajes no los limpia 
                        //si no que toma lo que ya estaban y pone los nuevo que se volvieron a consular por medio de la llamada de la api
                        results: [].concat(this.state.data.results, data.results)
                    },
                    nextPage: this.state.nextPage + 1
                });
            } catch (error){
                //se cambia el estado de carga a false y se llena la variable de error para ver que paso
                this.setState({loading:false, error:error});
            }
        };
        componentDidUpdate(prevProps,prevState){
            console.log('5.render()');
            console.log({
                prevProps: prevProps, prevState:prevState
            });
            console.log({
                props: this.props, state: this.state
            })
        }
        componentWillUnmount(){
            console.log('6. componentWillunmoun')

            //cancela en caso de no poder actualizar el componente antes de que se complete 
            //una tarea asincrona 
            clearTimeout(this.timeoutId);
        }
    render() {
        if (this.state.error){
            return "Error!";
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
                    <BadgeListRyM badges={this.state.data.results} />
                </div>
                {!this.state.loading && this.state.data.info.next && (
                    <button onClick={() => this.fetchCharacters()}>Load More</button>
                )}
            </React.Fragment>
        );
    }
}

export default Badgesej;