const URL_BACKEND_TOP = window.location.hostname.includes('localhost') 
    ? 'https://localhost:8080'
    : 'https://yummyflix.herokuapp.com'; 

export default {
    URL_BACKEND_TOP,
};