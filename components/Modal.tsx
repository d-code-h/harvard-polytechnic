'use client';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

import React, { useEffect, useState } from 'react';
import { Button } from './ui/button';

const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const whatsappLink =
    'https://wa.me/2349019921862?text=Hello, I am interested in applying for the IJMB program at Harvard Polytechnic.';

  useEffect(() => {
    setIsOpen(true); // Open the modal when the component mounts
  }, []);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-red-600 text-2xl font-bold">
            Application! Application! Application!
          </DialogTitle>
          <DialogDescription className="text-lg text-dark mt-4">
            🚨 Don’t miss this golden opportunity! Harvard Polytechnic’s IJMB
            program is your fast track to gaining direct entry admission into
            top Nigerian universities. Seats are limited, and time is running
            out! ⏳
          </DialogDescription>
        </DialogHeader>
        <div className="mt-6">
          <p className="text-center text-base text-gray-700 mb-4">
            Secure your spot today and take the first step toward your academic
            success. Click below to chat with us and register now!
          </p>
          <Button
            className="text-center text-lg py-5 w-full bg-red-600 text-white hover:bg-red-700 focus-visible:ring-red-300"
            onClick={() => window.open(whatsappLink, '_blank')}
          >
            Register Now
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default Modal;
