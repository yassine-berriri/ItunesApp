import React from 'react';
import CustomTable from '../components/CustomTable';

function ItunesSearchDisplay({ data, isLoading, error, onListUpdate }) {
    if (isLoading) {
        return <div>Loading...</div>;
    }
    
    if (error) {
        return <div>Error: {error}</div>;
    }

    const handleListUpdate = (row) => {
        onListUpdate(row);
    };

    return (
        <div>
            <CustomTable items={data} onRowClick={handleListUpdate} isClickable={true} />
        </div>
    );
}


export default ItunesSearchDisplay;
