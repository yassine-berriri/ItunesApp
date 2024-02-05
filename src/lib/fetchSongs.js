import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchData } from '../redux/Thunk';


const DataFetcher = ({ term, children, isClicked }) => {
    const dispatch = useDispatch();
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        dispatch(fetchData(term));
    }, [term, dispatch]); // Exécutez le fetchData chaque fois que `term` change

    // `children` est une fonction qui prend les états en tant qu'argument
    return children({ data, isLoading, error });
};

export default DataFetcher;
