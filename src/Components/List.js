import Item from './Item';

function List(props) {
    return(
        <ul>
            {props.list.map(listItem => {
                return <Item isChecked={listItem.isChecked} content={listItem.text}/>
            })}
        </ul>
    )
}

export default List;

{/* <li>
            <input type='checkbox' checked={props.isChecked}></input>
            <span>{props.text}</span>
        </li> */}