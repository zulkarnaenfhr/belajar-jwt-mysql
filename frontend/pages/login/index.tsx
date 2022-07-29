import React, { useState } from "react";
import { useRouter } from "next/router";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

export default function index() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMsg, setErrorMsg] = useState("");
    const router = useRouter();

    const auth = async (e: { preventDefault: () => void }) => {
        e.preventDefault();
        try {
            await axios.post(
                "http://localhost:5000/login",
                {
                    email: email,
                    password: password,
                },
                {
                    withCredentials: true,
                }
            );
            console.log("Login Berhasil");
            router.push("/");
        } catch (error) {
            setErrorMsg(error.response.data.msg);
        }
    };

    return (
        <div>
            <h1>Login</h1>
            <h1>{errorMsg}</h1>
            <form action="" onSubmit={auth}>
                <label htmlFor="">Email</label>
                <br />
                <input type="text" name="email" id="" onChange={(e) => setEmail(e.target.value)} />
                <br />
                <label htmlFor="">Password</label>
                <br />
                <input type="text" name="password" id="" onChange={(e) => setPassword(e.target.value)} />
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}
