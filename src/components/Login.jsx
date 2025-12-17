import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";

const Login = ({ setTab }) => {
  const navigate = useNavigate();
  const loading = false;

  const loginSchema = z.object({
    email: z.string().email("Invalid email address"),
    password: z.string().min(8, {
      message: "Password must contain at least 8 letters",
    }),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema), mode: "onBlur" 
  });

  const onSubmit = (data) => {
    console.log(data);
    alert("Login successful! ");
    navigate("/");
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <h1 className="font-semibold text-3xl">Login </h1>
        <div className="flex flex-col gap-1">
          <label htmlFor="email" className="text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            id="email"
            type="email"
            {...register("email")}
            placeholder="you@example.com"
            className="px-3 py-2 rounded-md border border-gray-300
              focus:border-black text-sm"
          />
          {errors.email && (
            <p className="text-xs text-red-500">{errors.email.message}</p>
          )}
        </div>

        <div className="flex flex-col gap-1">
          <label
            htmlFor="password"
            className="text-sm font-medium text-gray-700"
          >
            Password
          </label>
          <input
            id="password"
            type="password"
            {...register("password")}
            placeholder="••••••••"
            className="px-3 py-2 rounded-md border border-gray-300
              focus:border-black text-sm"
          />
          {errors.password && (
            <p className="text-xs text-red-500">{errors.password.message}</p>
          )}
        </div>

        <div className="flex items-center gap-2 mt-2">
          <input
            id="remember"
            type="checkbox"
            {...register("remember")}
            className="accent-black"
          />
          <label htmlFor="remember" className="text-sm text-gray-600">
            Remember me
          </label>
        </div>
        <button
          type="submit"
          disabled={loading}
          className="mt-3 w-full rounded-full bg-orange-500 py-2.5 text-white text-sm font-semibold
            hover:bg-orange-600 transition disabled:opacity-50"
        >
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>

      <div className="mt-6 flex justify-center gap-1 text-sm">
        <span className="text-gray-600">Not registered yet?</span>
        <button
          type="button"
          onClick={() => setTab("signup")}
          className="font-medium text-black hover:underline"
        >
          Create an account
        </button>
      </div>
    </div>
  );
};

export default Login;
