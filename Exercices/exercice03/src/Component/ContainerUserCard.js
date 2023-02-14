import { Component } from "react";
import { getInfoContactApi } from "../Services/data.services";
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

  render(){
    console.log(this.state.data)
    return(
      <div>
        {
          this.state.data.length === 0 ? <div>En chargement ...</div>
          :
          <>
            {this.state.data.map((e)=>(<UserCard key={e.id} contact={e}></UserCard>))}
          </>
          
        }
      </div>
    )
  }
}