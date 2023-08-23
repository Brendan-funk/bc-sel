import React from "react";
import "./Standings.css";
export default function Standings() {
    return (
        <div className="Standings">
            <h1> Standings</h1>
            <div className="GameStandings">
                <h3 className="GameTitle"> Valorant </h3>
                    <div className="TeamInfo">
                        <p>#1</p>
                        <p>Mei Eagles A</p>
                        <p>13 PTS</p>
                    </div>
                    <div className="TeamInfo">
                        <p>#2</p>
                        <p>Mei Eagles B</p>
                        <p>12 PTS</p>
                    </div>
                    <div className="TeamInfo">
                        <p>#3</p>
                        <p>LCS Lighting A</p>
                        <p>10 PTS</p>
                    </div>
                    <div className="TeamInfo">
                        <p>#4</p>
                        <p>ACS Knights B</p>
                        <p>13 PTS</p>
                    </div>
            </div>
        </div>
    ) 
}