import { useForm } from "react-hook-form";
import AuthLayout from "../../components/auth/AuthLayout.jsx";
import Input from "../../components/forms/Input.jsx";
import { loginUser } from "../../services/authService";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
function Login() {
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
    } = useForm();

    const onSubmit = async (data) => {

        try {

            const response = await loginUser(data);
            toast.success(
    "Login Successful",
    {
        duration: 1000,
    }
);

setTimeout(() => {
    navigate("/");
}, 1000);
           

        } catch (error) {

            console.log(
                "Login Error:",
                error.response?.data || error.message
            );

        }
    };

    return (
      <AuthLayout  title="Welcome Back">

 <form
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-4"
            >

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
                    className="
                        w-full
                        bg-red-600
                        hover:bg-red-700
                        text-white
                        py-3
                        rounded-lg
                        font-semibold
                        transition
                        cursor-pointer
                    "
                >
                    Login
                </button>

            </form>
      </AuthLayout>

    );
}

export default Login;