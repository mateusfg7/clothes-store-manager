# Back-end
- [Init Server](#init-server)
- [API](#api)
  - [Create](#create)
  - [Index](#index)
  - [Show](#show)
  - [Delete](#delete)
## Init server
Create a `.env` file and add the follow environment variables:
```dotenv
PORT=[YOUR PORT NUMBER]
```
follow the `.env.example` model.

Install [Denon](https://deno.land/x/denon):
```bash
$ deno install -qAf --unstable https://deno.land/x/denon@2.4.4/denon.ts
```
and run the development server:
```bash
denon dev
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
