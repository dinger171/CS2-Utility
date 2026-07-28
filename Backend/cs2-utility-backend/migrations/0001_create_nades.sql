CREATE TABLE nades (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    map TEXT NOT NULL,
    type TEXT NOT NULL,
    source TEXT NOT NULL,
    destination TEXT NOT NULL,
    video_url TEXT,
    image_url TEXT
);
