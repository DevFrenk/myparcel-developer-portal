import * as cdk from "aws-cdk-lib";
import { CertificateStack } from "../lib/stacks/certificate-stack";
import { PortalStack } from "../lib/stacks/portal-stack";

const app = new cdk.App();

const account = process.env.CDK_DEFAULT_ACCOUNT;
const region = process.env.CDK_DEFAULT_REGION ?? "eu-north-1";
const domainName = "docs.legacy.systems";
const hostedZoneName = "legacy.systems";

// ACM certificate must be in us-east-1 for CloudFront
const certStack = new CertificateStack(app, "MyParcelPortalCert", {
  env: { account, region: "us-east-1" },
  crossRegionReferences: true,
  domainName,
  hostedZoneName,
});

new PortalStack(app, "MyParcelPortal", {
  env: { account, region },
  crossRegionReferences: true,
  domainName,
  hostedZoneName,
  certificate: certStack.certificate,
});

app.synth();
