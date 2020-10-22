import axios from 'axios';
const KEY = 'AIzaSyDS7oBlk-7PS-xmYa0C6KOjhiwkqQJ6Szg';


export default axios.create({

    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
});

