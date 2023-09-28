
import { http, Config } from '@phyrus/vue';

export default () => {

    /* Here you can configure your HTTP Client in many ways:
    - Add a base URL
    - Register named endpoints
    - Add global headers
    - Setup token refresh
    */

    http.baseUrl = Config.get('api.url');

    // Read documentation for more...

}