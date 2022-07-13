import React from 'react'
import './TeamInfo.css'


class TeamInfo extends React.Component {
    render() {
        return (
            <li>
                <div class="head">
                    <img src={this.props.image}></img>
                    <h3>{this.props.shortName}</h3>
                </div>
                <div class="info">
                    <h4>{this.props.address}</h4>
                    <h4>{this.props.email}</h4>
                    <h4>{this.props.phone}</h4>
                    <h4>{this.props.foundation}</h4>
                </div>
            </li>
        )
    }
}

export default TeamInfo