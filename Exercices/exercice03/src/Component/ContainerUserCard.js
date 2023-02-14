import { Component } from "react";
import { getInfoContactApi, postContact } from "../Services/data.services";
import { FormAjoutContact } from "./FormAjoutContact";
import { UserCard } from "./UserCard";


export class ContainerUserCard extends Component{
  constructor(props){
    super(props)
    this.state = {
      data : []
    }
  }

  async componentDidMount(){
    getInfoContactApi().then(res =>{
      this.setState({data:[...res.data]})
    })
  }

  changeStatus=(index)=>{
    const tmpState = {...this.state}
    tmpState.data[index].status = !tmpState.data[index].status
    this.setState({...tmpState})
  }

  AddContact=(contact)=>{
    const tmpState = {...this.state}
    let idContactAjout = {}
    postContact(contact).then(res =>{
      idContactAjout = {...res.data}
      contact.id = idContactAjout.id
      tmpState.data.push(contact)
      this.setState({...tmpState})
    })
  }

  render(){
    return(
      <div>
        {
          this.state.data.length === 0 ? <div>En chargement ...</div>
          :
          <div className="globalContainer">
            {this.state.data.map((e)=>(<UserCard key={e.id} contact={e} changeStatus={this.changeStatus}></UserCard>))}
            <FormAjoutContact AddContact={this.AddContact}></FormAjoutContact>
          </div>
          
        }
      </div>
    )
  }
}