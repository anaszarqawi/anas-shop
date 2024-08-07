"use client";
import Button from "@/components/Button";
import NavMenu from "@/components/NavMenu";
import { useAuth } from "@/contexts/useAuth";
import { redirect } from "next/navigation";
import { useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from "zod";
import Input from "@/components/Input";

const profileSchema = z
  .object({
    name: z.string(),
    phone: z.string().min(10),
  })
  .required();

type Inputs = {
  name: string;
  phone: string;
};


const menu = [
  { name: 'Sign In', path: '/sign-in' },
  { name: 'Sign Up', path: '/sign-up' },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { signInWithGoogle, loading, user, profileIsComplete, updateProfile } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    watch,
  } = useForm({
    resolver: zodResolver(profileSchema),
  });

  useEffect(() => {
    if (user) {
      console.log('User:', user);
      profileIsComplete && redirect('/');
    }
  }, [user, profileIsComplete]);

  const onSubmit = async (data: any) => {
    console.log(data);
    await updateProfile(data.name, data.phone);
  }

  return (
    <div className="flex flex-col items-center justify-center gap-4 mt-44 w-1/4 mx-auto">
      {
        !user && (
          <>
            <NavMenu menu={menu} />
            <Button className="mt-6" label="Continue with Google" alt="google-logo" icon='/assets/svg/logo-google.svg' loading={loading} onClick={signInWithGoogle} />
            <div className="text-sm text-zinc-600">
              or
            </div>
            {children}
          </>
        )
      }
      {
        user && !profileIsComplete && (
          <>
            <div className="text-4xl text-zinc-50">
              Complete your profile
            </div>
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
                type="tel"
                name="phone"
                label="Phone"
                placeholder="Enter your phone number"
                width="full"
                register={register}
                error={errors.phone}
              />
              <Button type="submit" label="Done" disabled={!isValid} />
            </form>
          </>

        )}
    </div>
  );
}