import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { useRouter } from "next/router";

export default function index() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errorMsg, setErrorMsg] = useState("");
    const router = useRouter();

    const handleRegister = async (e: { preventDefault: () => void }) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:5000/users", {
                name: name,
                email: email,
                password: password,
                confirmPassword: confirmPassword,
            });
            console.log("Register Berhasil");
            router.push("/");
        } catch (error) {
            setErrorMsg(error.response.data.msg);
        }
    };

    return (
        <div>
            <h1>Register</h1>
            <h1>{errorMsg}</h1>
            <form action="" onSubmit={handleRegister}>
                <label htmlFor="">Name</label>
                <br />
                <input
                    onChange={(e) => {
                        setName(e.target.value);
                    }}
                    type="text"
                    name="Name"
                    id=""
                />
                <br />
                <label htmlFor="">Email</label>
                <br />
                <input
                    onChange={(e) => {
                        setEmail(e.target.value);
                    }}
                    type="text"
                    name="Email"
                    id=""
                />
                <br />
                <label htmlFor="">Password</label>
                <br />
                <input
                    onChange={(e) => {
                        setPassword(e.target.value);
                    }}
                    type="text"
                    name="Password"
                    id=""
                />
                <br />
                <label htmlFor="">Confirm Password</label>
                <br />
                <input
                    onChange={(e) => {
                        setConfirmPassword(e.target.value);
                    }}
                    type="text"
                    name="confirmPassword"
                    id=""
                />
                <br />
                <button type="submit">Register</button>
            </form>
        </div>
    );
}
