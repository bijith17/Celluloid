// use of this file is making an instance 
import axios from "axios";
import { baseUrl } from "./Constants";
const instance = axios.create({
    baseURL: baseUrl,
    
  });

  export default instance;