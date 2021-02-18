export const initialState = {
    basket :[],
    user : null,
};
//Selector
export const getBasketTotal = (basket) => 
{
    let total =0;
    for (let i = 0; i < basket.length; i++) {
        total = total + basket[i].price;
    }
    return total;
}
 

const reducer = (state, action) =>{
    console.log(action);
    switch(action.type){
        case 'ADD_TO_BASKET':
            return{
                ...state,
                basket : [...state.basket, action.item],
            };
        case 'REMOVE_FROM_BASKET':
            const index = state.basket.findIndex(
                (basketItem) => basketItem.id === action.id
            );
            let newbasket = [...state.basket];
            if(index>=0){
                newbasket.splice(index, 1);
            }else{
                console.warn(`Cant remove from basket : ${action.id}`)
            }
            return {
                ...state,
                basket : newbasket
            };
        case  'SET_USER' :
            return {
                ...state,
                user : action.user
            } 
        case 'EMPTY_BASKET':
            return {
                ...state,
                    basket:[],
            }    
        default:
            return state;
    }
}

export default reducer;
