import React, {Component} from 'react';
import { Icon, Input, AutoComplete } from "antd";
import nba from '../nba-client';
import { PROFILE_PIC_URL_PREFIX } from '../constants';

const { Option } = AutoComplete;

class SearchBar extends Component {
    state = {
        dataSource: [],
    }

    handleSearch = value => {
        const players = nba.searchPlayers(value);
        this.setState({
            dataSource: !value ?
                [] : nba.searchPlayers(value).map(player => ({
                    fullName: player.fullName,
                    playerId: player.playerId,
                }))
        });

    }

    render() {
        const {dataSource} = this.state;
        const options = dataSource.map(player => (
            <Option key={player.fullName} value={player.fullName} className="player-option">
                <img className="player-option-image" src={`${PROFILE_PIC_URL_PREFIX}/${player.playerId}.png`}/>
                <span className="player-option-label">{player.fullName}</span>
            </Option>
        ));

        return (
            <div>
                <AutoComplete
                    className="search-bar"
                    size="large"
                    placeholder="Search NBA Player"
                    optionLabelProp="value"
                    onSearch={this.handleSearch}
                    dataSource={options}
                >
                    <Input suffix={ <Icon type="search" className="certain-category-icon"/>}/>
                </AutoComplete>
            </div>
        );
    }
}

export default SearchBar;