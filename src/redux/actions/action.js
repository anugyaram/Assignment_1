export const ADD = (item) =>{
    return{
        type:"ADD_CART",
        payload: item

    }
}

//remove items
export const DTL = (id) =>{
    return{
        type:"RMV_CART",
        payload: id

    }
}

// remove individual item

export const REM = (item) => {
    return {
        type: "RMV_ONE",
        payload: item
    }
}