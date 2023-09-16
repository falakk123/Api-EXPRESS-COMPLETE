const { connect } = require('mongoose')
const { Brands } = require('./model')
require('dotenv').config()

//brands

const getBrand = async (req, res) => {

    const { brand } = req.query

    try {
        await connect(process.env.MONGO_URI)
        const brands = await Brands.findOne({ brand: brand })
        res.json(
            {
                brands: brands
            }
        )

    }

    catch (error) {
        res.json(
            {
                message: error.message
            }
        )

    }
};

const createBrands = async (req, res) => {
    const { brand, Images } = req.body;
    console.log({ brand, Images })


    try {
        await connect(process.env.MONGO_URI)
        const existingBrands = await Brands.exists({ brand: brand })

        if (existingBrands) {
            res.status(208).json({
                message: "Duplicate Brand",
                Product: Product
            })
        }

        if (!existingBrands) {
            res.status(208).json({
                message: "Missing Required brand",
                message: req.body
            })
        }

        else {
            await Brands.create({ brand, Images })
            const allBrands = await Brands.find()
            res.json({
                message: "Brand Created Successfully",
                Brands: Brands,
                Brands: allBrands
            })

        }
    }
    catch (error) {
        res.json({
            message: error.message
        })
    }
};

const deleteProductsByBrand = async (req, res) => {
    const { brand } = req.body;

    try {
        await connect(process.env.MONGO_URI);
        const deletedBrands = await Brands.deleteMany({ brand });

        if (deletedBrands.deletedCount === 0) {
            return res.status(404).json({
                message: 'Brand Not Found'
            });
        }

        res.json({
            message: `Deleted ${deletedBrands.deletedCount} products with the brand '${brand}'`,
            deletedBrands
        });
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

const updateBrandById = async (req, res) => {
    const brandsId = req.params.id;
    const { brand } = req.body;

    try {
        await connect(process.env.MONGO_URI);
        const updateBrandById = await Brands.findByIdAndUpdate(
            brandsId,
            { brand },
            { new: true }
        );

        if (updateBrandById) {
            res.json({
                message: "brand updated successfully.",
                brand: updateBrandById,
            });
        } else {
            res.json({
                message: "brand not found.",
            });
        }
    } catch (error) {
        res.json({
            message: error.message,
        });
    }
};

const getBrandById = async (req, res) => {
    const { _id } = req.query;

    try {
        await connect(process.env.MONGO_URI);
        const brand = await Brands.findById(_id);

        if (!brand) {
            return res.status(404).json({
                message: 'Brand not found'
            });
        }

        res.json({
            brand: brand
        });
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

module.exports = {
    createBrands, getBrand, getBrandById, updateBrandById, deleteProductsByBrand,
}