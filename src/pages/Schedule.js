import React from "react";
import './Schedule.css';
export default function Schedule() {
    return (
        <div className="Schedule">
            <h1>Schedule</h1>
            <div className="ScheduleMain">
                <div className="QualifierInfo">
                    <p className="QualifierTitle"> Qualifier 1</p>
                    <a className="TournamentLink" href="http://www.start.gg"> See the Bracket</a>
                    <p className="GameInfo">Valorant: January 12 - 14</p>
                    <p className="GameInfo">Overwatch 2: January 19 - 21</p>
                    <p className="GameInfo">Rocket League: January 26-28</p>
                    <p className="GameInfo">Counter Strike 2: February 2-4</p>
                </div>
                <div className="QualifierInfo">
                    <p className="QualifierTitle"> Qualifier 2</p>
                    <a className="TournamentLink" href="http://www.start.gg"> See the Bracket</a>
                    <p className="GameInfo">Valorant: February 9 - 12</p>
                    <p className="GameInfo">Overwatch: 2 February 16 - 18</p>
                    <p className="GameInfo">Rocket League: February 23 - 26</p>
                    <p className="GameInfo">Counter Strike: 2 March 1 - 3</p>
                </div>
                <div className="QualifierInfo">
                    <p className="QualifierTitle"> Qualifier 3</p>
                    <a className="TournamentLink" href="http://www.start.gg"> See the Bracket</a>
                    <p className="GameInfo">Valorant: March 8 - 10</p>
                    <p className="GameInfo">Overwatch: 2 March 15 - 17</p>
                    <p className="GameInfo">Rocket League: March 22 - 24</p>
                    <p className="GameInfo">Counter Strike 2: March 29 - 31</p>
                </div>
                <div className="QualifierInfo">
                    <p className="QualifierTitle"> Qualifier 4</p>
                    <a className="TournamentLink" href="http://www.start.gg"> See the Bracket</a>
                    <p className="GameInfo">Valorant: April 5 - 7 </p>
                    <p className="GameInfo">Overwatch 2: April 12 - 14</p>
                    <p className="GameInfo">Rocket League: April 19 - 21</p>
                    <p className="GameInfo">Counter Strike 2: April 26 - 28</p>
                </div>
            </div>
            <div className="FinalsInfo">
                <h3> Finals:</h3>
                <p> TBA</p>
            </div>
        </div>
    ) 
}