require('dotenv').config();

function mapPresence(val) {
    const mapping = {
        typing: 'composing',
        online: 'available',
        recording: 'recording',
        paused: 'paused',
        offline: 'unavailable'
    };
    return mapping[val?.toLowerCase()?.trim()] || 'paused';
}

module.exports = {
    prefixes: process.env.PREFIX
        ? process.env.PREFIX.split('.').map(p => p.trim())
        : [''],

    NUMBER: process.env.YOUR_NUMBER || '2347054030542',
    MODE: (process.env.MODE || 'private').toLowerCase().trim(),
    WARN_LIMIT: process.env.WARNINGS || '3',
    ON: process.env.YOUR_NAME || 'FLASH-MD',
    ANTICALL: process.env.ANTICALL || 'off',
    ADM: process.env.ANTIDELETE || 'on',
    AR: process.env.AUTO_REACTION || 'off',

    AUTO_VIEW_STATUS: process.env.AUTO_READ_STATUS === 'on',
    AUTO_LIKE: process.env.AUTO_LIKE === 'on',
    AUTO_READ_MESSAGES: process.env.AUTO_READ_DM === 'on',
    HEROKU_API_KEY: process.env.HEROKU_API_KEY,
    HEROKU_APP_NAME: process.env.HEROKU_APP_NAME,
    sessionBase64: process.env.SESSION || 'eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV0NLOHVCYnRUbFk2T2U4VHcreldoL1dFc09ObG9FOGJvQXg2UVJMWDBGRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidjVTNmlVTHNYNW9ZYlQyMVJqUkJDeWFOZXIrVTNZdWNUWlN5bTh3SVFRaz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDSXozTHRoakpQY0VaV2JEdS83YTVxM3NOS25jbVF6Tm12MVFiT3E1QUdRPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJkc21jMTNKRGs2TGZmOG1NSXk4cGgxeDYwdjU4ZUlhbWxtOWxWQnFCZFNjPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlNCZEc5czJ4OTJaUWdnYkxvWXZuTEUvcTRrN1h1aTV3MEdiam45cUpFVXc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im84ZFk1OEVETEhBZFU2bVpQaEFyMVVhY2dBRTVYaWttVS9VaUZmWjNNM1U9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV0dTR0lSOGpxRXBRem82UmxXWWw0bE5KU2ZXaE1JaXk4YXlYMytnM1YxST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZnhoclR4K2Q1VDJqS1Y5Nk50NGpYMlBzN0lWTHBmZzBJTkZzZE0wMFUxcz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik9LVTlQUHBFMjZpUUxqZVJ6cHlvSWZIclRnNnBKU3lBNkdWeDRQcGsyUVM5Q3FsdXFoeTBvZ2tsUnpQZjdNNnlidlFEMlVOWlI0L1AvektrTlRXS0NnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NDUsImFkdlNlY3JldEtleSI6IlRSS3R0czRXcVlZSkw1WDRLT25xSk1RUUdaTHZhUzJQbDFxM2Z5S1VCMVE9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiMjM0NzA1NDAzMDU0MkBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiIwQ0JBRDhCNjExQjQ3RDdBQzgzNjgwREJGRjAxNkMxOCJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzU2MTI2ODM1fV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwicmVnaXN0ZXJlZCI6dHJ1ZSwicGFpcmluZ0NvZGUiOiJKN0daNVZaViIsIm1lIjp7ImlkIjoiMjM0NzA1NDAzMDU0Mjo1NUBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJUbXoiLCJsaWQiOiIxNDQ1MDg4NTU1MzM3ODA6NTVAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNQdTFnZFFERUx5OHNjVUdHQjhnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJDTlYzUGJITjJ0YUc1dTg4VWVUQ2xuRjRsSitTeFVyZTZ4NVlWbjhiRVVvPSIsImFjY291bnRTaWduYXR1cmUiOiJSZmx4Vkg3S3FCNDhseVpGZEs4SXJsUXoxS0RkVVN1aVFJYlE4OWR4eVJyc2VESDNuZHhyNDZnVzZjMmVJYlpuTjJrWmpSS2tFSDhrZ1lDZ2dQdEhCUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiMmhDaXdyYVJ5Rm1lK2p0UWtzVDNweUZlL1pCSUFMVzA2amtiaUYvT0RmdWdrL0pIaWcrU2ZRZkhIVmUwUUJxOHg0c2dZNW9CRTZuV3Rxc0RIY09HRFE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ3MDU0MDMwNTQyOjU1QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlFqVmR6Mnh6ZHJXaHVidlBGSGt3cFp4ZUpTZmtzVkszdXNlV0ZaL0d4RksifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBZ0lFZz09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc1NjEyNjc5NiwibGFzdFByb3BIYXNoIjoiM2dQVUprIiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFQQkkifQ==',
    timezone: 'Africa/Nairobi',

    USER_LID: process.env.YOUR_LID, 

    PRESENCE_DM: mapPresence(process.env.PRESENCE_DM || 'typing'),
    PRESENCE_GROUP: mapPresence(process.env.PRESENCE_GROUP || 'recording'),

    mapPresence
};
