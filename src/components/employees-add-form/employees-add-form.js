import './emploees-add-form.css';

const EmployeesAddForm = () => {
    return (
        <div className="app-add-form">
            <h3>Добавьте нового сотрудника</h3>
            <form className="add-form d-flex">
                <input type="text" 
                className="form-comtrol new-post-label"
                placeholder="Как зовут?"/>
                <input type="number" 
                placeholder="З/П в $"/>

                <button type="submit" 
                className="btn btn-outline-light">Добавить</button>
            </form>
        </div>
    );
};

export default EmployeesAddForm;