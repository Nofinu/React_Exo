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

  changeStatus=(index)=>{
    const tmpState = {...this.state}
    tmpState.data[index].status = !tmpState.data[index].status
    this.setState({...tmpState})
  }

  render(){
    console.log(this.state.data)
    return(
      <div>
        {
          this.state.data.length === 0 ? <div>En chargement ...</div>
          :
          <div className="globalContainer">
            {this.state.data.map((e)=>(<UserCard key={e.id} contact={e} changeStatus={this.changeStatus}></UserCard>))}
          </div>
          
        }
      </div>
    )
  }
}