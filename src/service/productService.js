const { query } = require('../client/postgresql');

const getProducts = async() => {
    try {
        const queryText = 'SELECT * FROM products';
        const result = await query(queryText);
        return result.rows;
    } catch (error) {
        console.error('Error executing query:', error);
        throw error;
    }
};

module.exports = {
    getProducts
};