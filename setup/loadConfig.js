const targetVUs = parseInt(__ENV.TARGET_VUS, 10) || 10;
const timeStress = __ENV.STRESS_DURATION || 10;
export default {
  "monitoring": {
    "executor": "per-vu-iterations",
    "iterations": 20,
    "maxDuration": timeStress
  },
  "stress": {
    "executor": "ramping-vus",
    "startVUs": 0,
    "stages": [
      { "duration": "2m", "target": Math.round(targetVUs / 4) },
      { "duration": "2m", "target": Math.round(targetVUs / 2) },
      { "duration": "2m", "target": Math.round(targetVUs) },
      { "duration": "5m", "target": Math.round(targetVUs) },
      { "duration": "2m", "target": Math.round(targetVUs / 2) },
      { "duration": "2m", "target": Math.round(targetVUs / 4) },
      { "duration": "2m", "target": 0 }
    ]
  },
  "load": {
    "executor": "ramping-vus",
    "startVUs": 0,
    "stages": [
      { "duration": "2m", "target": targetVUs },
      { "duration": "36m", "target": targetVUs },
      { "duration": "2m", "target": 0 }
    ]
  },
  "spike": {
    "executor": "ramping-vus",
    "startVUs": 0,
    "stages": [
      { "duration": "3m", "target": Math.round(targetVUs / 2) },
      { "duration": "1m", "target": Math.round(targetVUs) },
      { "duration": "5s", "target": 0 },
      { "duration": "15s", "target": 0 },
      { "duration": "3m", "target": Math.round(targetVUs / 2) },
      { "duration": "1m", "target": Math.round(targetVUs) },
      { "duration": "5s", "target": 0 },
      { "duration": "15s", "target": 0 },
      { "duration": "3m", "target": Math.round(targetVUs / 2) },
      { "duration": "1m", "target": Math.round(targetVUs) },
      { "duration": "5s", "target": 0 },
      { "duration": "15s", "target": 0 },
      { "duration": "3m", "target": Math.round(targetVUs / 2) },
      { "duration": "1m", "target": Math.round(targetVUs) },
      { "duration": "3m", "target": 0 }
    ]
  },
  "endurance": {
    "executor": "constant-vus",
    "vus": targetVUs,
    "duration": "1h"
  },
  "breakpoint": {
    "executor": "ramping-vus",
    "startVUs": 0,
    "stages": [
      { "duration": "1m", "target": Math.round(targetVUs / 7) },
      { "duration": "4m", "target": Math.round(targetVUs / 7) },
      { "duration": "1m", "target": Math.round(targetVUs / 6) },
      { "duration": "4m", "target": Math.round(targetVUs / 6) },
      { "duration": "2m", "target": Math.round(targetVUs / 5) },
      { "duration": "4m", "target": Math.round(targetVUs / 5) },
      { "duration": "2m", "target": Math.round(targetVUs / 4) },
      { "duration": "4m", "target": Math.round(targetVUs / 4) },
      { "duration": "2m", "target": Math.round(targetVUs / 3) },
      { "duration": "4m", "target": Math.round(targetVUs / 3) },
      { "duration": "2m", "target": Math.round(targetVUs / 2) },
      { "duration": "4m", "target": Math.round(targetVUs / 2) },
      { "duration": "2m", "target": Math.round(targetVUs / 1) },
      { "duration": "4m", "target": Math.round(targetVUs / 1) },
      { "duration": "30s", "target": 0 }
    ]
  },
  "minitest": {
    "executor": "ramping-vus",
    "startVUs": 0,
    "stages": [
      { "duration": "1m", "target": targetVUs },
      { "duration": "1m", "target": targetVUs },
      { "duration": "0m", "target": 0 }
    ]
  }
};