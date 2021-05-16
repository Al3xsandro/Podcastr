CREATE TABLE podcast(
  id SERIAL PRIMARY KEY,
  title varchar(255),
  members varchar(255),
  thumbnail varchar(255),
  description varchar(255),
  published_at DATE,
  slog varchar(255),
  url varchar(255),
  type varchar(255),
  duration int
);