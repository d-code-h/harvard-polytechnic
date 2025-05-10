'use client';

import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { usePaystackPayment } from 'react-paystack';

type Reference = {
  message: 'Approved' | 'Declined';
  redirecturl: string;
  reference: string;
  status: 'success' | 'declined';
  trans: string;
  transaction: string;
  trxref: string;
};

// Department List
const departments = [
  'Accountancy',
  'Business Administration and Management',
  'Computer Engineering',
  'Computer Science',
  'Mass Communication',
  'Public Administration',
  'Science Laboratory Technology',
  'Software and Web Development',
  'Networking and Cloud Computing',
  'Cybersecurity and Data Protection',
  'Artificial Intelligence',
  'Journalism and Media Studies',
  'Film and Multimedia Production',
  'Strategic Communication and Media Studies',
  'Physics/Electronics',
  'Estate Management',
  'Statistics',
  'Electrical and Electronic Engineering',
  'Biology/Microbiology',
];

// Zod schema for validation
const schema = z
  .object({
    surname: z.string().min(1, 'Surname is required'),
    firstName: z.string().min(1, 'First Name is required'),
    otherName: z.string(),
    email: z
      .string()
      .email('Invalid email address')
      .min(1, 'Email is required'),
    phone: z.string().min(1, 'Phone number is required'),
    category: z.string().min(1, 'Category is required'),
    program: z.string().min(1, 'Program is required'),
    gender: z.string().min(1, 'Gender is required'),
    department: z.string().min(1, 'Department is required'),
    password: z.string().min(1, 'Password is required'),
    confirmPassword: z.string().min(1, 'Please confirm your password'),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  });

// Initial form data
const ApplicationForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const publicKey = process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY;

  const {
    handleSubmit,
    control,
    // setValue,
    watch,
    register,
    formState: { errors },
    getValues,
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      surname: '',
      firstName: '',
      otherName: '',
      email: '',
      phone: '',
      category: '',
      program: '',
      gender: '',
      department: '',
      password: '',
      confirmPassword: '',
    },
  });

  const config = {
    reference: new Date().getTime().toString(),
    email: getValues().email,
    amount: 1040000, // Amount in kobo
    metadata: {
      name: getValues().firstName + ' ' + getValues().surname,
      phone: getValues().phone,
    },
    publicKey: publicKey,
    onSuccess: (reference: Reference) => {
      // Implementation for whatever you want to do with reference and after success call.
      console.log('Success', reference);
    },

    onClose: () => {
      // implementation for  whatever you want to do when the Paystack dialog closed.
      console.log('closed');
    },
  };
  const initializePayment = usePaystackPayment(config);

  // Watch for password and confirmPassword to compare
  const watchPassword = watch('password');
  const watchConfirmPassword = watch('confirmPassword');

  const handleFormSubmit = () => {
    const mode = process.env.NEXT_PUBLIC_ENV;
    if (mode === 'test') {
      // simulate payment or redirect to test gateway
      initializePayment(config);
    } else {
      // proceed with live gateway
    }
  };

  return (
    <div className="min-h-screen px-4 py-10 flex justify-center bg-gray-50">
      <div className="w-full max-w-3xl bg-white rounded-xl shadow-lg p-8 space-y-6">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-4">
          Application Form
        </h1>
        {process.env.NEXT_PUBLIC_ENV === 'test' && (
          <div className="text-yellow-600 text-sm text-center">
            You are in test mode. Payments are not real.
          </div>
        )}

        <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Category */}
            <div className="space-y-1">
              <Label>Category</Label>
              <Controller
                control={control}
                name="category"
                render={({ field }) => (
                  <Select
                    {...field}
                    onValueChange={(value) => field.onChange(value)}
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select Category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Full Time">Full Time (FT)</SelectItem>
                      <SelectItem value="Part Time">Part Time (PT)</SelectItem>
                    </SelectContent>
                  </Select>
                )}
              />
              {errors.category && (
                <p className="text-sm text-red-600">
                  {errors.category?.message}
                </p>
              )}
            </div>

            {/* Program */}
            <div className="space-y-1">
              <Label>Program</Label>
              <Controller
                control={control}
                name="program"
                render={({ field }) => (
                  <Select
                    {...field}
                    onValueChange={(value) => field.onChange(value)}
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select Program" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="ND">National Diploma (ND)</SelectItem>
                      <SelectItem value="HND">
                        Higher National Diploma (HND)
                      </SelectItem>
                    </SelectContent>
                  </Select>
                )}
              />
              {errors.program && (
                <p className="text-sm text-red-600">
                  {errors.program?.message}
                </p>
              )}
            </div>

            {/* Names */}
            <div className="space-y-1">
              <Label>Surname</Label>
              <Input {...register('surname')} placeholder="Enter Surname" />
              {errors.surname && (
                <p className="text-sm text-red-600">
                  {errors.surname?.message}
                </p>
              )}
            </div>

            <div className="space-y-1">
              <Label>First Name</Label>
              <Input
                {...register('firstName')}
                placeholder="Enter First Name"
              />
              {errors.firstName && (
                <p className="text-sm text-red-600">
                  {errors.firstName?.message}
                </p>
              )}
            </div>

            <div className="space-y-1">
              <Label>Other Name</Label>
              <Input
                {...register('otherName')}
                placeholder="Enter Other Name"
              />
            </div>

            {/* Email & Phone */}
            <div className="space-y-1">
              <Label>Email Address</Label>
              <Input {...register('email')} placeholder="Enter Email" />
              {errors.email && (
                <p className="text-sm text-red-600">{errors.email?.message}</p>
              )}
            </div>

            <div className="space-y-1">
              <Label>Phone Number</Label>
              <Input {...register('phone')} placeholder="Enter Phone Number" />
              {errors.phone && (
                <p className="text-sm text-red-600">{errors.phone?.message}</p>
              )}
            </div>

            {/* Gender */}
            <div className="space-y-1">
              <Label>Gender</Label>
              <Controller
                control={control}
                name="gender"
                render={({ field }) => (
                  <Select
                    {...field}
                    onValueChange={(value) => field.onChange(value)}
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select Gender" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Male">Male</SelectItem>
                      <SelectItem value="Female">Female</SelectItem>
                    </SelectContent>
                  </Select>
                )}
              />
              {errors.gender && (
                <p className="text-sm text-red-600">{errors.gender?.message}</p>
              )}
            </div>

            {/* Department */}
            <div className="space-y-1 col-span-1 sm:col-span-2">
              <Label>Desired Department</Label>
              <Controller
                control={control}
                name="department"
                render={({ field }) => (
                  <Select
                    {...field}
                    onValueChange={(value) => field.onChange(value)}
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Choose Department" />
                    </SelectTrigger>
                    <SelectContent>
                      {departments.map((dept, idx) => (
                        <SelectItem key={idx} value={dept}>
                          {dept}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                )}
              />
              {errors.department && (
                <p className="text-sm text-red-600">
                  {errors.department?.message}
                </p>
              )}
            </div>

            {/* Passwords */}
            <div className="space-y-1 md:space-y-0 sm:col-span-2 md:flex sm:space-y-4 gap-4">
              <div className="flex-1 space-y-1">
                <Label>Password</Label>
                <Input
                  type={showPassword ? 'text' : 'password'}
                  {...register('password')}
                  placeholder="Enter Password"
                />
                {errors.password && (
                  <p className="text-sm text-red-600">
                    {errors.password?.message}
                  </p>
                )}
              </div>

              <div className="flex-1 space-y-1">
                <Label>Confirm Password</Label>
                <Input
                  type={showPassword ? 'text' : 'password'}
                  {...register('confirmPassword')}
                  placeholder="Confirm Password"
                />
                {errors.confirmPassword && (
                  <p className="text-sm text-red-600">
                    {errors.confirmPassword?.message}
                  </p>
                )}
              </div>
            </div>

            <div className="mt-2 flex flex-wrap items-center justify-between gap-2 sm:col-span-2 my-3">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="showPass"
                  checked={showPassword}
                  onCheckedChange={() => setShowPassword(!showPassword)}
                />
                <Label htmlFor="showPass" className="text-sm">
                  Show password
                </Label>
              </div>

              {watchPassword && watchConfirmPassword && (
                <p
                  className={`text-sm ${
                    watchPassword === watchConfirmPassword
                      ? 'text-green-600'
                      : 'text-red-600'
                  }`}
                >
                  {watchPassword === watchConfirmPassword
                    ? 'Passwords match'
                    : 'Passwords do not match'}
                </p>
              )}
            </div>

            {/* Payment Info */}
            <div className="space-y-1">
              <Label>Amount</Label>
              <Input
                value="10,000"
                readOnly
                className="bg-gray-100 cursor-not-allowed"
              />
            </div>
            <div className="space-y-1">
              <Label>Gateway Charge</Label>
              <Input
                value="400"
                readOnly
                className="bg-gray-100 cursor-not-allowed"
              />
            </div>
            <div className="space-y-1">
              <Label>Total Charge</Label>
              <Input
                value="10,400"
                readOnly
                className="bg-gray-100 cursor-not-allowed font-semibold"
              />
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-between gap-4">
            <Button className="w-full sm:w-fit" type="submit">
              Make Payment
            </Button>
            <Button
              className="w-full sm:w-fit"
              variant="destructive"
              type="reset"
            >
              Reset
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ApplicationForm;
