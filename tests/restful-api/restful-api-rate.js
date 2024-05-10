/* import generateReport from "../../utils/report.js";
import httpagg from 'k6/x/httpagg';

export let options = {
    "scenarios": {
      "post1": {
        "executor": "constant-arrival-rate",
        "rate":100,
        "timeUnit":"30s",
        "duration":"30s",
        "preAllocatedVUs":50,
        "maxVUs":200,
      },
      "post2": {
        "executor": "constant-arrival-rate",
        "rate":100,
        "timeUnit":"30s",
        "duration":"30s",
        "preAllocatedVUs":50,
        "maxVUs":200,
      }
    }
  }
  

export function setup() {
    console.log(JSON.stringify(options, null, 2));
}

export default function () {
}
 */