import { App } from 'aws-cdk-lib'; import { CodeCheckStack } from '../lib/codecheck-stack';
const app = new App();
new CodeCheckStack(app, 'CodeCheckStack');