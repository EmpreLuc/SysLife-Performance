export default {
  "scenarios": {
    "post1": {
      "executor": "constant-arrival-rate",
      "exec": "p1",
      "rate": 100,
      "timeUnit": "30s",
      "duration": "30s",
      "preAllocatedVUs": 50,
      "maxVUs": 200,
    },
    "post2": {
      "executor": "constant-arrival-rate",
      "exec": "p2",
      "rate": 100,
      "timeUnit": "30s",
      "duration": "30s",
      "preAllocatedVUs": 50,
      "maxVUs": 200,
    }
  }
};