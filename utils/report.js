import httpagg from 'k6/x/httpagg';
export default function generateReport() {
    httpagg.generateRaport("httpagg.json", "reportFailed.html");
  }

