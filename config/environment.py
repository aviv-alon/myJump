import os

secret = os.getenv('SECRET', 'ta-dam!')
db_uri = os.getenv('DATABASE_URL', 'postgres://localhost:5432/myjump')
