# OEH Add Content

## Configuration

Copy `.env.example` to `.env` and enter your configuration.

## Run Dev Server

You need to run both, backend and frontend at the same time. Then go to http://localhost:9090.

### Frontend

```
cd frontend
npm install
npm run start
```

### Backend

```
cd backend
npm install
npm run start:dev
```

## Run Production Builds (Docker)

Run the Docker image and and serve the application on http://localhost:$PORT as configured in
`.env`:
```
./scripts/update-and-run.sh
```

Run other `docker-compose` commands through `./scripts/docker-compose.sh`, e.g.
```
./scripts/docker-compose.sh down
```

## Build

```
./scripts/build.sh
docker build -f docker/Dockerfile --tag=openeduhub/oeh-add-content:local .
```