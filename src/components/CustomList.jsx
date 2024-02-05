import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import { useState } from 'react';

const CustomList = ({ items }) => {
    const [checked, setChecked] = useState([]);

    const handleToggle = (value) => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        setChecked(newChecked);
    };

    return (
        <List dense sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            {items.map((item, index) => {
               
                const labelId = `checkbox-list-secondary-label-${item}`;
                return (
                    <ListItem
                        key={item}
                        disablePadding
                    >
                        <ListItemButton>
                            <ListItemAvatar>
                                <Avatar
                                    alt={`Avatar n°${index + 1}`}
                                    src={item.artworkUrl30}
                                />
                            </ListItemAvatar>
                            <ListItemText id={labelId} primary={item.trackName} />
                            <ListItemText id={labelId} primary={item.artistName} />
                            {item.previewUrl && (
                            <audio controls src={item.previewUrl}>
                                Your browser does not support the audio element.
                            </audio>
                        )}

                        </ListItemButton>
                    </ListItem>
                );
            })}
        </List>
    );
}

export default CustomList;
