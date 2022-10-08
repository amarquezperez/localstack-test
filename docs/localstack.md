## Localstack

- We create a .localstack folder to store configuration.
- localstack start script to execute start command in background
- Create dev.env file with the localstack configuration por this project
- Add scripts command in package.json with env variables needed to start localstack

### localstack config file

```
# CORE
MAIN_CONTAINER_NAME=localstakck_dev
DEBUG=1
DEFAULT_REGION=eu-west-1
PERSISTENCE=1
IMAGE_NAME=localstack/localstack:1.2.0

# CLI
LOCALSTACK_VOLUME_DIR=/home/me/Escritorio/workspace/localstack-test/.localstack/volume

# LAMBDA
LAMBDA_EXECUTOR=docker-reuse

#DNS
DNS_ADDRESS=127.0.0.1

# PRO
LOCALSTACK_API_KEY=
```
