import React from 'react';

export interface SearchPanelProps {
    search: Function,
}
 
const SearchPanel: React.SFC<SearchPanelProps> = () => {
    return (
        <div>
            Search
        </div>
    );
}
 
export default SearchPanel;