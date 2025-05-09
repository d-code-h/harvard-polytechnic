'use client';

// Category - Full Time (FT), Part Time (PT)
// Level - National Diploma (ND) or Higher National Diploma (HND)
// Surname
// FirstName
// Othername
// Email Address
// Phone Number
// Gender
// Password
// Confirm Password - Show password checkbox
// Desired Department - Select
// Amount - 10,000 default (Unchangeable)
// Gateway Charge - 400 (unchangeable)
// Total Charge - 10, 400 unchangeable
// Make Payment and Reset Button

// List of Departments
// Accountancy
// Business Administration and Management
// Computer Engineering
// Computer Science
// Mass Communication
// Public Administration
// Science Laboratory Technology
// Software and Web Development
// Networking and Cloud Computing
// Cybersecurity and Data Protection
// Artificial Intelligence
// Journalism and Media Studies
// Film and Multimedia Production
// Strategic Communication and Media Studies
// Physics/Electronics
// Estate Management
// Statistics
// Electrical and Electronic Engineering
// Biology/Microbiology

// HPI/2025/0001
// Surname as password

import React, { useState } from 'react';
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
import { cn } from '@/lib/utils';

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

const ApplicationForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [selectedDepartment, setSelectedDepartment] = useState('');
  const [category, setCategory] = useState('');
  const [level, setLevel] = useState('');

  return (
    <div className="min-h-screen px-4 py-10 flex justify-center bg-gray-50">
      <div className="w-full max-w-3xl bg-white rounded-xl shadow-lg p-8 space-y-6">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-4">
          Application Form
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Category */}
          <div>
            <Label>Category</Label>
            <Select onValueChange={setCategory}>
              <SelectTrigger>
                <SelectValue placeholder="Select Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Full Time">Full Time (FT)</SelectItem>
                <SelectItem value="Part Time">Part Time (PT)</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Level */}
          <div>
            <Label>Level</Label>
            <Select onValueChange={setLevel}>
              <SelectTrigger>
                <SelectValue placeholder="Select Level" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="ND">National Diploma (ND)</SelectItem>
                <SelectItem value="HND">
                  Higher National Diploma (HND)
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Names */}
          <div>
            <Label>Surname</Label>
            <Input type="text" placeholder="Enter Surname" required />
          </div>
          <div>
            <Label>First Name</Label>
            <Input type="text" placeholder="Enter First Name" required />
          </div>
          <div>
            <Label>Other Name</Label>
            <Input type="text" placeholder="Enter Other Name" />
          </div>

          {/* Email & Phone */}
          <div>
            <Label>Email Address</Label>
            <Input type="email" placeholder="Enter Email" required />
          </div>
          <div>
            <Label>Phone Number</Label>
            <Input type="tel" placeholder="Enter Phone Number" required />
          </div>

          {/* Gender */}
          <div>
            <Label>Gender</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select Gender" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Male">Male</SelectItem>
                <SelectItem value="Female">Female</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Department */}
          <div>
            <Label>Desired Department</Label>
            <Select onValueChange={setSelectedDepartment}>
              <SelectTrigger>
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
          </div>

          {/* Passwords */}
          <div>
            <Label>Password</Label>
            <Input
              type={showPassword ? 'text' : 'password'}
              placeholder="Enter Password"
              required
            />
          </div>
          <div>
            <Label>Confirm Password</Label>
            <Input
              type={showPassword ? 'text' : 'password'}
              placeholder="Confirm Password"
              required
            />
            <div className="mt-2 flex items-center space-x-2">
              <Checkbox
                id="showPass"
                checked={showPassword}
                onCheckedChange={() => setShowPassword(!showPassword)}
              />
              <Label htmlFor="showPass" className="text-sm">
                Show password
              </Label>
            </div>
          </div>

          {/* Payment Info */}
          <div>
            <Label>Amount</Label>
            <Input
              value="10,000"
              readOnly
              className="bg-gray-100 cursor-not-allowed"
            />
          </div>
          <div>
            <Label>Gateway Charge</Label>
            <Input
              value="400"
              readOnly
              className="bg-gray-100 cursor-not-allowed"
            />
          </div>
          <div>
            <Label>Total Charge</Label>
            <Input
              value="10,400"
              readOnly
              className="bg-gray-100 cursor-not-allowed"
            />
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-between gap-4">
          <Button className="w-full" variant="destructive" type="reset">
            Reset
          </Button>
          <Button className="w-full" type="submit">
            Make Payment
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ApplicationForm;
