import React from "react";

import { FaBell } from "react-icons/fa";

function Notification() {
    return (
        <div className="position-relative">
            <FaBell className="color-gray" size={18} />
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            9+ <span className="visually-hidden">mensagem não lidas</span>
            </span>
        </div>
    );
}

export default Notification;