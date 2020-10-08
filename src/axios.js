import axios from "axios";

const instance = axios.create({
    baseURL: "https://exercise-tracker-usama.herokuapp.com"
});

export default instance;