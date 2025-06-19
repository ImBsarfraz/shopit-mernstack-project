import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { useForgotPasswordMutation } from "../../redux/api/userApi";
import MetaData from "../layouts/MetaData";

const ForgotPassword = () => {
    const [email, setEmail] = useState('');

    const navigate = useNavigate();

    const [forgotPassword, { isLoading, error, isSuccess }] = useForgotPasswordMutation();

    const { isAuthenticated } = useSelector((state) => state.auth);

    useEffect(() => {
        if(isAuthenticated) {
            navigate("/");
        }
        if(error) {
            toast.error(error?.data?.message);
        }
        if(isSuccess) {
            toast.success("Email Is Sent, Please Check Your Inbox!");
        }
    }, [error, isAuthenticated, isSuccess]);

    const submitPassword = (e) => {
        e.preventDefault();
        forgotPassword({ email });
    }

    return(
        <>
        <MetaData title={"Forgot Password"}/>
        <div class="row wrapper">
            <div class="col-10 col-lg-5">
                <form
                    class="shadow rounded bg-body"
                   onSubmit={submitPassword}
                >
                    <h2 class="mb-4">Forgot Password</h2>
                    <div class="mt-3">
                        <label for="email_field" class="form-label">Enter Email</label>
                        <input
                            type="email"
                            id="email_field"
                            class="form-control"
                            name="email"
                            value={email}
                            onChange={(e)=> setEmail(e.target.value)}
                        />
                    </div>

                    <button
                        id="forgot_password_button"
                        type="submit"
                        class="btn w-100 py-2"
                        disabled={isLoading}
                    > 
                        {isLoading ? "Sending..." : "Send Email"}
                    </button>
                </form>
            </div>
        </div>
        </>
    )
}

export default ForgotPassword;