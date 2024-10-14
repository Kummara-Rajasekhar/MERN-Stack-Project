import { createContext, useEffect } from "react";
import { food_list } from "../../src/assets/assets";
export const Storecontext=createContext(null);

const StorecontextProvider=(props)=>{
    
    const [cartItems, setcartItems] = useState({})
    const addToCart =(itemId)=>{
        if(!cartItems[itemId]){
            setcartItems((prev)=>({...prev,[itemId]:1}))
        }
        else{
            setcartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        }
    }
    const removeFromCart=(itemId)=>{
        setcartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }

    
    const contextValue={
        food_list,
        cartItems,
        setcartItems,
        addToCart,
        removeFromCart
    }


    return 
    (
        <Storecontext.Provider value={contextValue}>
            {props.children}

       </Storecontext.Provider>
    )
}
export default StorecontextProvider;