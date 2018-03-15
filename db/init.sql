CREATE TABLE users (
id SERIAL PRIMARY KEY, 
username TEXT UNIQUE,
password TEXT
);

CREATE TABLE profiles ( 
id SERIAL PRIMARY KEY, 
user_id INTEGER references users(id) ON DELETE CASCADE,
profile_photo TEXT,
name TEXT, 
breed TEXT, 
age INTEGER, 
sex TEXT
);

CREATE TABLE photos ( 
id SERIAL PRIMARY KEY, 
user_id INTEGER references users(id) ON DELETE CASCADE,
profile_id INTEGER references profiles(id) ON DELETE CASCADE,
url TEXT,
timestamp TEXT
);

CREATE TABLE comments ( 
id SERIAL PRIMARY KEY, 
photo_id INTEGER references photos(id) ON DELETE CASCADE,
comment TEXT
);

-- CREATE TABLE likes ( 
-- id SERIAL PRIMARY KEY, 
-- photo_id INTEGER references photos(id) ON DELETE CASCADE,
-- user_id INTEGER references users(id) ON DELETE CASCADE
-- );
