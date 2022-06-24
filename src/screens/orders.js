import React, { Component } from "react";
import '../screens/orderstyle.css';
import {Form, Row} from 'react-bootstrap';
import Pending from "./pendingOrder";
import Ongoing from "./ongoingOrder";
import Complete from "./completedOrder";



class Orders extends Component{
    render(){
        return(
            <div className="conatainer">
               
               <div className="list-pending"><Pending/></div>
               <div className="list-ongoing"><Ongoing/></div>
               <div className="list-complete"><Complete/></div>
               
            </div>
        );
    }
}

export default Orders;