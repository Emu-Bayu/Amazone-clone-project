import { Type } from "./Actiontype"

export const initialstate={
    basket:[]
}

export const reducer=(state,action)=>{
switch (action.type){
    case Type.ADD_TO_BASKET:
        // ckecke if the item exist 
        const existingItem =state.basket.find((item)=>item.id===action.item.id)
        if(!existingItem){return{
            ...state,
            basket:[...state.basket,{...action.item, amount:1}]
        }

        }else{
            const updateBasket= state.basket.map((item)=>
                
                item.id===action.item.id?{...item,amount:item.amount+1}:item
                
            ) 
            return{
                ...state,basket:updateBasket
            }  
        }
        case Type.REMOVE_FROM_BASKET:
        const index=state.basket.findIndex(item=> item.id===action.id)
        let newBasket= [...state.basket]
        if (index>=0){
            if(newBasket [index].amount>1){
             newBasket[index]= {...newBasket[index],amount:newBasket[index].amount-1}   
            }else{
                newBasket.splice(index,1)
            }

        }
        return{
            ...state,
            basket:newBasket
        }

    default :
    return state;
}

}

