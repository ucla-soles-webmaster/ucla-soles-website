import React, {Component} from 'react'
import FullCalendar, { formatDate } from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import listPlugin from '@fullcalendar/list'
import googleCalendarPlugin from '@fullcalendar/google-calendar'
import './calStyle.css'

let title = " ";
let date = " ";

class Calendar extends Component {
  state = {
    weekendsVisible: true,
    currentEvents: []
  }
  render() {
    return (
      <div className='demo-app'>
        <div className='demo-app-main'>
          <FullCalendar
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin, listPlugin, googleCalendarPlugin]}
            googleCalendarApiKey='AIzaSyAU6gudK-t-mLH21EEfZVJe7cmvBQyhiwY'
            events= {{
              googleCalendarId: 'estrada.diana120@gmail.com'
            }}
            headerToolbar={{
              left: 'prev,next today',
              center: 'title',
              right: 'dayGridMonth,timeGridWeek,listYear'
            }}
            weekends={this.state.weekendsVisible}
            displayEventTime={false}
            initialView='dayGridMonth'
            eventClick={this.handleEventClick}
          />

        </div>
      </div>
      
    )
  }


  handleEventClick = (clickInfo) => {
    clickInfo.jsEvent.preventDefault();   //doesn't take you to google calendar
    title = clickInfo.event.title;
    date = clickInfo.event.start;

  }

  handleEvents = (events) => {
    this.setState({
      currentEvents: events
    });
  }
  
  eventInfo = (clickInfo) =>
  {
    return(
      <div className="eventBox">
        <p>click on an event to learn more</p>
        <p>{clickInfo.event.title}</p>
      </div>
    );

  }
}



export default Calendar;