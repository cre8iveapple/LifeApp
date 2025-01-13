import { generateClient } from "aws-amplify/data";
import outputs from "../amplify_outputs.json";
import { Amplify } from "aws-amplify";
/**
 * @type {import('aws-amplify/data').Client<import('../amplify/data/resource').Schema>}
 */

Amplify.configure(outputs);
const client = generateClient({
  authMode: "userPool",
});

export {client}