import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchData = createAsyncThunk(
    'data/fetchData',
    async (term, { dispatch }) => {
        let data;

        console.log('je suis dans le thunk', term);
        const randomParam = Math.random();
        // Votre logique de récupération de données ici
        
        const response = await fetch(`https://itunes.apple.com/search?term=${encodeURIComponent(term)}&test=${randomParam}`);
        console.log('je suis dans le thunk response.status = ', response.status);
        if (response.status == "400" || response.status == "403") {
            console.log('je suis dans le thunk 404');
           
        }
        data = await response.json();
        console.log('je suis dans le thunk', data.results);
        
       
       
       
        return data.results; // La valeur retournée sera automatiquement dispatchée en tant que action fulfilled
    }
);

// Thunk pour ajouter un nouvel item à l'historique
export const updateHistoricalList = createAsyncThunk(
    'data/updateHistoricalList',
    async (newItem, {getState}) => {
        // Ici, vous pouvez effectuer des opérations asynchrones si nécessaire,
        // comme une validation, enrichissement de l'item, etc.

        // Puisque l'objectif est d'ajouter newItem à une liste existante,
        // vous n'avez pas besoin de modifier la liste ici.
        // Le reducer s'occupera d'ajouter l'item à l'état.
        return newItem;
    }
);


