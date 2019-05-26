// Import aws modules with XRay tracing capabilities
// import * as awsXRay from 'aws-xray-sdk';
// const { Lambda } = awsXRay.captureAWS(require('aws-sdk'));

const exampleLambda = async (req: any, res: any) => {
  res.send("Hello there!");
};

export default exampleLambda;