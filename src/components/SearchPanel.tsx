import React from 'react';
import { ReactComponent as Logo } from '../assets/logo.svg';
import SearchIcon from './icons/SearchIcon';

export interface SearchPanelProps {
    search: Function,
}
 
export interface SearchPanelState {
    input: string
}
 
class SearchPanel extends React.Component<SearchPanelProps, SearchPanelState> {
    constructor(props: SearchPanelProps | Readonly<SearchPanelProps>) {
        super(props);
        this.state = { 
            input: ""  
        }
        this.setInput = this.setInput.bind(this);
    }

    private setInput(input: string) {
        this.setState({
            input: input
        });
    }

    render() { 
        return (
            <div className="fixed bg-white shadow-bottom w-screen p-4 pr-10 pl-10 flex flex-col md:flex-row justify-between">
                <div className="flex flex-col m-auto mt-4 mb-4 md:m-0 w-96 md:w-64">
                    <Logo className="m-auto" />
                </div>
                <div className="w-11/12 sm:w-10/12 md:w-1/2 lg:w-5/12 xl:w-1/3 m-auto mt-4 mb-4 md:m-0 flex">
                    <div className="font-body text-sm m-auto p-1 w-full flex flex-row border border-r-0 border-gray-light rounded-l-lg">
                        <span className="text-gray-light float-left p-0.5 pt-1 pr-0">
                            <SearchIcon />
                        </span>
                        <input className="pl-2 pr-2 w-full" type="text" placeholder="What do you want to research?" onChange={(event) => { this.setInput(event.target.value) }} />
                    </div>
                    <button className="text-base rounded-r-lg p-1 bg-blue text-white w-32 font-light" onClick={ () => this.props.search(this.state.input) }>Search</button>
                </div>
            </div>
        );
    }
}
 
export default SearchPanel;