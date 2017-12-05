import axios from 'axios';

const BASE_URL = 'https://app.rakuten.co.jp/services/api/Travel/';
const SIMPLE_HOTEL_SEARCH_ENDPOINT = `${BASE_URL}SimpleHotelSearch/20170426`;

export default {
  simpleHotelSearch: params =>
    // axios.getでurlにパラメータを追加する場合、第二引数はparamsじゃないといけない
    // https://github.com/axios/axios
    axios.get(SIMPLE_HOTEL_SEARCH_ENDPOINT, { params }),
};
