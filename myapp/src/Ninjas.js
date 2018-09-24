import React from 'react';

//UI component without state made by functions concerned about UI 
const Ninjas = ({ ninjas }) => {
    //const { ninjas } = props;
    const ninjaList = ninjas.map(ninja => {
        return (
            <div className = 'ninja' key= { ninja.id }>
                <div>Name: { ninja.name }</div>
                <div>Age: { ninja.age }</div>
                <div>Belt: { ninja.belt }</div>
            </div>
        )
    })
    return (
        <div className = 'ninja-list'>
            { ninjaList }            
        </div>
    )
}

export default Ninjas;