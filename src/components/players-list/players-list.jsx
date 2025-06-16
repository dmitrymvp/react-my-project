import   PlayersListItem from '../players-list-item/players-list-item'
import './players-list.css'

const PlayersList = ({ data, onDelete, onToggleProp}) => {

    const elements = data.map(item => {
        const {id, ...itemProps} = item;
        return (
            // <  PlayersListItem name={item.name} raiting ={item.raiting} participant={item.participant}/>
            <  PlayersListItem 
                key={id}
                {...itemProps}
                onDelete={() => onDelete(id)} 
                onToggleProp={(e) => onToggleProp(id, e.currentTarget.getAttribute('data-toggle'))}/>
        )
    })

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )

}

export default PlayersList