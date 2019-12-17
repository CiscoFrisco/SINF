import React from "react";
import listStyles from '../../styles/list.module.css';
import scrollStyles from '../../styles/scroll.module.css'
import WaveItem from '../Waves/WaveItem';
import classnames from 'classnames';
import Table from 'react-bootstrap/Table';

const WavesList = ({ waves }) => (
    <div className={classnames(scrollStyles.scroll, listStyles.scrollList60)}>
        <Table hover>
            <thead>
                <tr>
                    <td>ID</td>
                    <td>Type</td>
                    <td>Nº Items Remaining</td>
                </tr>
            </thead>
            <tbody>
                {waves.map(wave => (<WaveItem  key={wave} wave={wave} />))}
            </tbody>
        </Table>
    </div>
)

export default WavesList;

