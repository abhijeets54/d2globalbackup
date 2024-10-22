import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { AlertDialog, AlertDialogContent, AlertDialogHeader, AlertDialogTitle, AlertDialogDescription, AlertDialogFooter, AlertDialogCancel } from '@/components/ui/alert-dialog';

const WorldMapContact = () => {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const countries = {
    UK: { x: 470, y: 140, name: 'United Kingdom' },
    Canada: { x: 220, y: 130, name: 'Canada' },
    Europe: { x: 500, y: 150, name: 'Europe' },
    USA: { x: 200, y: 180, name: 'United States' },
    Dubai: { x: 580, y: 200, name: 'Dubai' },
    Australia: { x: 750, y: 350, name: 'Australia' }
  };

  const handlePinClick = (country, e) => {
    e.stopPropagation();
    setSelectedCountry(country);
    setShowForm(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    setShowForm(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-7xl mx-auto">
        <Card className="p-6">
          <h1 className="text-2xl font-bold text-center mb-8">Select Your Destination</h1>
          
          <div className="relative">
            <svg
              viewBox="0 0 1000 500"
              className="w-full h-auto"
            >
              {/* You'll replace these paths with your downloaded SVG map */}
              <path
                d="M 100 100 
                   C 150 80, 200 90, 250 120
                   C 300 150, 280 200, 250 250
                   C 220 300, 150 280, 100 250
                   C 50 220, 50 150, 100 100"
                fill="#e5e7eb"
                className="transition-colors duration-300 hover:fill-blue-100"
              />
              
              {/* Location Pins */}
              {Object.entries(countries).map(([code, { x, y, name }]) => (
                <g
                  key={code}
                  onClick={(e) => handlePinClick(code, e)}
                  className="cursor-pointer transform transition-transform hover:scale-110"
                >
                  <g transform={`translate(${x},${y})`}>
                    <circle r="8" fill="#3b82f6" />
                    <circle r="12" fill="#3b82f6" fillOpacity="0.3" />
                    <path
                      d="M0,-12 L4,-4 L-4,-4 Z"
                      fill="#3b82f6"
                    />
                    <text
                      y="-20"
                      textAnchor="middle"
                      className="text-sm font-medium fill-gray-700"
                    >
                      {name}
                    </text>
                  </g>
                </g>
              ))}
            </svg>
          </div>
        </Card>

        <AlertDialog open={showForm} onOpenChange={setShowForm}>
          <AlertDialogContent className="sm:max-w-[425px]">
            <AlertDialogHeader>
              <AlertDialogTitle>Contact Us - {selectedCountry}</AlertDialogTitle>
              <AlertDialogDescription>
                <form onSubmit={handleSubmit} className="space-y-4 mt-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Name</label>
                    <Input required />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1">Email</label>
                    <Input type="email" required />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1">Message</label>
                    <Textarea required />
                  </div>

                  <div className="flex justify-end gap-3">
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <Button type="submit">Send Message</Button>
                  </div>
                </form>
              </AlertDialogDescription>
            </AlertDialogHeader>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </div>
  );
};

export default WorldMapContact;