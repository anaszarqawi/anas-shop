"use client";

import Button from "@/components/Button";
import Input from "@/components/Input";

import NavMenu from "@/components/NavMenu";
import { useAuth } from "@/contexts/useAuth";
import React from 'react';
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from "zod";

const loginSchema = z
  .object({
    name: z.string(),
    email: z.string().email(),
    password: z.string().min(8),
  })
  .required();

type Inputs = {
  name: string;
  email: string;
  password: string;
};

const SignUp = () => {
  const { signInWithGoogle } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    watch,
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data: any) => console.log(data); // TODO: Add login logic


  const handleLogin = async () => {
    await signInWithGoogle();
  }



  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center justify-center gap-4 w-full">
      <Input
        type="text"
        name="name"
        label="Name"
        placeholder="Enter your name"
        width="full"
        register={register}
        error={errors.name}
      />
      <Input
        type="email"
        name="email"
        label="Email"
        placeholder="Enter your email"
        width="full"
        register={register}
        error={errors.email}
      />
      <Input
        type="password"
        name="password"
        label="Password"
        placeholder="Enter your password"
        width="full"
        register={register}
        error={errors.password}
      />
      <Button type="submit" label="Create account" priority="primary" theme="black" width="full" disabled={!isValid} />
    </form>
  );
};

export default SignUp;