export default {
  "monitoring": {
    "thresholds": {
      "http_req_duration": ["avg<1000", "p(95)<4000"]
  }},
  "stress": {
    "thresholds": {
      "http_req_duration": ["avg<400", "p(95)<400"]
  }},
  "load": {
    "thresholds": {
      "http_req_duration": ["avg<400", "p(95)<400"]
  }},
  "spike": {
    "thresholds": {
      "http_req_duration": ["avg<400", "p(95)<400"]
  }},
  "endurance": {
    "thresholds": {
      "http_req_duration": ["avg<400", "p(95)<400"]
  }},
  "breakpoint": {
    "thresholds": {
      "http_req_duration": ["avg<400", "p(95)<400"]
  }},
  "rate": {
    "thresholds": {
      "http_req_duration": ["avg<400", "p(95)<400"]
  }}
};