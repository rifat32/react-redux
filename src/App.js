import logo from './logo.svg';
import './App.css';
import {useSelector,useDispatch} from "react-redux"
import {bindActionCreators} from "redux";
import {actionCreators} from "./state"

function App() {
  const account = useSelector(state => state.account)
  console.log(account)
   const dispatch = useDispatch()
   const {depositeMoney,withdrawMoney} = bindActionCreators(actionCreators,dispatch)
 
  return (
    <div className="App">
    <button onClick={() => depositeMoney(1000)}>deposite</button>
    <button onClick={() => withdrawMoney(1000)}>withdraw</button>
    <p>{account}</p>
    </div>
  );
}

export default App;
