import { useState } from 'react';
import { Calendar } from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css'; // CSS for react-big-calendar

import { addHours } from 'date-fns'

import { Navbar, CalendarEvent, CalendarModal } from '../'

import { localizer, getMessagesES } from '../../helpers';


const events = [{
    title: 'Cumpleaños del jefe',
    notes: 'Hay que comprar torta',
    start: new Date(),
    end: addHours(new Date(), 2),
    bgColor: '#fafafa',
    user: {
        _id: '123',
        name: 'Luciano'
    }
}]

export const CalendarPage = () => {
    const [lastView, setLastView] = useState(localStorage.getItem('lastView' || 'week'))

    const eventStyleGetter = (event, start, end, isSelected) => {
        const style = {
            backgroundColor: '#347CF7',
            borderRadius: '0px',
            opacity: 0.8,
            color: 'white'
        }

        return {
            style
        }
    }

    const onDoubleClick = ( event ) => {

    }

    const onSelect = ( event ) => {

    }

    const onViewChange = ( event ) => {
        localStorage.setItem('lastView', event)
    }

    return (
        <>
            <Navbar/>

            <Calendar
                culture='es'
                localizer={localizer}
                events={events}
                defaultView={'agenda'}
                startAccessor="start"
                endAccessor="end"
                style={{ height: 'calc(100vh - 80px)' }}
                messages={getMessagesES()}
                eventPropGetter={ eventStyleGetter }
                components={{
                    event: CalendarEvent
                }}
                onDoubleClickEvent={ onDoubleClick }
                onSelectEvent={ onSelect }
                onView={ onViewChange }
            />

            <CalendarModal/>
        </>
    )
}
