import { useForm } from "react-hook-form";
import { registerUser } from "../../services/authService.js";
import Input from "../../components/forms/Input.jsx";
import AuthLayout from "../../components/auth/AuthLayout.jsx";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();
  const {
        register,
        handleSubmit
    } = useForm();

    const onSubmit = async (data) => {

    try {

        const response =
            await registerUser(data);

            toast.success(
            "Registration Successful",
            {
        duration: 1500,
    }
);

setTimeout(() => {
    navigate("/login");
}, 1500);

        // console.log(response);

    } catch (error) {

        toast.error(
        error.response?.data?.message ||
        "Registration Failed"
    );

    }
};

    return (
        <AuthLayout title="Create Account">

            <form
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-4"
            >

                <Input
                    type="text"
                    placeholder="Full Name"
                    {...register("fullName")}
                />

                <Input
                    type="text"
                    placeholder="Username"
                    {...register("username")}
                />

                <Input
                    type="email"
                    placeholder="Email"
                    {...register("email")}
                />

                <Input
                    type="password"
                    placeholder="Password"
                    {...register("password")}
                />

                <button
                    type="submit"
                    className="
                        w-full
                        bg-red-600
                        hover:bg-red-700
                        text-white
                        py-3
                        rounded-lg
                        font-semibold
                        cursor-pointer
                        transition
                    "
                >
                    Create Account
                </button>

            </form>

            <p className="text-zinc-400 text-center mt-6">
                Already have an account?{" "}
                <Link
                    to="/login"
                    className="text-red-500 hover:text-red-400"
                >
                    Login
                </Link>
            </p>

        </AuthLayout>
    );


}

export default Register;