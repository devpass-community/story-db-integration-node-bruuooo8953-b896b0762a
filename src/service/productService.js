const { query } = require('../client/postgresql');

const getProducts = async() => {

    
    return query('SELECT * FROM products')
    
    
};

module.exports = {
    getProducts
};