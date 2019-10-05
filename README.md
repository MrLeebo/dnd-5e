# D&D-5E System Reference Document Online

An online, searchable repository of the D&D 5th Edition System Reference Document. Built with Gatsby.

## Setup

Install the dependencies:

```bash
yarn
```

This repo downloads the SRD in JSON format from another repo, <https://github.com/adrpadua/5e-database>. To download the data, create a `.env` file containing your GitHub Access Token

```bash
GITHUB_ACCESS_TOKEN=yourtokengoeshere
```

Next, start the web server:

```bash
yarn start
```
