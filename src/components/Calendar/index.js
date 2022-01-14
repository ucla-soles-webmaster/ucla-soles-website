import React from 'react';
import FullCalendar, { formatDate } from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import listPlugin from '@fullcalendar/list'
import googleCalendarPlugin from '@fullcalendar/google-calendar'


class Calendar extends React.Component{
    state={
        weekendsVisible: true,
        currentEvents:[]
    }
    render(){
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
                  displayEventTime={false}
                  initialView='dayGridMonth'
                  //initialEvents={INITIAL_EVENTS} // alternatively, use the `events` setting to fetch from a feed
                  //eventClick={this.handleEventClick}
                  //eventsSet={this.handleEvents} // called after events are initialized/added/changed/removed
                  /* you can update a remote database when these fire:
                  eventAdd={function(){}}
                  eventChange={function(){}}
                  eventRemove={function(){}}
      
                          <div className="evB">
                <p>click on event to view details</p>
      
              </div>
                  */
                />
              </div>      
            </div>
            
          )
    }
    /*
    handleEventClick = (clickInfo) => {
        console.log("hi");
        clickInfo.jsEvent.preventDefault();
    }*/
}
export default Calendar;