function Item(props) {
    return(
        <li>
            <input type='checkbox' checked={props.isChecked} ></input>
            <span>{props.content}</span>
        </li>
    )
}

export default Item;