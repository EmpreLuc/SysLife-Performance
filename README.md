
# K6 Performance Testing

The project is structured to utilize .json files that define URLs, bodies, parameters, and headers for the performance tests. This allows for easy configuration and maintenance of test scenarios.

the main idea is to use folders to group different parts: 
- The data used by each API and endpoint (headers,body,query params, etc) in the folder 'data'.
- A 'setup' folder containing a loadConfig.js file with the preloaded test types to run and the threshholds and rateThresholds grouped by API and endpoint.
- A 'tests' folder where we will group the tests by API and endpoint.

Note: for each API we decided to add a file that groups all endpoints into a single test with 'constant-arrival-rate' executor to generate a constant request rate per hour. You can see the tests\restful-api\restful-api-rate.js example.

# Dependencies

### Install Go
To run this project, you need to have Go installed on your machine. Follow these steps to install Go:

1. Download Go from the official website: [Download Go](https://golang.org/dl/)
2. Follow the installation instructions for your operating system.

### Install K6
To install K6, you can use Chocolatey, a package manager for Windows. Run the following command in your command prompt or PowerShell:

```sh
choco install k6
```
For other operating systems, please refer to the [official K6](https://k6.io/docs/get-started/installation/) installation guide.

### Install xk6
xk6 is a tool for building custom K6 binaries with extensions. To install xk6, use the following command:

```sh
go install go.k6.io/xk6/cmd/xk6@latest
```
Make sure that your Go environment is correctly set up and that $GOPATH/bin is included in your PATH.

### Custom Build with xk6
In this project we will use 2 xk6 extensions xk6-dashboard(generate analitic dashboard) and httpagg(to generate a report with requests that failed on test execution).
The k6.exe binaries is included in the repositorie, but if you need to generate a new one, you can do with the below command.
```sh
xk6 build v0.51.0 --with github.com/gpiechnik2/xk6-httpagg --with github.com/grafana/xk6-dashboard@v0.7.3
```

# Running Tests
Configure your test scenarios in the .json files located in the data directory.
Run the tests using K6 by executing the appropriate command in your terminal.

## Environment Variables
- **TEST_TYPE:** Type of test to be executed configured in `setup\loadConfig.js` (load, stress, spike, breakpoint, endurance).
- **RPS:** Requests per second (`0` or empty for unlimited).
- **TARGET_VUS:** The target number of VUS (Virtual Users Simultaneously).

Specific endpoint test execution example
```sh
./k6 run -o 'dashboard=open=true&report=test-result.html' -e TEST_TYPE=load -e RPS=1 -e TARGET_VUS=1 ./tests\restful-api\restful-api-rate.js
```

Rate test execution example
```sh
./k6 run -o 'web-dashboard=open=true&period=2s&report=test-result.html' \tests\restful-api\restful-api-rate.js
```

