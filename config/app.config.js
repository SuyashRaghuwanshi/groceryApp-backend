const MONGO_DB_CONFIG = {
    DB: "mongodb://localhost/groceryApp",
    PAGE_SIZE: 10,
};
const STRIPE_CONFIG = {
    STRIPE_KEY: process.env.STRIPE_KEY,
    CURRENCY: "inr",
}

module.exports = {
    MONGO_DB_CONFIG,
    STRIPE_CONFIG
};