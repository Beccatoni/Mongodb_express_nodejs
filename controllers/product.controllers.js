const ProductModel = require('../models/product.model');

const create = async (req, res, next) => {
    try {
        console.log(req.body);
        const newProduct = new ProductModel(req.body); 
        const savedProduct = await newProduct.save();
        console.log(savedProduct);

        res.status(201).json({
            message: 'Product saved successfully',
            product: savedProduct, 
        });
    } catch (error) {
        if (error.name === 'ValidationError') {
        
            const validationErrors = {};
            for (const field in error.errors) {
                validationErrors[field] = error.errors[field].message;
            }
            return res.status(400).json({ errors: validationErrors });
        }
       
        console.error(error); 
        res.status(500).send("Failed to save product");
    }
};

module.exports = {
    create,
};
