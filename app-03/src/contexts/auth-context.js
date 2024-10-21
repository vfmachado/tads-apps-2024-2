import { createContext, useEffect, useState } from 'react';

const AuthContext = createContext(null);


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const storagedUser = localStorage.getItem('@app:user');
        if (storagedUser) {
            setUser(JSON.parse(storagedUser));
        }
    }, []);

    const login = (email, senha) => {
        console.log({ email, senha})
        setUser({ email });
        localStorage.setItem('@app:user', JSON.stringify({ email }));
    };

    const logout = () => {
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

export { AuthContext, AuthProvider };