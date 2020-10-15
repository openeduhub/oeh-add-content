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

```
scripts/run-and-update.sh
```
This will run the public Docker image and on and serve the application on http://localhost:3010.

## Build

```
scripts/build.sh
```