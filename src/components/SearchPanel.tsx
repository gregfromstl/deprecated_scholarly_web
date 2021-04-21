import React from 'react';

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
            <div className="text-lg font-light mt-6 flex flex-col">
                <div className="border border-gray-light rounded-xl w-full">
                    <input className="rounded-xl p-1 pl-2 pr-2 w-full" type="text" placeholder="Find a paper" onChange={(event) => { this.setInput(event.target.value) }} />
                </div>
                <button className="rounded-3xl p-1 bg-blue text-white w-1/2 m-auto mt-8" onClick={ () => this.props.search(this.state.input) }>Search</button>
            </div>
        );
    }
}
 
export default SearchPanel;