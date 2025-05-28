export default function ExamPatternSection() {
  return (
    <section className="bg-white py-20 px-4 text-left mx-8">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">BITSAT 2025 Exam Pattern</h2>

        <div className="bg-gray-50 p-5 rounded-lg border border-gray-200 mb-10">
          <table className="min-w-full text-sm">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-2 px-3 font-semibold">Section</th>
                <th className="text-center py-2 px-3 font-semibold">Number of Questions</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Physics", 30],
                ["Chemistry", 30],
                ["English Proficiency", 10],
                ["Logical Reasoning", 20],
                ["Mathematics / Biology*", 40],
                ["Total", 130],
                ["Bonus Questions (Optional)", 12],
              ].map(([section, count], i) => (
                <tr
                  key={section}
                  className={`${
                    i === 6 ? "bg-yellow-50 font-medium" : "border-b border-gray-100"
                  }`}
                >
                  <td className="py-2 px-3">{section}</td>
                  <td className="text-center py-2 px-3">{count}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="mt-3 text-sm italic text-gray-600">
            *Mathematics is for engineering aspirants, and Biology is for B.Pharm aspirants.
          </p>
        </div>

        <h2 className="text-xl font-semibold text-gray-800 mb-4">Detailed Instructions</h2>
        <ul className="list-decimal list-inside space-y-4 pl-5 mb-10 text-sm text-gray-700">
          <li>
            <span className="font-medium">Bonus Questions:</span>
            <ul className="list-disc list-inside ml-5 mt-1 space-y-2">
              <li>
                If a candidate answers all 130 questions before time ends, they get an option to attempt 12 bonus questions
                (4 each from Physics, Chemistry, and Math/Biology).
              </li>
              <li className="text-red-600 font-medium">
                Important: Once you choose to attempt bonus questions, you cannot go back to the original 130 questions. Pressing the back button will prompt you to confirm ending the test.
              </li>
            </ul>
          </li>
          <li>
            <span className="font-medium">Technical Issues:</span> In case of any technical issues, please contact the invigilator immediately.
          </li>
          <li>
            <span className="font-medium">Conduct:</span> Maintain silence and decorum in the examination hall. Any malpractice will lead to disqualification.
          </li>
        </ul>

        <h2 className="text-xl font-semibold text-gray-800 mb-4">Marking Scheme Details</h2>
        <div className="bg-blue-50 p-5 rounded-lg border border-blue-200 mb-10">
          <table className="min-w-full text-sm">
            <thead>
              <tr className="border-b border-blue-200">
                <th className="text-left py-2 px-3 font-semibold">Answer Type</th>
                <th className="text-center py-2 px-3 font-semibold">Marks</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-blue-100">
                <td className="py-2 px-3">Correct Answer</td>
                <td className="text-center py-2 px-3 text-green-600 font-medium">+3 marks</td>
              </tr>
              <tr className="border-b border-blue-100">
                <td className="py-2 px-3">Incorrect Answer</td>
                <td className="text-center py-2 px-3 text-red-600 font-medium">-1 mark</td>
              </tr>
              <tr>
                <td className="py-2 px-3">Unattempted Question</td>
                <td className="text-center py-2 px-3">0 marks</td>
              </tr>
            </tbody>
          </table>
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
    </section>
  );
}
