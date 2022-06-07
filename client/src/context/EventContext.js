import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
import { eventURL } from './../config/Config';

const EventContext = createContext();

const EventContextProvider = (props) => {
    const [events, setevents] = useState([]);
    const [loading, setLoading] = useState(true);

    async function getevents() {
        setLoading(true);
        await axios.get(eventURL).then((res) => {
            setevents(res.data);
            setLoading(false);
        });
    }

    useEffect(() => {
        getevents();
    }, []);

    const addEvent = (event) => {
       setevents([event,...events]);
       // console.log(event);
    };
    const deleteEvent = (id) => {
        setevents(events.filter((event) => event._id !== id));
    };
    const updateEvent = (event) => {
        setevents(events.map((e) => (e._id === event._id ? event : e)));
    };



  return (
    <EventContext.Provider value={{events,addEvent,deleteEvent,updateEvent}}>
      {props.children}
    </EventContext.Provider>
  );
};

export default EventContext;
export { EventContextProvider };