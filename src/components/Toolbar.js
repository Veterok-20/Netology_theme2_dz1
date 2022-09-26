// import { Button } from '@mui/material';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Toolbar extends Component {
        constructor(props) {
                super(props);
        }

        render() {
                // console.log("Toolbar:", this.props.selected);     
                return (
                        <>
                                <button name="All" className={(this.props.selected === "All") ? "selectedFilter" : "unselectedFilter"}
                                        onClick={(evt) => this.props.onSelectFilter(evt)}>All</button>
                                <button name="Websites" className={(this.props.selected === "Websites") ? "selectedFilter" : "unselectedFilter"}
                                        onClick={this.props.onSelectFilter}>Websites</button>
                                <button name="Flayers" className={(this.props.selected === "Flayers") ? "selectedFilter" : "unselectedFilter"}
                                        onClick={this.props.onSelectFilter}>Flayers</button>
                                <button name="Business Cards" className={(this.props.selected === "Business Cards") ? "selectedFilter" : "unselectedFilter"}
                                        onClick={this.props.onSelectFilter}>Business Cards</button>
                        </>
                )
        }
}
Toolbar.propTypes = {
        selected: PropTypes.string,
};

