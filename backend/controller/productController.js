import uploadOnCloudinary from "../config/cloudinary.js";
import Product from "../model/productModel.js";

export const addProduct = async (req, res) => {
  try {
    let { name, description, price, category, subcategory, sizes, bestseller } = req.body;
 
 let image1 = await uploadOnCloudinary(req.files.image1[0].path)
 let image2 = await uploadOnCloudinary(req.files.image2[0].path)
 let image3 = await uploadOnCloudinary(req.files.image3[0].path)
 let image4 = await uploadOnCloudinary(req.files.image4[0].path);

 let productData ={
    name,
      description,
      price:Number(price),
      category,
      subcategory,
      sizes :JSON.parse(sizes), 
      bestseller:bestseller === "true" ? true :  false,
      date:Date.now(),
      image1,
      image2,
      image3,
      image4
        
    }


    const product = await Product.create(productData)
    return res.status(201).json({message:"product add successfullly",product})
    
} catch (error) {
    console.log("Add Product Error")
    return res.status(500).json({message:`add product error ${error}`})

  }
};
