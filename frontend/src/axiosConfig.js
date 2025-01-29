import axios from 'axios';
let production=true;
axios.defaults.baseURL =
  process.env.NODE_ENV !== production ? 'https://amaravati-essentials-backend-mhqoljl9h-ajaybhaskars-projects.vercel.app/':'http://localhost:5000' ;
