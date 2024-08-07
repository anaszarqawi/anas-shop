'use client';
import Input from '@/components/Input';
import { useAuth } from '@/contexts/useAuth';
import Image from 'next/image';
import React, { useEffect } from 'react';
import { useForm, SubmitHandler, useController } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import Button from '@/components/Button';

const profileSchema = z.object({
  email: z.string().email(),
  name: z.string(),
  phone: z.string().min(10),
});

type FormValues = {
  email: string;
  name: string;
  phone: string;
};

const Profile = () => {
  const { user, loading } = useAuth();

  const {
    register,
    handleSubmit,
    setFocus,
    formState: { errors, isValid, isDirty },
    watch,
    setValue,
  } = useForm({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      email: user?.email || '',
      name: user?.name || '',
      phone: user?.phoneNumber || '',
    },
  });

  const onSubmit = (data: any) => {
    console.log(data);
  };

  // useEffect(() => {
  //   if (user) {
  //     setValue('email', user.email);
  //     setValue('name', user.name || '');
  //     setValue('phone', user.phoneNumber || '');
  //   }
  // }, [user, setValue]);

  useEffect(() => {
    console.log(isDirty);
  }, [isDirty]);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center justify-center gap-4 w-full">
      <Input type="email" name="email" label="Email" value={watch('email')} register={register} error={errors.email} />
      <Input type="text" name="name" label="Name" value={watch('name')} register={register} error={errors.name} />
      <Input type="text" name="phone" label="Phone" value={watch('phone')} register={register} error={errors.phone} />
      <Button type="submit" label="Update Profile" width="fit" disabled={!isDirty} loading={loading} />
    </form>
  );
};

export default Profile;
