const BASE_FOLDER = process.env.PROCESS_TYPE == 'dev' ? './src' : './dist'
const BASE_EXT = process.env.PROCESS_TYPE == 'dev' ? 'ts' : 'js'

module.exports = {
  type: 'postgres',
  url: process.env.DATABASE_URL,
  entities: [
    `${BASE_FOLDER}/models/*.${BASE_EXT}`
  ],
  migrations: [
    `${BASE_FOLDER}/database/migrations/*.${BASE_EXT}`
  ],
  cli: {
    migrationsDir: './src/database/migrations',
    entitiesDir: './src/models'
  }
}
