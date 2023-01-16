import React from 'react';
import './css/style.css'

function RickSanchezComponent(props) {
    let {id,name,status,species,gender,image} = props;

    let classNameItem = 'Rick-and-Morty'
    return (




                <div className={classNameItem}>

                    <h1>{id}</h1>
                    <h2>{name}</h2>
                    <div>
                        <img src={image} height={300} alt=""/>
                    </div>
                    <h4>{status}</h4>
                    <h4>{species}</h4>
                    <h4>{gender}</h4>
                </div>

    )
}

export default RickSanchezComponent;