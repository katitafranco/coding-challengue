import React from 'react'

function SelectSearch(props) {
    return (
        <select className="search_select" value={props.valueSelected} onChange={props.handleChange}>
            <option value="TODAS">TODAS</option>
            <option value="noticias">Noticias</option>
            <option value="guayaquil">Guayaquil</option>
            <option value="deportes">Deportes</option>
            <option value="entretenimiento">Entretenimiento</option>
            <option value="la revista">La Revista</option>
        </select>
    )

}

export default SelectSearch;