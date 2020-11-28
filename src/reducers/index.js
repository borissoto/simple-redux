import { combineReducers } from 'redux';

const songsReducer = () => {
  return [
    {
      title: 'No  Scrubs',
      duration: '4:05',
    },
    {
      title: 'Macarena',
      duration: '2.40',
    },
    {
      title: 'Smells like teen spirit',
      duration: '3.23',
    },
    { title: 'All star', duration: '1.45' },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
});
