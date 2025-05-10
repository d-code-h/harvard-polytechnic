import React, { useRef } from 'react';

const SuccessApplication = ({ application }: { application: Application }) => {
  const printRef = useRef<HTMLDivElement>(null);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-3xl text-lg">
        <div ref={printRef}>
          <h2 className="text-3xl font-bold text-green-700 mb-4">
            🎉 Application Submitted Successfully!
          </h2>

          <p className="mb-6 text-gray-700">
            Thank you for applying to <strong>Harvard Polytechnic</strong>. Your
            application has been received. Below are your application details.
            Please print or save this page for future reference.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-800 text-lg">
            <p>
              <strong>Application ID:</strong> {application.applicationId}
            </p>
            <p>
              <strong>Surname:</strong> {application.surname}
            </p>
            <p>
              <strong>First Name:</strong> {application.firstName}
            </p>
            <p>
              <strong>Other Name:</strong> {application.otherName}
            </p>
            <p>
              <strong>Email:</strong> {application.email}
            </p>
            <p>
              <strong>Phone:</strong> {application.phone}
            </p>
            <p>
              <strong>Gender:</strong> {application.gender}
            </p>
            <p>
              <strong>Program:</strong> {application.program}
            </p>
            <p>
              <strong>Category:</strong> {application.category}
            </p>
            <p>
              <strong>Department:</strong> {application.department}
            </p>
            <p>{/* <strong>Password:</strong> {application.password} */}</p>
          </div>

          <div className="mt-8 p-4 border rounded bg-blue-50 text-blue-800 text-base leading-relaxed">
            <p>
              You can now log in to your applicant portal at: <br />
              <a
                href="https://www.harvardpolytechnic.com/portal"
                target="_blank"
                className="text-blue-600 underline"
              >
                https://www.harvardpolytechnic.com/portal
              </a>
            </p>
            <p className="mt-2">
              Use your <strong>Application ID</strong> (
              <em>{application.applicationId}</em>) as your username and the
              password you set during registration.
            </p>
          </div>
        </div>

        <div className="mt-8 flex justify-between items-center">
          <button
            onClick={handlePrint}
            className="bg-blue-600 text-white px-5 py-3 rounded-md hover:bg-blue-700 transition-all print:hidden"
          >
            Print / Save as PDF
          </button>
          <p className="text-sm text-gray-500">
            Keep your Application ID and Password safe.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SuccessApplication;
