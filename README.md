# Firmastation Restake Web
![image](https://user-images.githubusercontent.com/93503020/185839044-a3db5434-1f0a-4d7c-9123-bc63a1f4faa7.png)

## **Overview**
This project has been implemented to provide round-by-round results of restakes.

<br/>

## **Features**
Firmastation Restake Web displays the last round and statistical information, providing users with the most up-to-date data. It also shows restake results for each round, allowing users to easily check their restake history. In addition, it provides the remaining time until the next restake to help users plan for restakes. Finally, it shows transaction results that occurred in each round, allowing users to keep track of their transaction status in real time.

<br/>

## **Build Instructions**
```bash
# Clone the repository
$ git clone https://github.com/FirmaChain/firmastation-restake-web.git

# Navigate to the project directory
$ cd firmastation-restake-web

# Install required packages
$ npm install

# Copy the config.sample.ts file to config.ts
$ cp config.sample.ts config.ts
```

<br/>

## **Environment Setup**
After you've copied config.sample.ts to config.ts, assign appropriate values to the following variables:

- `RESTAKE_API`: { URI: 'http://localhost:4000/', GET_STATUS: 'restake/status' };

- `STATUS_API_INTERVAL`: "Enter the API call interval";

- `BLOCKCHAIN_EXPLORER`: "Enter the 'blockchain explorer' address";

- `GRAPHQL_CONFIG`: "Enter the 'GraphQL URI' address";

- `EXPLORER_TRANSACTION`: "Enter the 'blockchain explorer transaction' address";

<br/>

## **Running the Application**
```bash
# Start the server (development mode)
$ npm run start:dev

# Start the server (production mode)
$ npm run start
```