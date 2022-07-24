### Compile smart

```bash
> npx hardhat compile
```

### Deploy smart

```bash
> npx hardhat run scripts/deploy.js --network goerli
```

### Interact with smart

```bash
> npx hardhat run scripts/interact.js
```

### API

#### Run server

```bash
> npx hardhat run api/index.js --network goerli
```

#### Get Message

```bash
curl --location --request GET 'http://localhost:5000/message'
```

#### Update Message

```bash
curl --location --request POST 'http://localhost:5000/message?message=Desde la API'
```

### ENV File

```bash
API_URL = "https://eth-goerli.g.alchemy.com/v2/..."
API_KEY = "..."
PRIVATE_KEY = #Private wallet key
CONTRACT_ADDRESS =
```
