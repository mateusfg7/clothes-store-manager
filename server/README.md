# Back-end
- [Init Server](#init-server)
  - [Development](#development)
  - [Production](#production)
- [HTTPS](#use-https)
- [API](#api)
  - [Create](#create)
  - [Index](#index)
  - [Show](#show)
  - [Delete](#delete)
  - [Update](#update)
## Init server
### Development
Install [Denon](https://deno.land/x/denon):
```text
deno install -qAf --unstable https://deno.land/x/denon@2.4.4/denon.ts
```
and run the development server:
```text
denon dev
```
### Production
Create a `.env` file and add the follow environment variables:
```dotenv
PORT=[YOUR PORT NUMBER]

PG_HOST=[POSTGRES HOST]
PG_USER=[POSTGRES USERNAME]
PG_PASSWORD=[POSTGRES PASSWORD]
PG_DATABASE=[POSTGRES DATABASE]
```
follow the `.env.example` model.

and run the production server:
```text
deno run --allow-read --allow-write --allow-net src/app.ts
```
> to use SSL see [Use HTTPS](#use-https) topic


## Use HTTPS

To use HTTPS you need to create a folder `src/ssl`, and add your certificate and key inside `src/ssl`, with the names `cert.pem` and `key.pem`.

Then, you need to start de server with the flag `--secure`:
```text
deno run --allow-read --allow-write --allow-net src/app.ts --secure
```

## API

### Create
_route_: **POST /clothes**

_request body_:
```yml
JSON:
  product: Description of the product - string
  brand: Product brand - string
  quantity: Quantity of product purchased - number
  provider: Product Provider - string
  price: Price of the product - float
  currentInventory: Current stock available - number
  size: Size of the product - string
  inputValues: Profit obtained - float
  outputValues: Product spending - float
```
e.g.:
```json
{
  "product": "CROPPED COURINO PRETO",
  "brand": "ANTONY",
  "quantity": 2,
  "provider": "Luana",
  "price": 20.00,
  "currentInventory": 2,
  "size": "G,M",
  "inputValues": 20.00,
  "outputValues": 20.00
}
```

_expected response status code_: **201**

### Index
_route_: **GET /clothes**

_request body_: **NO BODY**

_expected response status code_: **200**

_expected response body_:
```yml
ARRAY OF JSON:
  product: Description of the product - string
  brand: Product brand - string
  quantity: Quantity of product purchased - number
  provider: Product Provider - string
  price: Price of the product - float
  currentInventory: Current stock available - number
  size: Size of the product - string
  inputValues: Profit obtained - float
  outputValues: Product spending - float
```

### Show
_route_: **GET /clothes/:id**

_request body_: **NO BODY**

_expected response status code_: **200**

_expected response body_:
```yml
JSON:
  product: Description of the product - string
  brand: Product brand - string
  quantity: Quantity of product purchased - number
  provider: Product Provider - string
  price: Price of the product - float
  currentInventory: Current stock available - number
  size: Size of the product - string
  inputValues: Profit obtained - float
  outputValues: Product spending - float
```
### Delete
_route_: **DELETE /clothes/:id**

_request body_: **NO BODY**

_expected response status code_: **200**

### Update

_route_: **PUT /clothes/:id**

_request body_:
```yml
JSON:
  product: Description of the product - string
  brand: Product brand - string
  quantity: Quantity of product purchased - number
  provider: Product Provider - string
  price: Price of the product - float
  currentInventory: Current stock available - number
  size: Size of the product - string
  inputValues: Profit obtained - float
  outputValues: Product spending - float
```
e.g.:
```json
{
  "product": "CROPPED COURINO PRETO",
  "brand": "ANTONY",
  "quantity": 2,
  "provider": "Luana",
  "price": 20.00,
  "currentInventory": 2,
  "size": "G,M",
  "inputValues": 20.00,
  "outputValues": 20.00
}
```

_expected response status code_: **200**

