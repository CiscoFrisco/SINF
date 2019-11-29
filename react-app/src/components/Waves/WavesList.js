import React from "react";
import wavesListStyles from '../../styles/waves/waveslist.module.css';
import scrollStyles from '../../styles/scroll.module.css'
import WaveItem from '../Waves/WaveItem';
import classNames from 'classnames';

const WavesList = ({ waves }) => (
    <div className={classNames(wavesListStyles.container,scrollStyles.scroll)}>
        {waves.map(wave => (<WaveItem  key={wave} id={wave} />))}
    </div>
)

export default WavesList;

