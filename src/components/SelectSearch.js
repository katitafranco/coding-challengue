import React from 'react'

function SelectSearch(props) {
    return (
        <select className="search_select" value={props.valueSelected} onChange={props.handleChange}>
            <option value="TODAS">TODAS</option>
            <option value="Noticias">Noticias</option>
            <option value="Deportes">Deportes</option>
            <option value="Entretenimiento">Entretenimiento</option>
        </select>
    )

}

export default SelectSearch;