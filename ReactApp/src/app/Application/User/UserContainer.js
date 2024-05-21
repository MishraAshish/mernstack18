//create the connect method and add that to the component
//react-redux
import { connect } from "react-redux";
import { AddUserToStore } from "../../../state/User/userAction";
import UserComponent from "./UserComponent.jsx";


let mapStateToProps = (store) => { //store is the redux states
    return {
        user : store.userReducer.user
    //user - will be accessed as props.user in component
    }
}

//mapDispatchToProps -- allows us to send data back to store to update in reducer
let mapDispatchToProps = (dispatch)=>{
    return {
        addUser : (user)=>{
            dispatch(AddUserToStore(user))
        }
    }
}


//connect accepts - mapStateToProps - for subscribing and mapDispatchToProps - for publishing
export default connect(mapStateToProps, mapDispatchToProps)(UserComponent)