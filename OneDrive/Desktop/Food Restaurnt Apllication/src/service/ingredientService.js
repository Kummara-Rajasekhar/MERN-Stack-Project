const IngredientCategory=require("../models/ingredientcategory.model");
const IngredientsItem=require("../models/ingredientsitem.model");
const Restaurant=require("../models/restaurant.model");


module.exports={
    async createIngredientCategory(name,restaurantId){
        try{
            let category= await IngredientCategory.findOne({
                restaurant:restaurantId,
                name:name,
            });
            if(category){
                return category;
            }
            const restaurant= await Restaurant.findById(restaurantId);
            if(!restaurant){
                throw new Error(` Restaurant not found with ID ${restaurantId}`);
            }
             category=new IngredientCategory({
                name:name,
                restaurant:restaurantId
             });
             const createdCategory= await category.save();
             return createdCategory;
        }catch(error){
              throw new Error(` Failed to create ingredients category : ${error.message}`);

        }
    },

    async findIngredientsCategoryById(id){
        try{
            const category=await IngredientCategory.findById(id);
        if(!category){
            throw new Error(` Ingredients category not found with ID ${id}`);
        }
        return category;
        }catch(error){
            throw new Error(` Failed to find ingredients category with ID ${id} : ${error.message}`);
        }
    },
    async findIngredientsCategoryByRestaurantId(id){
        try{
            const categories=await IngredientCategory.find({restaurant:restaurantId});
        if(!category){
            throw new Error(` Ingredients category not found with ID ${id}`);
        }
        return categories;
        }catch(error){
            throw new Error(` Failed to find ingredients categories with ID ${restaurantId} : ${error.message}`);
        }
    },

    async findRestaurnatIngredients(restaurantId){
        try{
            const items=await IngredientsItem.find(restaurantId);
        if(!category){
            throw new Error(` Ingredients category not found with ID ${id}`).populate("category");
        }
        return items;
        }catch(error){
            throw new Error(` Failed to find ingredients category with ID ${restaurantId} : ${error.message}`);
        }
    },


    async createIngradientsItem(restaurantId,ingredientName,ingredientcategoryId){
        try{
            const category= await this.findIngredientsCategoryById(ingredientcategoryId);
            if(!category){
                throw new Error(" Ingredidents category not found with id" + ingredientcategoryId);
            }
            let item= await IngredientsItem.findOne({
                restaurant:restaurantId,
                name:ingredientName,
                category:category._id,
            });
            if(item){
                return item;
            }

            const restaurant= await Restaurant.findById(restaurantId);
            if(!restaurant){
                throw new Error(` Restaurant not found with ID ${restaurantId}`);
            }

            item=new IngredientsItem({
                name:ingredientName,
                restaurant:restaurantId,
                category:category._id,
            });
            const savedItem= await item.save();
            category.ingredients.push(savedItem.id);
            await category.save();
            return savedItem;
        }catch(error){
            throw new Error(` Failed to find ingredients item : ${error.message}`);
        }
    },



    async updateStoke(id){
        try{
             const item=await IngredientsItem.findById(id).populate("category");
             if(!item){
                throw new Error(` Ingredient not found with ID ${id}`);
             }
             item.inStoke=!item.inStoke;
             await item.save();
             return item;
        }catch(error){
            throw new Error(` Failed to update ingredient stoke status with ID ${id} : ${error.message}`);
        }
    },





};