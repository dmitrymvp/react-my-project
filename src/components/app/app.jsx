import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter'
import PlayersList from '../players-list/players-list';
import PlayersAddForm from '../players-add-form/players-add-form'


import './app.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                { name: 'Dmitry M.', raiting: 1030, participant: true, like: false, id: 1 },
                { name: 'Grigory K.', raiting: 1010, participant: false, like: true, id: 2 },
                { name: 'Daniil S.', raiting: 990, participant: false, like: false, id: 3 },
                { name: 'Alexey B.', raiting: 980, participant: false, like: false, id: 4 }
            ],
            term: '',
            filter: 'all'

        }

        this.maxId = 5
    }

    deleteItem = (id) => {
        this.setState(({ data }) => {
            return {
                data: data.filter(item => item.id !== id)
            }

        })
    }

    addItem = (name, raiting) => {
        const NewPlayer = {
            name,
            raiting,
            participant: false,
            like: false,
            id: this.maxId++
        }

        this.setState(({ data }) => {
            return {
                data: [...data, NewPlayer]
            }
        })
    }

    onToggleProp = (id, prop) => {
        // this.setState(({data}) => {
        //     const index = data.findIndex(elem => elem.id === id)

        //     const old = data[index]
        //     const newItem = {...old, participant: !old.participant}
        //     const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)]

        //     return {
        //         data: newArr
        //     }
        // })

        this.setState(({ data }) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return { ...item, [prop]: !item[prop] }
                }

                return item;
            })
        }))

    }

    // onToggleLike = (id) => {
    //     this.setState(({data}) => ({
    //         data: data.map(item => {
    //             if (item.id === id) {
    //                 return {...item, like: !item.like}
    //             }

    //             return item;
    //         })
    //     }))
    // }

    searchEmp = (items, term) => {
        if (term.length === 0) {
            return items;
        }

        return items.filter(item => {
            return item.name.indexOf(term) > -1
        })
    }

    onUpdateSearch = (term) => {
        this.setState({ term });
    }

    filterPost = (items, filter) => {
        switch (filter) {
            case 'like':
                return items.filter(item => item.like)
            case 'raitingMore1000':
                return items.filter(item => item.raiting > 1000)
            default:
                return items
        }
    }

    onFilterSelect = (filter) => {
        this.setState({ filter })
    }

    render() {
        const { data, term, filter } = this.state
        const players = this.state.data.length
        const participantd = this.state.data.filter(item => item.participant).length
        const visibleData = this.filterPost(this.searchEmp(data, term), filter)

        return (
            <div className="app">
                <AppInfo
                    players={players}
                    participantd={participantd} />

                <div className="search-panel">
                    <SearchPanel
                        onUpdateSearch={this.onUpdateSearch} />
                    <AppFilter
                        filter={filter}
                        onFilterSelect={this.onFilterSelect} />
                </div>
                <PlayersList
                    data={visibleData}
                    onDelete={this.deleteItem}
                    onToggleProp={this.onToggleProp}
                />
                <PlayersAddForm
                    onAdd={this.addItem} />
            </div>
        )
    }



}

export default App;
