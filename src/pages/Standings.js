import React from "react";
import "./Standings.css";
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
                <div className="GameStandings">
                    <h3 className="GameTitle"> Valorant Pool 1</h3>
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
                            <p>5 PTS</p>
                        </div>
                        <div className="Cutoff"></div>
                        <div className="TeamInfo">
                            <p>#5</p>
                            <p>ACS Knights A</p>
                            <p>3 PTS</p>
                        </div>
                        <div className="TeamInfo">
                            <p>#6</p>
                            <p>LCS Lighting B</p>
                            <p>1 PTS</p>
                        </div>
                        <button type="button" className="Expand" onClick={expandStandings}>See full standings</button>
                        <div className="FullStandings">
                            <div className="TeamInfo">
                                <p>#7</p>
                                <p>LCS Lighting B</p>
                                <p>1 PTS</p>
                            </div>
                            <div className="TeamInfo">
                                <p>#8</p>
                                <p>LCS Lighting B</p>
                                <p>1 PTS</p>
                            </div>
                            <div className="TeamInfo">
                                <p>#9</p>
                                <p>LCS Lighting B</p>
                                <p>1 PTS</p>
                            </div>
                            <div className="TeamInfo">
                                <p>#10</p>
                                <p>LCS Lighting B</p>
                                <p>1 PTS</p>
                            </div>
                            <div className="TeamInfo">
                                <p>#11</p>
                                <p>LCS Lighting B</p>
                                <p>1 PTS</p>
                            </div>
                            <div className="TeamInfo">
                                <p>#12</p>
                                <p>LCS Lighting B</p>
                                <p>1 PTS</p>
                            </div>
                            <div className="TeamInfo">
                                <p>#13</p>
                                <p>LCS Lighting B</p>
                                <p>1 PTS</p>
                            </div>
                            <div className="TeamInfo">
                                <p>#14</p>
                                <p>LCS Lighting B</p>
                                <p>1 PTS</p>
                            </div>
                            <div className="TeamInfo">
                                <p>#15</p>
                                <p>LCS Lighting B</p>
                                <p>1 PTS</p>
                            </div>
                            <div className="TeamInfo">
                                <p>#16</p>
                                <p>LCS Lighting B</p>
                                <p>1 PTS</p>
                            </div>
                    </div>

                </div>
                
                <div className="GameStandings">
                    <h3 className="GameTitle"> Valorant Pool 2</h3>
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
                        <p>5 PTS</p>
                    </div>
                    <div className="Cutoff"></div>
                    <div className="TeamInfo">
                        <p>#5</p>
                        <p>ACS Knights A</p>
                        <p>3 PTS</p>
                    </div>
                    <div className="TeamInfo">
                        <p>#6</p>
                        <p>LCS Lighting B</p>
                        <p>1 PTS</p>
                    </div>
                    <button type="button" className="Expand" onClick={expandStandings}>See full standings</button>
                    <div className="FullStandings">
                        <div className="TeamInfo">
                            <p>#7</p>
                            <p>LCS Lighting B</p>
                            <p>1 PTS</p>
                        </div>
                        <div className="TeamInfo">
                            <p>#8</p>
                            <p>LCS Lighting B</p>
                            <p>1 PTS</p>
                        </div>
                        <div className="TeamInfo">
                            <p>#9</p>
                            <p>LCS Lighting B</p>
                            <p>1 PTS</p>
                        </div>
                        <div className="TeamInfo">
                            <p>#10</p>
                            <p>LCS Lighting B</p>
                            <p>1 PTS</p>
                        </div>
                        <div className="TeamInfo">
                            <p>#11</p>
                            <p>LCS Lighting B</p>
                            <p>1 PTS</p>
                        </div>
                        <div className="TeamInfo">
                            <p>#12</p>
                            <p>LCS Lighting B</p>
                            <p>1 PTS</p>
                        </div>
                        <div className="TeamInfo">
                            <p>#13</p>
                            <p>LCS Lighting B</p>
                            <p>1 PTS</p>
                        </div>
                        <div className="TeamInfo">
                            <p>#14</p>
                            <p>LCS Lighting B</p>
                            <p>1 PTS</p>
                        </div>
                        <div className="TeamInfo">
                            <p>#15</p>
                            <p>LCS Lighting B</p>
                            <p>1 PTS</p>
                        </div>
                        <div className="TeamInfo">
                            <p>#16</p>
                            <p>LCS Lighting B</p>
                            <p>1 PTS</p>
                        </div>
                    </div>
                </div>
                <div className="GameStandings">
                    <h3 className="GameTitle"> Valorant Pool 3</h3>
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
                        <p>5 PTS</p>
                    </div>
                    <div className="Cutoff"></div>
                    <div className="TeamInfo">
                        <p>#5</p>
                        <p>ACS Knights A</p>
                        <p>3 PTS</p>
                    </div>
                    <div className="TeamInfo">
                        <p>#6</p>
                        <p>LCS Lighting B</p>
                        <p>1 PTS</p>
                    </div>
                    <button type="button" className="Expand" onClick={expandStandings}>See full standings</button>
                    <div className="FullStandings">
                        <div className="TeamInfo">
                            <p>#7</p>
                            <p>LCS Lighting B</p>
                            <p>1 PTS</p>
                        </div>
                        <div className="TeamInfo">
                            <p>#8</p>
                            <p>LCS Lighting B</p>
                            <p>1 PTS</p>
                        </div>
                        <div className="TeamInfo">
                            <p>#9</p>
                            <p>LCS Lighting B</p>
                            <p>1 PTS</p>
                        </div>
                        <div className="TeamInfo">
                            <p>#10</p>
                            <p>LCS Lighting B</p>
                            <p>1 PTS</p>
                        </div>
                        <div className="TeamInfo">
                            <p>#11</p>
                            <p>LCS Lighting B</p>
                            <p>1 PTS</p>
                        </div>
                        <div className="TeamInfo">
                            <p>#12</p>
                            <p>LCS Lighting B</p>
                            <p>1 PTS</p>
                        </div>
                        <div className="TeamInfo">
                            <p>#13</p>
                            <p>LCS Lighting B</p>
                            <p>1 PTS</p>
                        </div>
                        <div className="TeamInfo">
                            <p>#14</p>
                            <p>LCS Lighting B</p>
                            <p>1 PTS</p>
                        </div>
                        <div className="TeamInfo">
                            <p>#15</p>
                            <p>LCS Lighting B</p>
                            <p>1 PTS</p>
                        </div>
                        <div className="TeamInfo">
                            <p>#16</p>
                            <p>LCS Lighting B</p>
                            <p>1 PTS</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    ) 
}