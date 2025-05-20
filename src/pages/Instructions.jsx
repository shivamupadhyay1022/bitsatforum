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
        <h1 className="text-2xl font-semibold text-gray-800 mb-6 text-center">BITSAT 2025 - Instructions</h1>
        <div className="space-y-4 text-gray-700 text-sm">
          <h2 className="text-lg font-semibold text-gray-800">Exam Interface Guide:</h2>
          <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 mb-4">
            <h3 className="font-medium text-gray-800 mb-2">Question Navigation:</h3>
            <ul className="list-disc list-inside space-y-1 ml-3">
              <li>
                <span className="font-medium">Question Panel:</span> A sidebar on the left shows all question numbers. Click any number to jump to that question.
              </li>
              <li>
                <span className="font-medium">Navigation Buttons:</span> Use "Previous" and "Next" buttons at the bottom to move between questions.
              </li>
              <li>
                <span className="font-medium">Submit Button:</span> Click to end the test and see your results.
              </li>
            </ul>

            <h3 className="font-medium text-gray-800 mt-4 mb-2">Question Status Indicators:</h3>
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 mb-4">
              <p className="text-sm text-gray-600 mb-3">The sidebar shows the status of each question using these color codes:</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <div className="w-8 h-8 rounded-full flex items-center justify-center bg-white border-2 border-gray-300 mr-3 text-gray-700 font-medium">1</div>
                      <div>
                        <span className="font-medium block">Not Visited</span>
                        <span className="text-xs text-gray-500">Questions you haven't seen yet</span>
                      </div>
                    </li>
                    <li className="flex items-center">
                      <div className="w-8 h-8 rounded-full flex items-center justify-center bg-red-500 border-2 border-red-600 mr-3 text-white font-medium">2</div>
                      <div>
                        <span className="font-medium block">Visited but Not Answered</span>
                        <span className="text-xs text-gray-500">Questions you've seen but not selected an answer</span>
                      </div>
                    </li>
                    <li className="flex items-center">
                      <div className="w-8 h-8 rounded-full flex items-center justify-center bg-green-500 border-2 border-green-600 mr-3 text-white font-medium">3</div>
                      <div>
                        <span className="font-medium block">Answered</span>
                        <span className="text-xs text-gray-500">Questions with a selected answer</span>
                      </div>
                    </li>
                  </ul>
                </div>
                <div>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <div className="w-8 h-8 rounded-full flex items-center justify-center bg-blue-500 border-2 border-blue-600 mr-3 text-white font-medium">4</div>
                      <div>
                        <span className="font-medium block">Marked for Review (Not Answered)</span>
                        <span className="text-xs text-gray-500">Questions you want to revisit later</span>
                      </div>
                    </li>
                    <li className="flex items-center">
                      <div className="w-8 h-8 rounded-full flex items-center justify-center bg-gradient-to-r from-blue-500 to-green-500 border-2 border-blue-600 mr-3 text-white font-medium">5</div>
                      <div>
                        <span className="font-medium block">Marked for Review (Answered)</span>
                        <span className="text-xs text-gray-500">Questions with an answer that you want to revisit</span>
                      </div>
                    </li>
                    <li className="flex items-center">
                      <div className="w-8 h-8 rounded-full flex items-center justify-center bg-yellow-100 border-2 border-yellow-300 mr-3 text-yellow-800 font-medium">B</div>
                      <div>
                        <span className="font-medium block">Bonus Question</span>
                        <span className="text-xs text-gray-500">Extra questions available after completing all regular questions</span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-4 bg-blue-50 p-3 rounded-lg border border-blue-200">
                <p className="text-sm text-blue-800">
                  <span className="font-medium">Note:</span> For bonus question eligibility, both answered questions and questions marked for review with answers are counted as attempted.
                </p>
              </div>
            </div>

            <h3 className="font-medium text-gray-800 mt-4 mb-2">Special Features:</h3>
            <div className="space-y-4">
              <div className="bg-gray-50 p-3 rounded-lg border border-gray-200">
                <h4 className="font-medium text-gray-800 mb-1">Mark for Review</h4>
                <p className="text-sm text-gray-600 mb-2">Use the "Mark for Review" button next to "Clear Option" to flag questions you want to revisit later.</p>
                <ul className="list-disc list-inside space-y-1 ml-3 text-sm text-gray-600">
                  <li>Questions marked for review appear in <span className="text-blue-600 font-medium">blue</span> in the sidebar</li>
                  <li>If you've also answered the question, it appears as a <span className="text-blue-600 font-medium">blue-green gradient</span></li>
                  <li>Questions marked for review with answers count toward bonus question eligibility</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-3 rounded-lg border border-gray-200">
                <h4 className="font-medium text-gray-800 mb-1">Bonus Section</h4>
                <p className="text-sm text-gray-600 mb-2">After answering all 130 regular questions, you can access 12 bonus questions.</p>
                <ul className="list-disc list-inside space-y-1 ml-3 text-sm text-gray-600">
                  <li>The "Next" button on the last regular question will change to "Bonus Section"</li>
                  <li>Once you enter the bonus section, you cannot return to the regular questions</li>
                  <li>Bonus questions appear with a <span className="text-yellow-700 font-medium">yellow</span> background in the sidebar</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-3 rounded-lg border border-gray-200">
                <h4 className="font-medium text-gray-800 mb-1">Timer</h4>
                <p className="text-sm text-gray-600">A countdown timer at the top shows remaining time. The test auto-submits when time runs out.</p>
              </div>
            </div>
          </div>

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

          <h2 className="text-lg font-semibold text-gray-800">BITSAT 2025 Exam Pattern:</h2>
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
          <div className="ml-5 mb-4">
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
              <p className="mb-3 text-sm">
                BITSAT 2025 will be conducted in two sessions: Session 1 from May 26 to 30, 2025, and Session 2 from June 22 to 26, 2025.
                The application window for Session 2 only opens from May 26 to June 10, 2025. Candidates can apply for either Session 1, Session 2, or both.
              </p>
              <table className="min-w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-2 px-3 font-medium">Event</th>
                    <th className="text-left py-2 px-3 font-medium">Date</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100">
                    <td className="py-2 px-3">Application Window (Session 1 & 2)</td>
                    <td className="py-2 px-3">April 18, 2025</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-2 px-3">Application Window (Session 2 only)</td>
                    <td className="py-2 px-3">May 26 to June 10, 2025</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-2 px-3">Session 1 Exam Dates</td>
                    <td className="py-2 px-3">May 26 to 30, 2025</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-2 px-3">Session 2 Exam Dates</td>
                    <td className="py-2 px-3">June 22 to 26, 2025</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-2 px-3">Test Date & Slot Reservation (Session 1)</td>
                    <td className="py-2 px-3">May 13-16, 2025</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-2 px-3">Test Center Allotment Announcement</td>
                    <td className="py-2 px-3">June 16, 2025</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-2 px-3">Hall Ticket Download</td>
                    <td className="py-2 px-3">June 20, 2025</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
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
