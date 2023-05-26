import photo from '../photo.png'
import styles from './MainPage.css'
import { Link } from "react-router-dom";

function App() {
    return (
        <div className='App'>
            <div className="contentM">
                <div className='item'>
                    <img src={photo} className='photo' />
                    <div className='info'>F: xxxxxxxxxxx</div>
                    <div className='info'>I: xxxxxxx</div>
                    <div className='info'>O: xxxxxxxxxxxxx</div>
                    <div className='info'>Phone: x (xxx) xxx-xx-xx</div>
                    <div className='info'>INFO:</div>
                    <div className='info'>INFO:</div>
                    <div className='info'>INFO:</div>
                </div>
                <div className='options'>
                    <button className='opt-btn'><a href="/line">Записи</a></button>
                    <button className="opt-btn"><a href="/route">Маршруты</a></button>
                    <button className='opt-btn'><a href="/client">Клиенты</a></button>
                    <button className='opt-btn'><a href="/group">Группы</a></button>
                </div>
            </div>
        </div>
    );
}

export default App;