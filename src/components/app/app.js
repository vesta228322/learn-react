import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                { name: 'Мишаня', salary: 800, increase: false, like: true, id: 1 },
                { name: 'Дашуля', salary: 3000, increase: true, like: false, id: 2 },
                { name: 'Надюха', salary: 5000, increase: false, like: false, id: 3 }
            ],
            term: ''
        }
        this.maxId = 4;
    }

    deleteItem = (id) => {
        this.setState(({ data }) => {
            return {
                data: data.filter(item => item.id !== id)
            }
        });
    }

    addItem = (name, salary) => {
        const newItem = {
            name,
            salary,
            increase: false,
            like: false,
            id: this.maxId++
        }
        this.setState(({ data }) => {
            return {
                data: [...data, newItem]
            }
        });
    }

    onToggleProp = (id, prop) => {
        this.setState(({ data }) => {
            return {
                data: data.map(item => {
                    if (item.id === id) {
                        return { ...item, [prop]: !item[prop] }
                    }
                    return item;
                })
            }
        });
    }

    searchEmp = (items, term) => {
        if (term.length === 0) {
            return items;
        }

        return items.filter(item => {
            return item.name.indexOf(term) > -1;
        });
    }

    onUpdateTerm = (term) => {
        this.setState({ term });
    }

    render() {
        const { data, term } = this.state;
        const visibleData = this.searchEmp(data, term);

        return (
            <div className="app">
                <AppInfo data={data} />

                <div className="search-panel">
                    <SearchPanel onUpdateTerm={this.onUpdateTerm} />
                    <AppFilter />
                </div>

                <EmployeesList data={visibleData}
                    onDelete={this.deleteItem}
                    onToggleProp={this.onToggleProp} />

                <EmployeesAddForm onAdd={this.addItem} />
            </div>
        );
    }
}

export default App;