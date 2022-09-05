import axios from "axios";

async function fetchAPI() {
  const response = await axios.get('https://economia.awesomeapi.com.br/json/all')
  return response;

}
export default fetchAPI;