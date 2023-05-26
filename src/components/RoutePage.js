import styles from './RoutePage.css'
import { Link } from "react-router-dom";

function Route() {
  return (
    <div className='contentR'>
      <div>
        <button className="arrow"><a href="/">Назад</a></button>
      </div>
      <div className="title">
        Маршруты
      </div>
      <div className='table'>
        <table>
          <thead>
            <tr>
              <th>№</th>
              <th>Название</th>
              <th>Протяженность</th>
              <th>Противопоказания</th>
              <th>...</th>
              <th>Возраст участников</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>1</th>
              <th>Чандалаз</th>
              <th>------</th>
              <th>Проблемы с сердцем</th>
              <th>...</th>
              <th>17-50</th>
            </tr>
            <tr>
              <th>2</th>
              <th>Екатеринославка</th>
              <th>------</th>
              <th>Проблемы с сердцем</th>
              <th>...</th>
              <th>22-45</th>
            </tr>
            <tr>
              <th>...</th>
              <th>Воробей</th>
              <th>1500м</th>
              <th>-------</th>
              <th>...</th>
              <th>25-60</th>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="button-group">
        <button className="table-btn">Добавить</button>
        <button className="table-btn">Удалить</button>
        <button className="table-btn">Отправить</button>
      </div>
    </div>
  );
}

export default Route;