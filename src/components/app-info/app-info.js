import './app-info.css';

const AppInfo = ({ data }) => {
    return (
        <div className="app-info">
            <h1>Учёт сотрудников в компании "Океу"</h1>

            <h2>Общее число сотрудников: {data.length}</h2>
            <h2>Премиюю получат: {data.filter(item => item.increase).length} </h2>
        </div>
    );
};

export default AppInfo;