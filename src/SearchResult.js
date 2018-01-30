import React, { Component } from 'react'; 



class SearchResult extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            isLoading: true,
            searchFinds: []
        };
    }
    
    

    componentWillReceiveProps(nextProps) {
        
        if (nextProps) {
            // Do your fetch call here and pull off the necessary
            // items from `nextProps` rather than `this.props`
            this.fetchData();
            }
        
        
    }

    componentDidMount() {
      //  this.fetchData();
       
    }
    componentWillMount() {
        
    }
    componentWillUpdate(nextProp, nextState){ 

    }
 


    fetchData() {

        const fetchURL = 'https://api.github.com/users/' + this.props.memberId;


        this.setState({
            isLoading: true,
            searchFinds: []
        })

        fetch({fetchURL})
            .then(response => response.json())
            .then(response => response.map(item => (
                {
                    id: `${item.id}`,
                    login: `${item.login}`,
                    url: `${item.url}`,
                    type: `${item.type}`,
                    location: `${item.location}` 

                }

            )))
            .then(searchFinds => this.setState({
                searchFinds,
                isLoading: false 
            }))
            .catch(error => console.log('Hello Mr Casey!!! Parsing json data from github failed', error))

    }

    

    render() {
        // destructuring props
        //const {prop1, prop2, ..., children} = thi.props;
        const { isLoading, searchFinds } = this.state;


        return (
            <React.Fragment>
                
                <p>
                    befor the data --------------------
                </p>
                {
                    !isLoading && searchFinds.length > 0 ? searchFinds.map(searchFind => {
                        //destructre searchFinds 
                        const {id, login, url, type, location  } = searchFinds; 
                        return <p key={id} >
                                    login: {login} <br/>
                                    url: {url} <br />
                                    type: {type} <br />
                                    location: {location}
                               </p>
                    }) : null
                }
                <p>
                    after the data ----------------------------
                </p>
                <div>{JSON.stringify(this.state)}</div>
                
                

            </React.Fragment>
            
        );
    }
}

export default SearchResult;
