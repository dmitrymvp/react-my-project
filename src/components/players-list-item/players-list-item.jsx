import './players-list-item.css'

// const   PlayersListItem = ({ name, raiting, participant }) => {

//     let className = 'list-group-item d-flex justify-content-between'

//     if (participant) {
//         className +=  ' participant'
//     }

//     return (
//         <li className={className}>
//             <span className="list-group-item-label">{name}</span>
//             <input type="text" className="list-group-item-input" defaultValue={`${raiting} points`} />
//             <div className='d-flex justify-content-center align-items-center'>
//                 <button type="button"
//                     className="btn-cookie btn-sm ">
//                     <i className="fas fa-cookie"></i>
//                 </button>

//                 <button type="button"
//                     className="btn-trash btn-sm ">
//                     <i className="fas fa-trash"></i>
//                 </button>
//                 <i className="fas fa-star"></i>
//             </div>
//         </li>
//     )
// }

const   PlayersListItem = (props) => {

    const { name, raiting, onDelete, onToggleProp, participant, like } = props

    let className = 'list-group-item d-flex justify-content-between'

    if (participant) {
        className += ' participant'
    }

    if (like) {
        className += ' like'
    }

    return (
        <li className={className}>
            <span className="list-group-item-label"
                onClick={onToggleProp}
                data-toggle="like"
                style={{fontSize: 26}}>{name}</span>
            <input type="text" className="list-group-item-input" defaultValue={`${raiting} points`} />
            <div className='d-flex justify-content-center align-items-center'>
                <button type="button"
                    className="btn-cookie btn-sm"
                    onClick={onToggleProp}
                    data-toggle='participant'>
                    <i className="fas fa-cookie"></i>
                </button>

                <button type="button"
                    className="btn-trash btn-sm "
                    onClick={onDelete}>
                    <i className="fas fa-trash"></i>
                </button>
                <i className="fas fa-star"></i>
            </div>
        </li>
    )

}

export default   PlayersListItem;