import React from 'react';

const Cars = ({ color, children }) => {
    const colorInfo = color ? (<p>Couleur: {color}</p>) : (<p>Couleur: Neant</p>)
    if (children) {
        return (
            <div className="Cars" style={{ backgroundColor: 'green', width: '400px', padding: '10px', margin: '10px' }}>
                <p>Marque:{children}</p>
                {colorInfo}
            </div>
        );
    }
    else {
        return (<div className="Cars" style={{ backgroundColor: 'green', width: '400px', padding: '10px', margin: '10px' }}>
            <p>No data!</p>
        </div>

        );
    }

}
export default Cars;