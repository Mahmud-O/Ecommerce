import axios from 'axios';
import { useFormik } from 'formik'
import React, { useContext, useState } from 'react'
import { useNavigate, Link } from 'react-router-dom';
import * as yup from 'yup';
import { ClipLoader } from 'react-spinners';
import { AuthContext } from '@/Context/AuthContext/AuthContext';
import { Helmet } from 'react-helmet';
import { toast } from 'sonner';
import { LogIn } from 'lucide-react';
import Input from '../../ReusableComponents/Input';
import Button from '../../ReusableComponents/Button';

export default function Login() {
  const { setToken } = useContext(AuthContext);
  const navigate = useNavigate();
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMassage, setErrorMassage] = useState(null);
  const [isClicked, setIsClicked] = useState(false);

  function loginUser(values) {
    setIsClicked(true);
    axios.post('https://ecommerce.routemisr.com/api/v1/auth/signin', values)
      .then(function (x) {
        setToken(x.data.token);
        localStorage.setItem('tkn', x.data.token);
        setIsSuccess(true);
        setIsClicked(false);
        toast.success('Welcome back to the souq!');

        setTimeout(() => {
          navigate('/products');
        }, 2000);
      })
      .catch(function (x) {
        setErrorMassage(x.response.data.message);
        setIsClicked(false);
        setTimeout(() => {
          setErrorMassage(null);
        }, 2000);
      });
  }

  const registerFormik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: loginUser,
    validationSchema: yup.object().shape({
      email: yup.string().required("Email is Required").email("Invalid Email"),
      password: yup.string().required("Password is Required").min(6).max(12),
    }),
  });

  return (
    <>
      <Helmet><title>Login — souq.</title></Helmet>
      <div className="flex min-h-screen items-center justify-center bg-paper px-4 py-12 text-ink">
        <div className="hard-shadow w-full max-w-xl rounded-2xl border-2 border-ink bg-paper p-8">
          <span className="mb-4 inline-block -rotate-2 rounded-lg border-2 border-ink bg-marigold px-3 py-1 text-xs font-bold uppercase tracking-widest text-ink">
            Welcome back
          </span>
          <h2 className="font-display text-3xl font-bold">Login now</h2>
          <p className="mb-6 mt-1 text-ink/70">Pick up right where the bazaar left off.</p>

          {isSuccess ? <div className="mb-4 rounded-xl border-2 border-ink bg-olive/10 p-3 text-sm font-semibold text-olive" role='alert'>
            You are successfully logged in
          </div> : ''}
          {errorMassage ? <div className="mb-4 rounded-xl border-2 border-ink bg-brick/10 p-3 text-sm font-semibold text-brick" role='alert'>
            {errorMassage}
          </div> : ''}

          <div className="mb-6 grid grid-cols-2 gap-3">
            <button
              type="button"
              onClick={() => toast.message('Social login is coming soon — use email for now.')}
              className="rounded-xl border-2 border-ink bg-paper px-4 py-2.5 text-sm font-bold transition-transform hover:-translate-y-0.5 hover:bg-marigold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-persimmon focus-visible:ring-offset-2"
            >
              Continue with Google
            </button>
            <button
              type="button"
              onClick={() => toast.message('Social login is coming soon — use email for now.')}
              className="rounded-xl border-2 border-ink bg-paper px-4 py-2.5 text-sm font-bold transition-transform hover:-translate-y-0.5 hover:bg-marigold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-persimmon focus-visible:ring-offset-2"
            >
              Continue with Facebook
            </button>
          </div>

          <div className="mb-6 flex items-center gap-3" aria-hidden="true">
            <span className="h-0.5 flex-1 rounded bg-clay" />
            <span className="text-xs font-bold uppercase tracking-widest text-ink/50">or with email</span>
            <span className="h-0.5 flex-1 rounded bg-clay" />
          </div>

          <form onSubmit={registerFormik.handleSubmit}>
            <div className="mb-4">
              <label htmlFor="email" className="mb-1.5 block text-sm font-bold">Email address</label>
              <Input
                value={registerFormik.values.email}
                onBlur={registerFormik.handleBlur}
                onChange={registerFormik.handleChange}
                type="email"
                name="email"
                id="email"
                placeholder="you@souq.com"
                required
              />
              {registerFormik.errors.email && registerFormik.touched.email ? <div className="mt-1.5 rounded-lg border border-ink bg-brick/10 p-2.5 text-sm font-semibold text-brick" role='alert'>
                {registerFormik.errors.email}
              </div> : ''}
            </div>

            <div className="mb-6">
              <label htmlFor="password" className="mb-1.5 block text-sm font-bold">Password</label>
              <Input
                value={registerFormik.values.password}
                onBlur={registerFormik.handleBlur}
                onChange={registerFormik.handleChange}
                type="password"
                name="password"
                id="password"
                placeholder="••••••••"
                required
              />
              {registerFormik.errors.password && registerFormik.touched.password ? <div className="mt-1.5 rounded-lg border border-ink bg-brick/10 p-2.5 text-sm font-semibold text-brick" role='alert'>
                {registerFormik.errors.password}
              </div> : ''}
            </div>

            <Button type="submit" className="w-full" size="lg" disabled={isClicked}>
              <LogIn className="h-5 w-5" />
              {!isClicked ? 'Login' : <ClipLoader color="#FAF6F0" size={25} />}
            </Button>
          </form>
          <p className="mt-4 text-sm text-ink/70">
            Don&apos;t have an account? <Link to="/register" className="font-bold text-persimmon underline-offset-4 hover:underline">Register</Link>
          </p>
          <p className="mt-2 text-sm text-ink/70">
            <a href="/forget-password" className="font-bold text-olive underline-offset-4 hover:underline">Forget Password</a>
          </p>
        </div>
      </div>
    </>
  )
}
