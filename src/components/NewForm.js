import './NewForm.css'
import { useState } from 'react';


export default function NewForm({ setEvents }) {
    const [title, setTitle] = useState('');
    const [date, setDate] = useState('');

    const resetForm = () => {
        setDate('');
        setTitle('');
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const event = {
            title: title,
            date: date,
            id: Math.floor(Math.random() * 1000)

        }

        setEvents(event)
        resetForm()


    }


    return (<>
        <form className='new-event-form' onSubmit={handleSubmit}>
            <label>
                <span>Event Title:</span>
                <input type="text" onChange={(e) => setTitle(e.target.value)} value={title} />
            </label>
            <label>
                <span>Event Date:</span>
                <input type="date" onChange={(e) => setDate(e.target.value)} value={date} />
            </label>
            <button type='submit'>Submit</button>

        </form>
    </>

    )
}
