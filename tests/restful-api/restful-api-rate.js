export  {p1}  from "./post-endpoint.js";
export  {p2}  from "./post-endpoint2.js";
import generateReport from '../../utils/report.js';
import jsonRateConfig from '../../setup/restful-api/restfulApiRateConfig.js';
import postApiThresholdsConfig from '../../setup/restful-api/postApiThresholdsConfig.js';

export let options = Object.assign({
    insecureSkipTLSVerify: true 
}, jsonRateConfig,postApiThresholdsConfig['rate']);
 

export function setup() {
    console.log(JSON.stringify(options, null, 2));
}

export function teardown() {
    generateReport();
}

