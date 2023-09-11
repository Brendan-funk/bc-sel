import React from "react";
import "./Standings.css";
import PoolStandings from "./PoolStanding";
import ValorantPool1 from "./StandingsData/ValorantPool1";
export default function Standings() {
    let expandStandings = function(e) {
        let content = e.target.nextElementSibling;
        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    }
    return (
        <div className="Standings">
            <h1> Standings</h1>
            <div className="StandingsMain">
                <div className="Pool">
                    <h3> Valorant Pool 1</h3>
                    <PoolStandings teams = {ValorantPool1}/>
                </div>
                <div className="Pool">
                    <h3>Valorant Pool 2</h3>
                    <PoolStandings teams = {ValorantPool1}/>
                </div>
            </div>
        </div>
    ) 
}