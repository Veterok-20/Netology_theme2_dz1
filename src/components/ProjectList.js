import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ProjectList extends Component {    
    render() {                
        let projectsToUser = this.props.projects.map(item => item.img)
            .map((item, index) => <img className='itemProject' src={item} key={index} />)
        return (
            <>
                {projectsToUser}
            </>
        )
    }
}

ProjectList.propTypes = {
    projects: PropTypes.array
  };
