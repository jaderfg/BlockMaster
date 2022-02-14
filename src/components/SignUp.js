//inscribirse
import React, { Component } from 'react'
import { Form, Button } from 'react-bootstrap'
import { userUrl } from '../helpers/UrlsApi';
import axios from 'axios';


export default class SignUp extends Component {

    constructor(){
        super();
        this.state = {
            registro:[],
            
        };
    }


    render() {

      
    const {nombre,apellido,contraseña,email} = this.state.registro;

    const postData = () => {
        axios.post(userUrl,this.state.registro)
       .then(response => console.log(response.data))
       .catch(error => console.log(error))
        
    }


   const handleChanged = ({target}) => {
    this.setState({
      ...this.state.registro,
      [target.name]: target.value
    })

    }
  const handleSubmit = (e) => {
    e.preventDefault();
   }




        return (
            <div>
                <h1>Registrate</h1>
                <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control type="text" placeholder="Nombre" onChange={handleChanged} 
                    name="nombre" value={nombre} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Apellido</Form.Label>
                    <Form.Control type="text" placeholder="Apellido" onChange={handleChanged}
                    name="apellido" value={apellido}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Correo electronico</Form.Label>
                    <Form.Control type="email" placeholder="Correo" onChange={handleChanged}
                    name="email" value={email}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control type="password" placeholder="Contraseña" onChange={handleChanged}
                    name="contraseña" value={contraseña}/>
                </Form.Group>

                <Button variant="primary" type="submit" onClick={() => postData()}>
                    Enviar registro
                </Button>
                </Form>
            </div>
        )
    }
}

