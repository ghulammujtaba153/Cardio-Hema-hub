"use client";

import React, { useState } from 'react';
import DoctorProfile from './DoctorProfile'; // Import the DoctorProfile component
import AdminProfile from './AdminProfile';   // Import the AdminProfile component
import NurseProfile from './NurseProfile';

const TabContainer = () => {
  const [activeTab, setActiveTab] = useState('doctor');

  return (
    <div className='flex flex-col items-center rounded-full'>
      <div className='flex '>
        <button
          className={`px-4 py-2 ${activeTab === 'doctor' ? 'bg-green-400 text-white' : 'bg-gray-200'}`}
          onClick={() => setActiveTab('doctor')}
        >
          Doctor
        </button>
        <button
          className={`px-4 py-2 ${activeTab === 'admin' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
          onClick={() => setActiveTab('admin')}
        >
          Admin
        </button>
        <button
          className={`px-4 py-2 ${activeTab === 'nurse' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
          onClick={() => setActiveTab('nurse')}
        >
          Nurse
        </button>
      </div>
      <div className='w-full'>
        {activeTab === 'doctor' && <DoctorProfile />}
        {activeTab === 'admin' && <AdminProfile />}
        {activeTab === 'nurse' && <NurseProfile />}
      </div>
    </div>
  );
};

export default TabContainer;
