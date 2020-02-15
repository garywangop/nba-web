import React, {Component} from 'react';
import { Icon, Input, AutoComplete } from "antd"

class SearchBar extends Component {
    render() {
        return (
            <div>
                <AutoComplete
                    className="search-bar"
                    size="large"
                    placeholder="Search NBA Player"
                    optionLabelProp="value"
                >
                    <Input suffix={ <Icon type="search" className="certain-category-icon"/>}/>
                </AutoComplete>
            </div>
        );
    }
}

export default SearchBar;