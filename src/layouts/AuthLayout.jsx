import { Outlet } from "react-router-dom";

const AuthLayout = () => {
    return (
        <div>
            hello world!
            <Outlet></Outlet>
        </div>
    );
};

export default AuthLayout;