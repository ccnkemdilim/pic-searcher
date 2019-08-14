import React from 'react';

class SearchBar extends React.Component {

    state = {term: ''};

    onFormSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit(this.state.term);
    };

    render(){
        return (
            <div className={'ui segment'}>
                <form className={'ui form'} onSubmit={this.onFormSubmit}>
                    <div className={'field'}>
                        <label htmlFor={'search'}>Image Search</label>
                        <div className="ui icon input">
                            <input
                                id={'search'}
                                type={'text'}
                                placeholder={'Search...'}
                                value={this.state.term}
                                onChange={(e) => this.setState({term: e.target.value})}
                            />
                            <i className="inverted circular search link icon" onClick={this.onFormSubmit}></i>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar
