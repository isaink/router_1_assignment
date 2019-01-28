// -------- full-fledged app to fulfill all of your dog-image-searching desires ------

import React from 'react';
// import Breed from './Breed';

const axios = require("axios");

class Random extends React.Component {
    constructor(){
        super();
        this.state = {
            dogImage: [],
        }
    };

    getRandomImage = () => {
        axios.get("https://dog.ceo/api/breeds/image/random")
          .then(response => {
            this.setState({
              dogImage: response.data.message
            });
          })
          .catch(err => {
            console.log(err, "Error fetching image");
          });
      };

    componentDidMount() {
        this.getRandomImage();     
    }

    render(){

        return (
            <>
                <header> Ultimate Dog Image Fetcher </header>
               
                <div>
                    <button onClick={this.getRandomImage}> {" "} one more!{" "} </button>
                    <button> </button>
                </div>
                {" "}
                <div className='imgContainer'>
                    <img alt=" " src={this.state.dogImage} />
                </div>
                
            </>
        )
    }
}
export default Random;