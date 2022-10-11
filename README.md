# Firmastation Restake Web
![image](https://user-images.githubusercontent.com/93503020/185839044-a3db5434-1f0a-4d7c-9123-bc63a1f4faa7.png)

# How to build
## 1. Install npm
```bash
  $ npm install
```

## Prepare the config file
- Copy config file
  ```bash
    $ cp config.sample.ts config.ts
  ```

- Set the variables in config
  ```bash
    RESTAKE_API = {
      URI: 'http://localhost:4000/',
      GET_STATUS: 'restake/status'
    };

    STATUS_API_INTERVAL = "Input api call interval time";
    BLOCKCHAIN_EXPLORER = "Input 'blockchain explorer' address"
    GRAPHQL_CONFIG = "Input 'graphql uri' address"
    EXPLORER_TRANSACTION = "Input 'blockchain explorer transaction' address"
  ```

## Run restake web
```bash
# Start according to PRODUCTION_MODE
$ npm run start

# start:dev enables the --watch option.
$ npm run start:dev
```