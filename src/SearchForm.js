import React, { Component } from 'react';  
import SearchResult from './SearchResult';

class SearchForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
          memberId: '',
          memberIdError: '',
          goToSearchResult: false
        };
    }
    change = (e) =>{
        this.setState({
          [e.target.name]: e.target.value,
          [e.target.name+"Error"]: '',
        }); 
    }
    validate = () =>{
        let isError = false;
        const errors = { 
          memberIdError: '' 
        };
        if (this.state.memberId === ""){
          isError = true;
          errors.memberIdError = 'Member Id is Required'
        }
          
        this.setState(errors);
       
        return isError;
    
      }

    onSubmit = (e) =>{
        e.preventDefault();
        const err = this.validate();
        if (!err){
            console.log("submit was clicked and we got this data: "+this.state.memberId); 
            this.setState({
                goToSearchResult: true
            })
        }
      }
 

    render() {


        return (
            <React.Fragment> 
                <form action="#" className="form-search" id="form-search" name="searchForm">
                   
                   
                   <input
                        name="memberId"
                        required 
                        id="memberId" 
                        onChange={e => this.change(e)}
                        placeholder="github ID"
                        value={this.state.memberID} /> 
                    
                   <span className="errorMessages">{this.state.memberIdError}</span>
                    
                 
                    <button type="button" className="button-next btn" onClick={(e)=> this.onSubmit(e) } >Submit</button>
                </form>

                <p>If the form is submitted with data render the SearchResult component and pass the userId to it as a prop</p>

                <hr />

                {
                    this.state.memberId !== "" && this.state.goToSearchResult ? <SearchResult memberId={this.state.memberId}  /> : null
                }


 
                </React.Fragment>
        );
    }
}

export default SearchForm;
