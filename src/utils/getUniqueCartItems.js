export const getUniqueCartItems=(cart)=>{
    const flag={}
    const uniqueCart=[]
    cart.forEach(element => {
        if(!flag[element.id]){
            uniqueCart.push(element)
        }
        flag[element.id] = true
    });
    return uniqueCart;
}