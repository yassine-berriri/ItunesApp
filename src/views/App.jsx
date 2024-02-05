
import './App.css';
import React,  { useState, useEffect, useParams }  from 'react';
import ItunesSearchDisplay from '../components/ItunesSearchDisplay';
import CustomTable from '../components/CustomTable';
import {useNavigate} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchData, updateHistoricalList } from '../redux/Thunk';
import NotFoundComponent from '../components/notFound/notFoundComponent';
function App() {

  
  const dispatch = useDispatch();
  const dataRedux = useSelector(state => state.data.data);
  const isLoadingRedux = useSelector(state => state.data.isLoading);
  const errorRedux = useSelector(state => state.data.error);
  const historicalListRedux = useSelector(state => state.data.historyData);
  console.log('je suis dans App dataRedux', dataRedux);

  
  const [dataClicked, setDataClicked] = useState([]);
  const [searchTerm, setSearchTerm] = useState('')
  const [song, setSong] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    
    if (searchTerm) {
      dispatch(fetchData(searchTerm));
    }
  }, [searchTerm, dispatch]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    console.log('je suis dans DataFetcher');
  //  navigate(`/itunes/${searchTerm}`, { replace: false, state: { someState: 'value' } });
  };

  const handleListUpdate = (newItem) => {
    console.log('je suis dans handleListUpdate', newItem);
    setDataClicked(prevList => [...prevList, newItem]);
    // dispatch(updateHistoricalList(dataClicked));
    console.log('je suis dans handleListUpdate', dataClicked);
    dispatch(updateHistoricalList(newItem));
    setSong(newItem.previewUrl);
    navigate(`/itunes/${newItem.trackName}`);
  };


  return (
    
    <div className="App">
      <h3>ITUNES Api</h3>
      <input 
        type="text" 
        placeholder="Search"
        value ={searchTerm}
        onChange={handleSearchChange}   
      />
    
      <div className='list'>
        { console.log('je suis dans dataRedux', errorRedux)}
        {  /*(triggerFetch) && */ 
       
        (dataRedux == null || errorRedux == "Unexpected end of JSON input") ? (<NotFoundComponent />) :
        (
          <ItunesSearchDisplay 
              onListUpdate={handleListUpdate}
              data={dataRedux} 
              isLoading={isLoadingRedux} 
              error={errorRedux} 
              />
            )}
         <h3>Historique</h3>
        {console.log('je suis dans App', dataClicked)}
        <CustomTable items={historicalListRedux} isClickable={false}  />
         <audio controls src={song}>
           Your browser does not support the audio element.
        </audio>   
      </div>
    </div>
  );
}

export default App;
