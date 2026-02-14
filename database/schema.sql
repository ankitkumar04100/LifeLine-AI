-- LifeLine AI SQLite schema

-- Table to store SOS requests
CREATE TABLE IF NOT EXISTS sos_requests (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id TEXT NOT NULL,
    location TEXT NOT NULL,
    timestamp TEXT DEFAULT CURRENT_TIMESTAMP,
    status TEXT DEFAULT 'pending'
);

-- Table to store emergency incidents
CREATE TABLE IF NOT EXISTS emergencies (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    type TEXT NOT NULL,
    severity INTEGER NOT NULL,
    steps TEXT NOT NULL, -- JSON-encoded list of steps
    timestamp TEXT DEFAULT CURRENT_TIMESTAMP
);

-- Table to store user settings/preferences
CREATE TABLE IF NOT EXISTS user_settings (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id TEXT NOT NULL,
    preferred_language TEXT DEFAULT 'en',
    notifications_enabled INTEGER DEFAULT 1
);
