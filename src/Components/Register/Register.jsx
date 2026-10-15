import axios from 'axios';
import { useFormik } from 'formik'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { ClipLoader } from 'react-spinners';
import * as yup from 'yup';
import { Helmet } from 'react-helmet';
import { toast } from 'sonner';
import { UserPlus } from 'lucide-react';
import Input from '../../ReusableComponents/Input';
import Button from '../../ReusableComponents/Button';

export default function Register() {
  const navigate = useNavigate();
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMassage, setErrorMassage] = useState(null);
  const [isClicked, setIsClicked] = useState(false);

  function registerUser(values) {
    setIsClicked(true);
    axios.post('https://ecommerce.routemisr.com/api/v1/auth/signup', values)
      .then(function () {
        setIsSuccess(true);
        setIsClicked(false);
        toast.success('Account created — see you at login!');
        setTimeout(() => {
          navigate('/login');
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
      name: '',
      email: '',
      phone: '',
      password: '',
      rePassword: '',
    },
    onSubmit: registerUser,
    validationSchema: yup.object().shape({
      name: yup.string().required("Name is Required").min(3, "Minmum is 3 character").max(12, "Max is 12 character"),
      email: yup.string().required("Email is Required").email("Invalid Email"),
      phone: yup.string().required("Phone is Required").matches(/^01[0125][0-9]{8}$/),
      password: yup.string().required("Password is Required").min(6).max(12),
      rePassword: yup.string().required("re Password is Required").oneOf([yup.ref("password")], "re Password dosn't matches"),
    }),
  });

  const fields = [
    { name: 'name', label: 'Name', type: 'text', placeholder: 'Your name' },
    { name: 'email', label: 'Email address', type: 'email', placeholder: 'you@souq.com' },
    { name: 'phone', label: 'Phone number', type: 'tel', placeholder: '01xxxxxxxxx' },
    { name: 'password', label: 'Password', type: 'password', placeholder: '••••••••' },
    { name: 'rePassword', label: 'Confirm Password', type: 'password', placeholder: '••••••••' },
  ];

  return (
    <>
      <Helmet><title>Register — souq.</title></Helmet>
      <div className="flex min-h-screen items-center justify-center bg-paper px-4 py-12 text-ink">
        <div className="hard-shadow w-full max-w-xl rounded-2xl border-2 border-ink bg-paper p-8">
          <span className="mb-4 inline-block rotate-2 rounded-lg border-2 border-ink bg-marigold px-3 py-1 text-xs font-bold uppercase tracking-widest text-ink">
            Join the bazaar
          </span>
          <h2 className="font-display text-3xl font-bold">Create your account</h2>
          <p className="mb-6 mt-1 text-ink/70">Fresh drops, easy orders, 10% off your first haul.</p>

          {isSuccess ? <div className="mb-4 rounded-xl border-2 border-ink bg-olive/10 p-3 text-sm font-semibold text-olive" role='alert'>
            You are successfully registered
          </div> : ''}
          {errorMassage ? <div className="mb-4 rounded-xl border-2 border-ink bg-brick/10 p-3 text-sm font-semibold text-brick" role='alert'>
            {errorMassage}
          </div> : ''}

          <div className="mb-6 grid grid-cols-2 gap-3">
            <button
              type="button"
              onClick={() => toast.message('Social signup is coming soon — use the form for now.')}
              className="rounded-xl border-2 border-ink bg-paper px-4 py-2.5 text-sm font-bold transition-transform hover:-translate-y-0.5 hover:bg-marigold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-persimmon focus-visible:ring-offset-2"
            >
              Sign up with Google
            </button>
            <button
              type="button"
              onClick={() => toast.message('Social signup is coming soon — use the form for now.')}
              className="rounded-xl border-2 border-ink bg-paper px-4 py-2.5 text-sm font-bold transition-transform hover:-translate-y-0.5 hover:bg-marigold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-persimmon focus-visible:ring-offset-2"
            >
              Sign up with Facebook
            </button>
          </div>

          <div className="mb-6 flex items-center gap-3" aria-hidden="true">
            <span className="h-0.5 flex-1 rounded bg-clay" />
            <span className="text-xs font-bold uppercase tracking-widest text-ink/50">or with email</span>
            <span className="h-0.5 flex-1 rounded bg-clay" />
          </div>

          <form onSubmit={registerFormik.handleSubmit}>
            {fields.map(({ name, label, type, placeholder }) => (
              <div key={name} className="mb-4">
                <label htmlFor={name} className="mb-1.5 block text-sm font-bold">{label}</label>
                <Input
                  value={registerFormik.values[name]}
                  onBlur={registerFormik.handleBlur}
                  onChange={registerFormik.handleChange}
                  type={type}
                  name={name}
                  id={name}
                  placeholder={placeholder}
                  required
                />
                {registerFormik.errors[name] && registerFormik.touched[name] ? <div className="mt-1.5 rounded-lg border border-ink bg-brick/10 p-2.5 text-sm font-semibold text-brick" role='alert'>
                  {registerFormik.errors[name]}
                </div> : ''}
              </div>
            ))}

            <Button type="submit" className="mt-2 w-full" size="lg" disabled={isClicked}>
              <UserPlus className="h-5 w-5" />
              {!isClicked ? 'Register' : <ClipLoader color="#FAF6F0" size={20} />}
            </Button>
          </form>
          <p className="mt-4 text-sm text-ink/70">
            Already have an account? <Link to="/login" className="font-bold text-persimmon underline-offset-4 hover:underline">Login</Link>
          </p>
        </div>
      </div>
    </>
  )
}
