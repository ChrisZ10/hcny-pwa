import React from 'react';

import * as sermonStyles from '../styles/modules/sermon.module.scss';

const Sermon = () => {
    return (
        <div className = { sermonStyles.container }>
            <div className = { sermonStyles.leftColumn }>Left Column</div>
            <div className = { sermonStyles.rightColumn }>Right Column</div>
        </div>
    );
}

export default Sermon;