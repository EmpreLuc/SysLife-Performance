import http from 'k6/http';
import { check, group } from 'k6';
import loadConfig from '../../setup/loadConfig.js';
import postApiThresholdsConfig from '../../setup/restful-api/postApiThresholdsConfig.js';
import { getRandomInt } from '../../utils/random.js';
import { cargarHeadersDesdeJSON } from '../../utils/headersUtils.js';
import generateReport from '../../utils/report.js';
import httpagg from 'k6/x/httpagg';

const testType = __ENV.TEST_TYPE;
const rps = __ENV.RPS || 0;
const jsonUrl = "../../data/services/restful-api/urls.json";
const jsonBody = "../../data/services/restful-api/post-endpoint/body.json";
const jsonHeaders = "../../data/services/restful-api/post-endpoint/headers.json";

export const options = Object.assign({
    insecureSkipTLSVerify: true,
    rps: rps,
}, loadConfig[testType], postApiThresholdsConfig[testType])

export function setup() {
    console.log(JSON.stringify(options,null,2));
}

const body = JSON.parse(open(jsonBody));
const headers = cargarHeadersDesdeJSON(jsonHeaders, 0);
const urls = JSON.parse(open(jsonUrl));
const url = urls[0].baseUrl + urls[0].postUrl

export function p2() {
    group('POST /objects', function () {
        console.log('BODY: ' + JSON.stringify(body[getRandomInt(body.length)]));
        console.log('HEADERS: ' + JSON.stringify(headers));
        console.log('URL: ' + url);

        let res = http.post(url, JSON.stringify(body[getRandomInt(body.length)]), { headers: headers });
        check(res, {
            'is status code 200': (r) => r.status === 200
        });
        httpagg.checkRequest(res, !check);

        console.log('BODY RESPONSE: ' + JSON.stringify(res.body));
    });
}

export function teardown() {
    generateReport();
}
