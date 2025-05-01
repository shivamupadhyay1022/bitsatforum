import React, { useState } from 'react';
import {  useNavigate, useParams } from 'react-router-dom';

const Instructions = () => {
  const [termsAgreed, setTermsAgreed] = useState(false);
  const [instructionsRead, setInstructionsRead] = useState(false);
  const {id} = useParams()
  const navigate= useNavigate()

  const handleBeginTest = () => {
    if (termsAgreed && instructionsRead) {
      //  Add your logic to start the test here (e.g., redirect to test page)
      alert('Starting the test...'); // Replace with actual test start logic
      navigate(`/paper/${id}`)
    } else {
      alert('Please agree to the terms and confirm that you have read the instructions to proceed.');
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center py-10">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-3xl p-8">
        <h1 className="text-2xl font-semibold text-gray-800 mb-6 text-center">BITSAT 2024 - Instructions</h1>
        <div className="space-y-4 text-gray-700 text-sm">
          <h2 className="text-lg font-semibold text-gray-800">General Instructions:</h2>
          <ul className="list-decimal list-inside space-y-2">
            <li>
              <span className="font-medium">Duration:</span> The test is of 3 hours (180 minutes).
            </li>
            <li>
              <span className="font-medium">Mode:</span> Online (Computer-based) in English only.
            </li>
            <li>
              <span className="font-medium">Type of Questions:</span> Multiple Choice Questions (MCQs).
            </li>
            <li>
              <span className="font-medium">Sections:</span> The paper consists of Physics, Chemistry, Mathematics/Biology, English Proficiency, and Logical Reasoning.
            </li>
            <li>
              <span className="font-medium">Total Questions:</span> There are 130 questions in total.
            </li>
            <li>
              <span className="font-medium">Marking Scheme:</span> Each correct answer carries +3 marks, and each incorrect answer carries -1 mark. No marks are awarded for unattempted questions.
            </li>
            <li>
              <span className="font-medium">Calculator:</span> Use of a virtual calculator is allowed.
            </li>
            <li>
              <span className="font-medium">Rough Work:</span> You will be provided with a scribble pad for rough work.
            </li>
            <li>
              <span className="font-medium">Important Instructions:</span>
              <ul className="list-disc list-inside space-y-1 ml-5">
                <li>Candidates should bring their Admit Card and a valid Photo-ID proof.</li>
                <li>Candidates must report to the exam hall at least 30 minutes before the commencement of the exam.</li>
                <li>Mobile phones and other electronic gadgets are strictly prohibited inside the exam hall.</li>
              </ul>
            </li>
          </ul>

          <h2 className="text-lg font-semibold text-gray-800">BITSAT 2024 Exam Pattern:</h2>
          <div className="ml-5 mb-4">
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
              <table className="min-w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-2 px-3 font-medium">Section</th>
                    <th className="text-center py-2 px-3 font-medium">Number of Questions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100">
                    <td className="py-2 px-3">Physics</td>
                    <td className="text-center py-2 px-3">30</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-2 px-3">Chemistry</td>
                    <td className="text-center py-2 px-3">30</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-2 px-3">English Proficiency</td>
                    <td className="text-center py-2 px-3">10</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-2 px-3">Logical Reasoning</td>
                    <td className="text-center py-2 px-3">20</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-2 px-3">Mathematics / Biology*</td>
                    <td className="text-center py-2 px-3">40</td>
                  </tr>
                  <tr className="border-b border-gray-100 font-medium">
                    <td className="py-2 px-3">Total</td>
                    <td className="text-center py-2 px-3">130</td>
                  </tr>
                  <tr className="bg-yellow-50">
                    <td className="py-2 px-3">Bonus Questions (Optional)</td>
                    <td className="text-center py-2 px-3">12</td>
                  </tr>
                </tbody>
              </table>
              <p className="mt-2 text-sm italic">*Mathematics is for engineering aspirants, and Biology is for B.Pharm aspirants.</p>
            </div>
          </div>

          <h2 className="text-lg font-semibold text-gray-800">Detailed Instructions:</h2>
          <ul className="list-decimal list-inside space-y-2">
            <li>
              <span className="font-medium">Bonus Questions:</span>
              <ul className="list-disc list-inside space-y-1 ml-5">
                <li>
                  If a candidate answers all 130 questions before time ends, they get an option to
                  attempt 12 bonus questions (4 each from Physics, Chemistry, and Math/Biology).
                </li>
                <li className="text-red-600 font-medium">
                  Important: Once you choose to attempt bonus questions, you cannot go back to the original 130 questions.
                  If you press the back button during bonus questions, you will be prompted to confirm if you want to end the test.
                </li>
              </ul>
            </li>
            <li>
              <span className="font-medium">Answering Questions:</span>
              <ul className="list-disc list-inside space-y-1 ml-5">
                <li>
                  Each question will have four options. Choose the option that you
                  consider the most appropriate.
                </li>
                <li>
                  To answer a question, click on the option. You can change your
                  answer by clicking on another option before submitting.
                </li>
                <li>
                  You can mark a question for review and come back to it later.
                </li>
              </ul>
            </li>
            <li>
              <span className="font-medium">Submission:</span>
              <ul className="list-disc list-inside space-y-1 ml-5">
                <li>
                  You can submit the test only after you have answered all the
                  compulsory questions.
                </li>
                <li>
                  Ensure that you have reviewed all your answers before final
                  submission.
                </li>
                <li>
                  Once the test is submitted, you cannot make any changes.
                </li>
              </ul>
            </li>
            <li><span className="font-medium">Technical Issues:</span> In case of any technical issues, please contact the invigilator immediately.</li>
            <li><span className="font-medium">Conduct:</span> Maintain silence and decorum in the examination hall. Any malpractice will lead to disqualification.</li>
          </ul>
          <h2 className="text-lg font-semibold text-gray-800">Marking Scheme Details:</h2>
          <div className="ml-5 mb-4">
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <table className="min-w-full">
                <thead>
                  <tr className="border-b border-blue-200">
                    <th className="text-left py-2 px-3 font-medium">Answer Type</th>
                    <th className="text-center py-2 px-3 font-medium">Marks</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-blue-100">
                    <td className="py-2 px-3">Correct Answer</td>
                    <td className="text-center py-2 px-3 text-green-600">+3 marks</td>
                  </tr>
                  <tr className="border-b border-blue-100">
                    <td className="py-2 px-3">Incorrect Answer</td>
                    <td className="text-center py-2 px-3 text-red-600">-1 mark</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-3">Unattempted Question</td>
                    <td className="text-center py-2 px-3">0 marks</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <h2 className="text-lg font-semibold text-gray-800">Important Dates:</h2>
          <ul className="list-disc list-inside space-y-2 ml-5">
            <li>Registration Start Date: 1st February 2024</li>
            <li>Registration End Date: 15th May 2024</li>
            <li>Exam Dates: 21st May 2024 to 26th June 2024</li>
            <li>Admit Card Release Date: 15th May 2024</li>
            <li>Result Declaration: 5th July 2024</li>
          </ul>
        </div>

        {/* Checkboxes and Button */}
        <div className="mt-6 space-y-4">
          <div className="flex items-center">
            <input
              type="checkbox"
              id="termsAgreement"
              className="mr-2 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              checked={termsAgreed}
              onChange={(e) => setTermsAgreed(e.target.checked)}
            />
            <label htmlFor="termsAgreement" className="text-sm text-gray-700">
              I agree to the terms and conditions.
            </label>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              id="instructionsConfirmation"
              className="mr-2 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              checked={instructionsRead}
              onChange={(e) => setInstructionsRead(e.target.checked)}
            />
            <label htmlFor="instructionsConfirmation" className="text-sm text-gray-700">
              I have read all the instructions carefully.
            </label>
          </div>
          <button
            onClick={handleBeginTest}
            className="bg-green-500 hover:bg-green-700 text-white font-semibold py-2.5 px-6 rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 w-full"
            disabled={!termsAgreed || !instructionsRead}
          >
            Begin Test
          </button>
        </div>
      </div>
    </div>
  );
};

export default Instructions;
