import {useState, useEffect, useMemo} from "react";
import validateSession from "../repository/validate-session";
import useSessionStore from "../store/sesion.statate";

const useValidateSession = () => {
    const { singIn, setLoading } = useSessionStore();
    const [email, setEmail] = useState('');
    const [password, setPass] = useState('');


    const isActiveBtn = useMemo(() => email !== '' && password !== '', [email, password]);

    // methods
    const handleSubmit = (email, password) => {
        return validateSession.validateSession(email, password);
    }

    return ({
        email,
        setEmail,
        password,
        setPass,
        handleSubmit,
        isActiveBtn,
    });
}
export default useValidateSession;
