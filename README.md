# gas-sheets2slack

gas-sheets2slack is a starter kit to post messages from Google sheets to slack.

Check out this article when you use this template.

[👉 How to make a reminder posts messages from Google Sheets to Slack](https://dev.to/tim_yone/how-to-make-a-schedule-reminder-for-posting-messages-from-google-sheets-to-slack-2f11)
## Status

[![Release (latest by date)](https://img.shields.io/github/v/release/Kazuki-tam/gas-sheets2slack)](https://github.com/Kazuki-tam/gas-sheets2slack/releases/tag/v0.0.1)
[![Issues](https://img.shields.io/github/issues/Kazuki-tam/gas-sheets2slack)](https://github.com/Kazuki-tam/gas-sheets2slack/issues)
![Maintenance](https://img.shields.io/maintenance/yes/2022)
![Release date](https://img.shields.io/github/release-date/Kazuki-tam/gas-sheets2slack)

## Features
- Just deploy this project code without development
- Develop Locally with TypeScript and Clasp
- Bundle your files with Webpack
- Lint your code with ESLint
- Format your code with prettier
- Built-in test runner with Jest

## Main dependencies

- [Clasp](https://github.com/google/clasp)
- [Webpack](https://webpack.js.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [ESLint](https://eslint.org/)
- [Jest](https://jestjs.io/)
- [Yarn](https://yarnpkg.com/)

## Prerequisites

- [Node.js v16+ (v16.13.0)](https://nodejs.org/en/)
- [Clasp](https://github.com/google/clasp)
- [slack](https://slack.com/)
- [Google Sheets](https://www.google.com/sheets/about/)

Note: [Create an app](https://api.slack.com/apps/) in slack and get the webhook URL from the dashboard.

## How to use

Clone this repository and install dependencies.

```shell
yarn install
```

### Login google account

```shell
yarn clasp login
```

### Connect to your exiting project

Create a `.clasp.json` at the root, and then Add these settings.
Open App script from your spreadsheet and check out a script Id at the setting page.

```json
{
  "scriptId": "<SCRIPT_ID>",
  "rootDir": "./dist"
}
```

### Create a .env file

Create a .env at the root, and then add your `SLACK_WEBHOOK_URL`.

```
SLACK_WEBHOOK_URL=<SLACK_WEBHOOK_URL>
```

### Upload a script project

Deploy your code to the existing project.

```shell
yarn deploy
```

## Available Commands

Build your project.

```shell
yarn build
```

Build your project files and force writes all local files to script.google.com.

```shell
yarn deploy
```

Open the current directory's clasp project on script.google.com.

```shell
yarn open
```

Test project's code

```shell
yarn test
```

```shell
yarn test:watch
```

## License
MIT
