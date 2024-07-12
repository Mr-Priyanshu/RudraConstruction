// src/components/SalarySlip.js
import React, { useState, useRef } from 'react';
import { useReactToPrint } from 'react-to-print';

const SalarySlip = () => {
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [salarySlip, setSalarySlip] = useState(null);
  const componentRef = useRef();

  const handleGenerateSlip = () => {
    // Fetch or generate the salary slip data based on month and year
    // This is just a placeholder logic
    const slipData = {
      employeeName: 'Priyanshu',
      designation: 'Software Engineer',
      department: 'Development',
      month,
      year,
      basic: 50000,
      hra: 20000,
      otherAllowances: 5000,
      deductions: 10000,
      netSalary: 65000,
    };
    setSalarySlip(slipData);
  };

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <div className="max-w-2xl mx-auto pt-24 p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-3xl font-bold mb-6 text-center text-indigo-600">Generate Salary Slip</h2>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Month</label>
        <input
          type="text"
          value={month}
          onChange={(e) => setMonth(e.target.value)}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Year</label>
        <input
          type="text"
          value={year}
          onChange={(e) => setYear(e.target.value)}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>
      <button
        onClick={handleGenerateSlip}
        className="w-full px-4 py-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-700"
      >
        Generate Slip
      </button>
      {salarySlip && (
        <div>
          <div className="mt-6 p-6 bg-gray-50 rounded-md shadow-md" ref={componentRef}>
            <div className="mb-4 border-b pb-2">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-xl font-bold text-gray-800">DOAGuru Infosystem</h3>
                  <p className="text-sm text-gray-600">Write Town</p>
                  <p className="text-sm text-gray-600">Jabalpur, MP, 482002</p>
                </div>
                <div>
                  {/* Replace with your company logo */}
                  <img src="https://doaguru.com/static/media/doagurulogo-removebg.b0126812bbe704a27f8f.webp" alt="Company Logo" className="h-16" />
                </div>
              </div>
            </div>
            <div className="mb-4 border-b pb-2">
              <h3 className="text-lg font-semibold text-gray-800">Salary Slip for {salarySlip.month} {salarySlip.year}</h3>
              <p className="text-sm text-gray-600">{salarySlip.employeeName}, {salarySlip.designation}, {salarySlip.department}</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm font-medium text-gray-700">Basic:</p>
                <p className="text-lg font-bold text-gray-900">{salarySlip.basic}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-700">HRA:</p>
                <p className="text-lg font-bold text-gray-900">{salarySlip.hra}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-700">Other Allowances:</p>
                <p className="text-lg font-bold text-gray-900">{salarySlip.otherAllowances}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-700">Deductions:</p>
                <p className="text-lg font-bold text-gray-900">{salarySlip.deductions}</p>
              </div>
            </div>
            <div className="mt-4 border-t pt-2">
              <p className="text-sm font-medium text-gray-700">Net Salary:</p>
              <p className="text-2xl font-bold text-indigo-600">{salarySlip.netSalary}</p>
            </div>
            <div className="mt-6 border-t pt-4">
              <div className="mb-4">
                <h3 className="text-lg font-semibold text-gray-800">Terms and Conditions</h3>
                <p className="text-sm text-gray-600">
                  1. This salary slip is generated electronically and does not require a signature.
                  <br />
                  2. All amounts are in INR.
                  <br />
                  3. Please contact HR for any discrepancies.
                </p>
              </div>
              <div className="flex justify-between items-center mt-6">
                <div>
                  <p className="text-sm font-medium text-gray-700">Authorized Signature:</p>
                  {/* Replace with an image of a signature if available */}
                  {/* <img src="path/to/signature.png" alt="Signature" className="h-10" /> */}
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-700">Company Seal:</p>
                  {/* Replace with an image of the company seal if available */}
                  
                </div>
              </div>
            </div>
          </div>
          <button
            onClick={handlePrint}
            className="w-full mt-4 px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-700"
          >
            Print 
          </button>
        </div>
      )}
    </div>
  );
};

export default SalarySlip;
