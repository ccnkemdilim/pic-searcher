import React from 'react';
import unsplash from '../api/unsplash'; //import unsplash
import SearchBar from './SearchBar';
import './App.css';
import ImageList from './ImageList';

class App extends React.Component {
    state = {images: []};

    onSearchSubmit = async (term) => {
        try {
            //use unsplash in the App component
            const results = await unsplash(term);
            //Set state with the results obtained from the API call
            this.setState({
                status: "done",
                images: results.images,
                term: results.term
            });
        } catch (error) {
            this.setState({
                status: "error"
            });
        }
    };

    render (){
        const searchBarCheck = () =>{
            //checks if a search term was entered
            if (this.state.term === undefined || this.state.term === ""){
                //returns a text prompting user to enter a search term
                return <p className="info ui red basic label">Enter a search term above</p>
            }
            //returns some text with the number of images found
            return <p className="info ui blue basic label">Found: {this.state.images.length} images of {this.state.term}.</p>
        };
        return (
            <div className={'ui container'} style={{marginTop: '10px'}}>
                <SearchBar onSubmit={this.onSearchSubmit}/>
                {searchBarCheck()}
                <ImageList images={this.state.images}/>
            </div>
        )
    }
}
export default App
