import './app-info.css'


const AppInfo = (props) => {
    const {players, participantd} = props

    return (
        <div className="app-info">
            <h1>Список спортсменов в лиге города</h1>
            <h2>Общее число спортсменов: {players}</h2>
            <h2>Примут участие в турнире: {participantd} </h2>
        </div>
    )
}

export default AppInfo;