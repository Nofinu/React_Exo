import { Component } from 'react';
import { Clients } from './Clients';

export class Liste extends Component {
    constructor(props){
        super(props)
        this.state = { clients : [{ 
            nom: "nom contact", 
            prenom: "prenom contact", 
            telephone: "0123456789", 
            statut : true,
            adresse: { rue: "ma rue", ville: "ma ville", codePostal: "59200" }
        },{ 
            nom: "nom0 contact", 
            prenom: "pierre", 
            telephone: "9123456789", 
            statut : false,
            adresse: { rue: "ma2 rue", ville: "ma ville1", codePostal: "59201" }
        },{ 
            nom: "nom1 contact", 
            prenom: "théo", 
            telephone: "8123456789", 
            statut : true,
            adresse: { rue: "ma1 rue", ville: "ma ville1", codePostal: "59202" }
        }] }
    }

    changeStatut=(index)=>{
      let tmpState = {...this.state}
      tmpState.clients[index].statut = tmpState.clients[index].statut? false : true
      this.setState({...tmpState})
    }

    render() {
        return (
            <div>
                {this.state.clients.map((client,i) => <Clients key={i} client={client} cle={i} changeStatut={this.changeStatut}></Clients>)}
            </div>
        )
    }

}