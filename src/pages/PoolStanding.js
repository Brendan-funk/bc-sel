import React from 'react';
import './PoolStanding.css';
export default function PoolStandings (props) {
    function formatData (data) {
        return (
            <div className='TeamInfo'> 
                <p className='Place'>{data.place}</p>
                <p className='TeamName'>{data.teamName}</p>
                <p className= 'Points'>{data.points}</p>
            </div>
        )
    }
    let dataArr = [];
    for (let team of props.teams) {
        dataArr.push(formatData(team));
        console.log(dataArr);
    }
    return (
        <div className='PoolStandings'>
            {dataArr}
        </div>
    )
}