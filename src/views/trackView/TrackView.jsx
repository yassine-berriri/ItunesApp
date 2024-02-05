import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';

function TrackView () {
    let { name } = useParams();

    const dataRedux = useSelector(state => state.data.data);
    const getTrack = dataRedux.filter((track) => track.trackName === name);
    
    return (
        <div>
            <h3>TrackView</h3>
            <h3>{name}</h3>
                {getTrack.map((track) => (
                    <div key={track.trackId}>
                        <img src={track.artworkUrl100} alt='album cover' />
                        <p>{track.artistName}</p>
                        <p>{track.trackName}</p>
                        <p>{track.collectionName}</p>
                        <p>{track.trackPrice}</p>
                        <p>{track.primaryGenreName}</p>
                        <p>{track.releaseDate}</p>
                        <audio controls>
                            <source src={track.previewUrl} type='audio/mpeg' />
                        </audio>
                    </div>
                ))}
          
        </div>
    );
};

export default TrackView;
