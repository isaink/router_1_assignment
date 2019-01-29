// -------- full-fledged app to fulfill all of your dog-image-searching desires ------

import React, { Component } from "react";
import Image from './Image';
// import Breed from './Breed';

const axios = require("axios");

class Random extends Component {
    constructor(){
        super();
        this.state = {
            imgUrl: [],
        }
    };

    getRandomImage = () => {
        axios.get("https://dog.ceo/api/breeds/image/random")
          .then(resp => {
            this.setState({
                imgUrl: resp.data.message
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
        const { imgUrl} = this.state;
        if(!imgUrl){
            return <h1>Loading...</h1>
        }else{
            return (
                <>
                    <header> Ultimate Dog Image Fetcher </header>
                
                    <div>
                        <button onClick={this.getRandomImage}>  NEW DOG  </button>
                    </div>

                    <div className='imgContainer'>
                        <Image imgUrl={imgUrl} addNewFavorite={this.props.addNewFavorite} />    
                    </div>
                </>
            )
        }
    }
};
export default Random;