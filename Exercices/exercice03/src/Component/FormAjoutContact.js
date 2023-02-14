import { Component } from "react";

export class FormAjoutContact extends Component{
  constructor(props){
    super(props)
    this.state = {
      contact:{
        firstName:"",
        lastName:"",
        phone:"",
        status: true,
        address:{
          street:"",
          postCode:"",
          city:""
        }
      }
    }
  }

  onSubmitForm=(e)=>{
    e.preventDefault()
    const tmpContact = {...this.state.contact}
    this.props.AddContact(tmpContact)
    // this.setState({contact:{firstName:"",lastName:"",phone:"",status: true,address:{street:"",postCode:"",city:""}}})
    e.target.reset()
  }

  onChangeInputForm=(e)=>{
    const tmpContact = {...this.state.contact}
    if(e.target.dataset.input === "info"){
      tmpContact[e.target.getAttribute("name")]=e.target.value
      this.setState({contact:{...tmpContact}})
    }
    else{
      tmpContact.address[e.target.getAttribute("name")]=e.target.value
      this.setState({contact:{...tmpContact}})
    }
  }
  render(){

    return(
      <form onSubmit={this.onSubmitForm}>
        <h3>ajout d'un nouveau Contact</h3>
        <input onChange={this.onChangeInputForm} type={"text"} data-input="info" name="firstName" placeholder="firstName" required />
        <input onChange={this.onChangeInputForm} type={"text"} data-input="info" name="lastName" placeholder="lastName" required />
        <input onChange={this.onChangeInputForm} type={"text"} data-input="info" name="phone" placeholder="phone Number" required />
        <input onChange={this.onChangeInputForm} type={"text"} data-input="Address" name="street" placeholder="street" required />
        <input onChange={this.onChangeInputForm} type={"text"} data-input="Address" name="postCode"  placeholder="postCode" required />
        <input onChange={this.onChangeInputForm} type={"text"} data-input="Address" name="city" placeholder="city" required />
        <button>Ajouter</button>
      </form>
    )
  }
}