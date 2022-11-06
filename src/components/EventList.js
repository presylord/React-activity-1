import styles from './Eventlist.module.css'
const EventList = ({ events, handleClick }) => {
    console.log(events)
    return events.map((a, index) => {

        return (
            <div className={styles.card} key={a.id}>
                <h2 >{index + 1} - {a.title}</h2>
                <p >{a.date}</p>
                <button onClick={() => handleClick(a.id)}>Delete</button>
            </div>


        );
    })
}

export default EventList;