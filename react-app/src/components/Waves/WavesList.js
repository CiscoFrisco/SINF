import React from "react";
import wavesListStyles from '../../styles/waves/waveslist.module.css';
import scrollStyles from '../../styles/scroll.module.css'
import WaveItem from '../Waves/WaveItem';
import classNames from 'classnames';
import Table from 'react-bootstrap/Table';

const WavesList = ({ waves }) => (
    <Table hover>
        <thead>
            <td>ID</td>
            <td>Type</td>
            <td>Nº Items Remaining</td>
        </thead>
        <tbody>
            {waves.map(wave => (<WaveItem  key={wave} wave={wave} />))}
        </tbody>
    </Table>
)

export default WavesList;

