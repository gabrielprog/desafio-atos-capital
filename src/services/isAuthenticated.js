import { jwtDecode } from "jwt-decode";
import api from "./coreApi";

async function checkToken() {
    const token = localStorage.getItem("token");
    
    if (token) {
        const decodedToken = jwtDecode(token);
      
        try {
            const response = await api.post("/auth/login", decodedToken);
            if (response.status === 200) {
                return true;
            }
        } catch (error) {
            console.log(error);
            return false;
        }
    }

    return false;
}

const isAuthenticated = () => {
    return checkToken();
};

export default isAuthenticated;