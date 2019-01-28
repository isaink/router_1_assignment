import React from 'react';
import Axios from 'axios';

export default class Breed extends React.Component {
    constructor(){
        super();
        this.state = {
            dogBreed: '',
            url:  [],
            imgs: [],

        }
    };

    getBreeds = () => {
        Axios.get('https://dog.ceo/api/breeds/list/all').then( res => {
            this.setState({
                imgs:  Object.keys(res.data.message),
            })
        }).catch(err => {
            console.log(err, "Error fetching Breed");
          });
    };
    
    showBreed = (id) => {
        Axios.get(`https://dog.ceo/api/breed/${this.state.dogBreed}/images/random`).then( res => {
            this.setState({
                url: res.data.message ,
            })
        }).catch(err => {
            console.log(err, "Error fetching image");
        })
    };
    handleChange = (e) => {
        this.setState({
            dogBreed: e.target.value,
        })
    };
    componentDidMount(){
        this.getBreeds();
    }

    render(){
        return (
            <>  
                <header> 
                    <h3>Random dog's breed</h3>
                </header>

                <select onChange={this.handleChange} placeholder="Breed's Dogs" >
                    {this.state.imgs.map( (img, i ) => {
                        return <option key={i} value={img}>{img} </option>
                    })}
                </select>
                <button onClick={this.showBreed}>Get dogs </button>
                <img alt='' src={this.state.url} />
        
            </>
        )
    }
}