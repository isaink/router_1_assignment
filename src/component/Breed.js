import React from 'react';
import Axios from 'axios';
import Image from "./Image";

export default class Breed extends React.Component {
    constructor(){
        super();
        this.state = {
            selectedBreed: '', 
            imgUrl:  [], 
            allBreeds: [], 
        }
    };

    getAllBreeds = () => {
        Axios.get('https://dog.ceo/api/breeds/list/all').then( res => {
            this.setState({
                allBreeds:  Object.keys(res.data.message), //extract all the keys for the obj
            })
        }).catch(err => {
            console.log(err, "Error fetching Breed");
          });
    };
    
    showBreed = () => {
        const { selectedBreed } = this.state;
        Axios.get(`https://dog.ceo/api/breed/${selectedBreed}/images/random`).then( res => {
            this.setState({
                imgUrl: res.data.message ,
            })
        }).catch(err => {
            console.log(err, "Error fetching image");
        })
    };

    handleSelect = e => {
        this.setState({
          [e.target.name]: e.target.value
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.showBreed();

    };

    componentDidMount(){
        this.getAllBreeds();
    };

    render(){

        const { imgUrl, allBreeds, selectedBreed } = this.state;

        let breedOptions = allBreeds.map((breed, i) => {
                return (
                  <option key={i + 1} value={breed}>
                    {breed}
                  </option>
                )
        });
    
          return (
            <React.Fragment>
              <form onSubmit={this.handleSubmit}>
                <select
                  name="selectedBreed"
                  onChange={this.handleSelect}
                  value={selectedBreed}
                >
                  <option key="0" value="" />
                  {breedOptions}
                </select>
                <input
                  type="submit"
                  value="Fetch!"
                  disabled={selectedBreed ? false : true}
                />
              </form>
    
              {imgUrl ? <Image imgUrl={imgUrl} /> : null}
            </React.Fragment>
          );
        }
    }
