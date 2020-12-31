# Back-end

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