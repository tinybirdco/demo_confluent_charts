# Tinybird project
This folder contains all of the resources to build the Tinybird project for this demo.

## Project structure
This project contains:
```
├── datasources
│   └── ecomm_events.datasource
├── pipes
│   ├── sales_trend.pipe
│   └── utm_sales.pipe
```

## Deploying the Tinybird resources
To deploy to Tinybird, you need to have the [Tinybird CLI installed](https://www.tinybird.co/docs/cli/overview). Then, you can run the following commands:
```bash
tb auth --token <your user admin token>
tb push --force
```