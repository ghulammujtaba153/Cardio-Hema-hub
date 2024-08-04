"use client";

import React from 'react';
import UpcomingAppointment from '@/components/dashboard/UpcomingAppointment';
import Medicine from '@/components/dashboard/Medicine';
import DashboardLayout from './DashboardLayout';
import Card from '@/components/dashboard/Card';

const Dashboard = () => {
  const cardData = [
    { title: 'Appointments', num: 12 },
    { title: 'Patients', num: 34 },
    { title: 'Earnings', num: 56 },
    { title: 'Messages', num: 78 },
    { title: 'Notifications', num: 90 }
  ];

  return (
    <DashboardLayout>
      <div className='flex justify-between items-center gap-4 flex-wrap'>
        {cardData.map((data, index) => (
          <Card key={index} data={data} />
        ))}
      </div>
      <UpcomingAppointment />
      <Medicine />
    </DashboardLayout>
  );
};

export default Dashboard;
