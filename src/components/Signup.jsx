import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const Signup = ({ setTab }) => {
  const loading = false;

  const signupSchema = z
    .object({
      username: z
        .string()
        .min(3, { message: "Username must contain at least 3 letters" }),
      email: z.string().email("Invalid email address"),
      password: z
        .string()
        .min(8, { message: "Password must contain at least 8 letters" }),
      confPassword: z
        .string()
        .min(8, { message: "Password must contain at least 8 letters" }),
    })
    .refine((data) => data.password === data.confPassword, {
      message: "Confirm Password does not match Password",
      path: ["confPassword"],
    });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(signupSchema),
    mode: "onBlur",
  });

  const onSubmit = (data) => {
    console.log({ ...data, image: data.image[0] });
    alert("Signup successful! ");
    setTab("login");
    
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <h1 className="font-semibold text-3xl">Register </h1>
        <div className="flex flex-col gap-1">
          <label htmlFor="email" className="text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="you@example.com"
            {...register("email")}
            className="px-3 py-2 rounded-md border border-gray-300  focus:border-black text-sm"
          />
          {errors.email && (
            <p className="text-xs text-red-500">{errors.email.message}</p>
          )}
        </div>
        <div className="flex flex-col gap-1">
          <label
            htmlFor="username"
            className="text-sm font-medium text-gray-700"
          >
            Username
          </label>
          <input
            id="username"
            type="text"
            placeholder="Username"
            {...register("username")}
            className="px-3 py-2 rounded-md border border-gray-300 focus:border-black text-sm"
          />
          {errors.username && (
            <p className="text-xs text-red-500">{errors.username.message}</p>
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
            placeholder="••••••••"
            {...register("password")}
            className="px-3 py-2 rounded-md border border-gray-300 text-sm"
          />
          {errors.password && (
            <p className="text-xs text-red-500">{errors.password.message}</p>
          )}
        </div>

        <div className="flex flex-col gap-1">
          <label
            htmlFor="confPassword"
            className="text-sm font-medium text-gray-700"
          >
            Confirm Password
          </label>
          <input
            id="confPassword"
            type="password"
            placeholder="••••••••"
            {...register("confPassword")}
            className="px-3 py-2 rounded-md border border-gray-300  focus:border-black text-sm"
          />
          {errors.confPassword && (
            <p className="text-xs text-red-500">
              {errors.confPassword.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          disabled={loading}
          className="mt-3 w-full rounded-full bg-orange-500 py-2.5 text-white text-sm font-semibold hover:bg-orange-600 transition disabled:opacity-50"
        >
          {loading ? "Signing up..." : "Sign Up"}
        </button>
      </form>

      <div className="mt-6 flex justify-center gap-1 text-sm">
        <span className="text-gray-600">Already have an account?</span>
        <button
          type="button"
          onClick={() => setTab("login")}
          className="font-medium text-black hover:underline"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Signup;
