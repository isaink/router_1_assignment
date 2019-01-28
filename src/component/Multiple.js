import React from 'react'
import axios from 'axios';

export default class Multiple extends React.Component {
    constructor(){
        super();
        this.state = {
            multidog : []
        }
    }

    getMultipleDogs = (img) => {
        axios.get(`https://dog.ceo/api/breeds/image/random/${img}`)
        .then( res => {
            this.setState({
                multidog: res.data.message
              });
        })
    }
    componentDidMount(){
        this.getMultipleDogs(this.props.match.params.id);
    }
    render(){

        const dogs = this.state.multidog.map((url, i )=> {
            return <img alt='' src={url} key={i} /> 
        })

        return(
            <>
                <h1> Multiples Dogs</h1>
                {dogs}
            </>
        )
    }
}