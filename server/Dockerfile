FROM hayd/alpine-deno:1.5.2

WORKDIR /app

USER deno

COPY . .

RUN deno cache src/deps.ts

ADD . .

CMD ["run", "--allow-read", "--allow-write", "--allow-net", "src/app.ts"]

