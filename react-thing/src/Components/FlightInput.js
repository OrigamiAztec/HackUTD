import React from 'react'
class FlightInput extends React.Component {
    render () {
        return <div className='message-box'>
            <p id="mid_sect">Add past flights | Get new recommendations | Find new events 🎉</p>
            <form action="/post-feedback" method="post">
                <label htmlFor="departure_date">Flight Departure:</label>
                <input type="date" id="start" name="trip-start" value="2018-07-22" min="2016-01-01" max="2019-12-31"> </input>

                <label htmlFor="arrival_date">Flight Arrival:</label>
                <input type="date" id="end" name="trip-end" value="2018-07-22" min="2016-01-01" max="2019-12-31"> </input>

                <label htmlFor="airport_leave">Airport Departure:</label>
                <input type="text" id="air_depart" name="air_depart" value="LAX"> </input>

                <label htmlFor="airport_arrive">Airport Arrival:</label>
                <input type="text" id="air_arri" name="air_arri" value="DFW"> </input>

                <input type="submit" className="submit_button" value="Add more past flights"/>
                <input type="submit" className="submit_button" value="See flights, Get recommendations"/>
            </form>
        </div>
    }
}

export default FlightInput;