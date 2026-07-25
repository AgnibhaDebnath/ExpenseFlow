import { createContext, useEffect, useState } from "react"
import { toast } from "react-toastify";
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [loading, setLoading] = useState(true);
    const checkAuth = async () => {
        try {


            const res = await fetch("http://localhost:3001/api/auth/me", {
                method: "GET",
                credentials: "include",
                headers: {
                    "Content-Type": "application/json"
                }
            })
            const data = await res.json();

            if (res.status == 401) {
                setUser(null);
                setIsAuthenticated(data.success);
                return
            }

            setUser(data.user);
            setIsAuthenticated(data.success)
        } catch (err) {

            setUser(null);
            setIsAuthenticated(false);

        } finally {
            setLoading(false)
        }
    }

    const logout = async () => {
        try {

            const res = await fetch("http://localhost:3001/api/auth/logout", {
                method: "POST",
                credentials: "include",
            });
            if (!res.ok) {
                throw new Error("Logout failed");
            }
            const data = await res.json();
            toast.success(data.message);
            setTimeout(async () => {
                await checkAuth();
            }, 2000)
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        checkAuth();
    }, [])


    return (
        <AuthContext.Provider value={{
            user,
            setUser,
            isAuthenticated,
            setIsAuthenticated,
            loading,
            setLoading,
            logout,
            checkAuth
        }}>
            {children}
        </AuthContext.Provider>
    )

}
export default AuthProvider