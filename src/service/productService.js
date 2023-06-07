const { query } = require('../client/postgresql');

const getProducts = async() => {

    const queryText = 'SELECT * FROM products';
    const result = await query(queryText);
    return result.rows;
    
};

module.exports = {
    getProducts
};