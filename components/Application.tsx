'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

import { usePaystackPayment } from 'react-paystack';
import axios from 'axios';
import SuccessApplication from './SuccessApplication';
import ApplicationForm from './ApplicationForm';
import { initialValues } from '@/lib/data';

type Reference = {
  message: 'Approved' | 'Declined';
  redirecturl: string;
  reference: string;
  status: 'success' | 'declined';
  trans: string;
  transaction: string;
  trxref: string;
};

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
const Application = () => {
  const [error, setError] = useState(null);
  const [application, setApplication] = useState(null);

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
    defaultValues: initialValues,
  });

  // Watch for password and confirmPassword to compare
  const watchPassword = watch('password');
  const watchConfirmPassword = watch('confirmPassword');

  const config = {
    reference: new Date().getTime().toString(),
    email: '',
    amount: 1040000, // Amount in kobo
    metadata: {
      name: '',
      phone: '',
      custom_fields: [], // Added required custom_fields property
    },
    publicKey: publicKey!,
    onSuccess: async (reference: Reference) => {
      // Implementation for whatever you want to do with reference and after success call.
      const currentValues = getValues();
      const response = await axios.post('/api/application', {
        ...currentValues,
        transactionId: reference.reference,
      });
      console.log('API Response', response);

      if (response?.data?.status !== 'success') {
        setError(response?.data?.message);
      } else {
        // Make next decision
        setApplication({ ...response?.data?.data, ...currentValues });
      }
    },

    onClose: () => {
      // implementation for  whatever you want to do when the Paystack dialog closed.
      console.log('closed');
    },
  };

  const initializePayment = usePaystackPayment(config);

  const handleFormSubmit = () => {
    const currentValues = getValues();
    config.email = currentValues.email;
    config.metadata.name =
      currentValues.firstName + ' ' + currentValues.surname;
    config.metadata.phone = currentValues.phone;

    initializePayment(config);
  };

  if (!application) {
    return (
      <ApplicationForm
        handleSubmit={handleSubmit}
        watchPassword={watchPassword}
        watchConfirmPassword={watchConfirmPassword}
        control={control}
        register={register}
        errors={errors}
        error={error}
        handleFormSubmit={handleFormSubmit}
      />
    );
  } else {
    return <SuccessApplication application={application} />;
  }
};

export default Application;
