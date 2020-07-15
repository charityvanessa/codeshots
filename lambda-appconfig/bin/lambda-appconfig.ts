#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { LambdaAppconfigStack } from '../lib/lambda-appconfig-stack';

const app = new cdk.App();
//new LambdaAppconfigStack(app, 'LambdaAppconfigStack');

new LambdaAppconfigStack(app, 'prod',
  {
    prod: true,
    env: {
      region: 'eu-west-1'
    }
  });
new LambdaAppconfigStack(app, 'staging',
  {
    prod: false,
    env: {
      region: 'eu-west-1'
    }
  });
