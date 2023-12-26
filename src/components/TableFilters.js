import React from 'react';

const TableFilters = () => {
    return (
        <div className='table-filters'>
            <div className='table-filters-container'>
                <div className='stable-checkbox-container'>
                    <input type='checkbox' id='stableCoin' defaultChecked={true} />
                    <label htmlFor='stableCoin'>
                        Avec stable coin
                    </label>
                </div>
                <div className='fav-list'>
                    <p> Liste de favoris</p>
                    <img src='./assets/star-full.svg' alt='icon star' />
                </div>
                <div className='no-list-btn'>
                    <p> Aucune liste</p>
                </div>
            
            </div>
            
        </div>
    );
};

export default TableFilters;