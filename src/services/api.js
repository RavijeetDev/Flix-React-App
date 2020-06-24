import axios from 'axios'
import { API_KEY, BASE_URL } from '../config/api_config'
import { debug } from '../utils/utility'

const debugTag = "API";

export const flixListFetchAPI = async (type, category) => {

    const apiUrl = `${BASE_URL}/${type}/${category}?api_key=${API_KEY}`;
    debug(debugTag, apiUrl);

    const response = await axios.get(apiUrl);
    const results = response.data.results;
    debug(debugTag, results);

    return results;
}

export const searchQueryAPI = async (flickType, query) => {

    const apiUrl = `${BASE_URL}/search/${flickType}?api_key=${API_KEY}&query=${query}`;
    debug(debugTag, apiUrl);

    const response = await axios.get(apiUrl);
    const results = response.data.results;
    debug(debugTag, results);

    return results;

}