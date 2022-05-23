The task is to setup a simple web service to implement a calculator. The service offers an endpoint that reads a string input and parses it. It should return either an HTTP error code, or a solution to the calculation in JSON form.

### Get it running

To get everything running locally:

- Clone this repo
- To install the required dependencies, run:
```sh
make install
```
OR
```sh
cd ./server && npm install && cd .. && cd ./client && npm install
```
- To start backend and frontend with Docker, run:
```sh
make start_docker
```
- To start the backend, run:
```sh
cd ./server && npm run start:server
```
- To start the frontend, run:
```sh
cd ./client && npm run start:client
```

### Intended Deployment

This project has not been deployed to a cloud service due to the insitence of AWS and GCP on being provided with a credit card.

Intended setup:
- Use AWS ECS as basic hosting option for Dockerised service; number of tasks: 1
- Create IAM role and set up ELB for calculator service
- Configure ECS cluster
- Register domain in Route53
- Create A record pointing to ELB