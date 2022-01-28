import React, {Component} from 'react'
import FullCalendar, { formatDate } from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import listPlugin from '@fullcalendar/list'
import googleCalendarPlugin from '@fullcalendar/google-calendar'
import { useEffect } from 'preact/hooks'
//import Navigation from '../../components/Navigation';

//<Navigation transparentNav={false} />
import './calStyle.css'

let title = " ";
let date = " ";

class DemoApp extends Component {
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
            //eventsSet={this.handleEvents}
            //eventContent={renderEventContent}
            initialView='dayGridMonth'
            //eventContent={renderEventContent} // custom render function
            eventClick={this.handleEventClick}
          />

        </div>
      </div>
      
    )
  }


  handleEventClick = (clickInfo) => {
    //console.log(clickInfo.event.title);
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
/*
    //renderEventContent(clickInfo);
function renderEventBox(event){
  return(
      <li key={event.id}>
        <b>
          {formatDate(event.start, {
            year: "numeric",
            month: "short",
            day: "numeric"
          })}
        </b>
        <i>{event.title}</i>
      </li>
  );
}

function renderEventContent(eventInfo) {
  return (
    <>
      <b>{eventInfo.timeText}</b>
      <i>{eventInfo.event.title}</i>
    </>
  );
}
*/

export default DemoApp;