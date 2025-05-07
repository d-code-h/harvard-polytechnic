import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Link from 'next/link';
import React from 'react';

const Portal = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800 font-epilogue">
          Harvard Polytechnic Portal
        </h2>
        <form className="space-y-5">
          <div>
            <label
              htmlFor="matric"
              className="block text-sm font-medium text-gray-700"
            >
              Matric Number
            </label>
            <Input
              type="text"
              id="matric"
              placeholder="e.g., HND/CSE/1234"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 h-11"
              required
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <Input
              type="password"
              id="password"
              placeholder="Enter your password"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 h-11"
              required
            />
          </div>
          <Button
            type="submit"
            className="w-full py-2 px-4 bg-primary hover:bg-primary/95 text-white font-semibold rounded-xl transition duration-200"
          >
            Login
          </Button>
        </form>
        <p className="mt-4 text-sm text-center text-gray-500">
          Forgot your password?{' '}
          <Link href="#" className="text-blue-600 hover:underline">
            Reset it
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Portal;
