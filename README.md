# **fraudlabspro-sdk**

fraudlabspro-sdk is a software development kit (SDK) that provides easy integration with the FraudLabs Pro API for fraud detection. It enables developers to perform various fraud checks on online transactions, such as payment fraud, identity verification, and IP geolocation. The SDK simplifies making API requests, handling responses, and managing data validation, allowing developers to quickly implement fraud prevention mechanisms in their applications. Suitable for e-commerce, online services, and any platform requiring robust fraud detection.

https://www.fraudlabspro.com/developer/api/screen-order

## Installation

You can install the package using **npm**, **yarn**, or **pnpm**.

```bash
pnpm add fraudlabspro-sdk

yarn install fraudlabspro-sdk

npm install fraudlabspro-sdk
```

## Usage

```tsx
import { Seon, FraudApiRequest, FraudApiResponse } from "fraudlabspro-sdk";

const seon = new Seon(process.env.SEON_KEY, process.env.SEON_URL);

const request: FraudApiRequest = {
  /* PARAMETERS */
};

const response: FraudApiResponse = await seon.fraud(request);

console.log(response);
```

## tsup

Bundle your TypeScript library with no config, powered by esbuild.

https://tsup.egoist.dev/

## How to use this

1. install dependencies

```
# pnpm
$ pnpm install

# yarn
$ yarn install

# npm
$ npm install
```

2. Add your code to `src`
3. Add export statement to `src/index.ts`
4. Test build command to build `src`.
   Once the command works properly, you will see `dist` folder.

```zsh
# pnpm
$ pnpm run build

# yarn
$ yarn run build

# npm
$ npm run build
```

5. Publish your package

```zsh
$ npm publish
```

## test package

https://www.npmjs.com/package/fraudlabspro-sdk
