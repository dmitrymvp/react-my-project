import { Component } from 'react';
import './players-add-form.css'

// const PlayersAddForm = () => {
//     return (
//         <div className="app-add-form">
//             <h3>Добавьте нового сотрудника</h3>
//             <form
//                 className="add-form d-flex">
//                 <input type="text"
//                     className="form-control new-post-label"
//                     placeholder="Как его зовут?" />
//                 <input type="number"
//                     className="form-control new-post-label"
//                     placeholder="З/П в $?" />

//                 <button type="submit"
//                     className="btn btn-outline-light">Добавить</button>
//             </form>
//         </div>
//     )
// }


class PlayersAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            raiting: ''
        }
    }

    onValueChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = (e) => {
        const { name, raiting } = this.state
        e.preventDefault()
        
        if (name.length < 3 && !raiting) return;

        this.props.onAdd(name, raiting)
        this.setState({

            name: '',
            raiting: ''
        })

    }


    render() {
        const { name, raiting } = this.state
        return (
            <div className="app-add-form">
                <h3>Добавьте нового спортсмена</h3>
                <form
                    className="add-form d-flex"
                    onSubmit={this.onSubmit}>
                    <input type="text"
                        className="form-control new-post-label"
                        placeholder="Как его зовут?"
                        name='name'
                        value={name}
                        onChange={this.onValueChange} />
                    <input type="number"
                        className="form-control new-post-label"
                        placeholder="Стартовый рейтинг - 1000"
                        name='raiting'
                        value={raiting}
                        onChange={this.onValueChange} />

                    <button type="submit"
                        className="btn btn-outline-light">Добавить</button>
                </form>
            </div>
        )
    }

}

export default PlayersAddForm;