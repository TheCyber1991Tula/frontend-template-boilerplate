import React from 'react';
import '@Styles/ItemStatusFilter.scss';

const ItemStatusFilter = () => {
    return (
        <div id="itemStatusFilter__wrap">
            <button type="button" className="btn btn-warning" id="button-filter-active">
                Active
            </button>
            <button type="button" className="btn btn-success" id="button-filter-complete">
                Complete
            </button>
            <button type="button" className="btn btn-primary" id="button-filter-all">
                All
            </button>
        </div>
    );
};

export default ItemStatusFilter;
