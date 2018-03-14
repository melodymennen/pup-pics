CREATE TABLE users (
id SERIAL PRIMARY KEY, 
name TEXT, 
email TEXT
);

CREATE TABLE profiles ( 
id SERIAL PRIMARY KEY, 
user_id INTEGER references users(id),
profile_photo TEXT,
name TEXT, 
breed TEXT, 
age INTEGER, 
sex TEXT
);

CREATE TABLE photos ( 
id SERIAL PRIMARY KEY, 
user_id INTEGER references users(id),
profile_id INTEGER references profiles(id),
url TEXT,
timestamp TEXT
);

CREATE TABLE comments ( 
id SERIAL PRIMARY KEY, 
photo_id INTEGER references photos(id),
comment TEXT
);

CREATE TABLE likes ( 
id SERIAL PRIMARY KEY, 
photo_id INTEGER references photos(id),
user_id INTEGER references users(id)
);