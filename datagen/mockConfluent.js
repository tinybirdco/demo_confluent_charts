import { ConfluentCloudKafkaGenerator } from '@tinybirdco/mockingbird';
import schema from './schema.js';
import { config as dotenvConfig } from 'dotenv';
dotenvConfig();

const cfltRestEndpoint = process.env.CFLT_REST_ENDPOINT
const cfltClusterId = process.env.CFLT_CLUSTER_ID
const cfltTopic = process.env.CFLT_TOPIC
const cfltApiKey = process.env.CFLT_API_KEY
const cfltApiSecret = process.env.CFLT_API_SECRET

const tbGenerator = new ConfluentCloudKafkaGenerator({
    schema,
    restEndpoint: cfltRestEndpoint,
    clusterId: cfltClusterId,
    topic: cfltTopic,
    apiKey: cfltApiKey,
    apiSecret: cfltApiSecret,
    eps: 1000,
    limit: 1000000,
});

async function run() {
    console.log(`Streaming data to Confluent Cloud...`);
    await tbGenerator.generate();
}

run()