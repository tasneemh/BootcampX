CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  birth_year SMALLINT NOT NULL,
  member_since TIMESTAMP NOT NULL DEFAULT Now()
);

CREATE TABLE pets (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  owner_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE
);

-- insert values into users table
INSERT INTO users VALUES (1, 'Sammy', 1987, '2012-08-01 01:24:32');
INSERT INTO users VALUES (2, 'Matt', 1995, '2019-02-12 10:40:12');

-- insert into pets table
INSERT INTO pets VALUES (1, 'Bluto', 1);
INSERT INTO pets VALUES (2, 'Peach', 1);