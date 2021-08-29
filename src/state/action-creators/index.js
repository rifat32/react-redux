export const depositeMoney = (amount) => (dispatch) =>{
dispatch({
    type:"deposit",
    payload:amount
})
}
export const withdrawMoney = (amount) => (dispatch) =>{
    dispatch({
        type:"withdraw",
        payload:amount
    })
    }