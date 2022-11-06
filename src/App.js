import './App.css';
import { useState } from 'react';
import Title from './components/Title';
import Modal from './components/Modal';
import EventList from './components/EventList';
import NewForm from './components/NewForm';

function App() {
  const [showModal, setshowModal] = useState(false);
  const [showEvents, setshowEvents] = useState(true);
  const [events, setEvents] = useState([]);


  const handleClose = () => {
    setshowModal(showModal === true ? false : true)
  }
  const addData = (newEvents) => {
    setEvents((prevEvents) => {
      return [...prevEvents, newEvents]
    })
    handleClose()
  }


  const handleClick = (key) => {
    setEvents((prevEvents) => {
      return prevEvents.filter((a) => {
        return key !== a.id;
      })
    })
  }


  return (
    <div className="App">
      <Title title="Events in the area" subtitle="events..." />

      {
        !showEvents && (<div>
          <button onClick={() => {
            return setshowEvents(true)
          }}>Show Events</button>
        </div>)
      }

      {
        showEvents && (<div>
          <button onClick={() => {
            return setshowEvents(false)
          }}>Hide Events</button>
          <br />
          <EventList events={events} handleClick={handleClick} />
        </div>)
      }

      <div>
        <button onClick={handleClose}>Add New Event</button>
      </div>
      {showModal && (<div>
        <Modal showModal={handleClose}>
          {setshowModal && <NewForm setEvents={addData} />}
        </Modal>
      </div>)}


    </div >
  );
}

export default App;
