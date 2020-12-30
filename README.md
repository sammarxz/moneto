# Moneto

## Usage

#### Clone and install dependencies
```bash
$ git clone git@github.com:sammarxz/moneto.git
$ cd moneto
$ yarn
```

#### Create docker container for postgres
```bash
$ docker run --name moneto_postgres -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres
```

#### Create moneto database
```bash
$ docker ps -a
$ docker exec -it <CONTAINER_ID> bash
```

**Inside the psql:**
```sql
CREATE DATABASE moneto;
```

#### Run build script for build ts files
```bash
$ yarn build
```

#### Run dev server
```bash
$ yarn dev:server
```
