import ReactDOM from 'react-dom'
import './Modal.css'

export default function Modal({ showModal, children }) {
    return ReactDOM.createPortal((

        <div className='modal-backdrop'>
            <div className="modal">
                {children}
                <button onClick={showModal}>Close</button>
            </div>
        </div>
    ), document.body)
}
