import React from 'react';

const AccountTable = () => {
  // Sample data structure for the table
  const accountData = {
    studentName: "Doe., John",
    studentNo: "18-8083-488",
    transactions: [
      {
        schoolYear: "2021",
        semester: "First Semester",
        yearLevel: "2",
        scholarship: "",
        orDate: "00/00/0000",
        orNo: "TOTAL AMOUNT DUE",
        assessment: "21,418.86",
        payment: "0.00",
        balance: "21,418.86"
      },
      // ... more transactions
    ]
  };

  return (
    <div className="account-table">
      <div className="student-info">
        <p>Student Name: {accountData.studentName}</p>
        <p>Student No: {accountData.studentNo}</p>
      </div>
      <table>
        <thead>
          <tr>
            <th>School Year</th>
            <th>Semester</th>
            <th>Year Level</th>
            <th>Scholarship</th>
            <th>O.R. Date</th>
            <th>O.R. No.</th>
            <th>Assessment</th>
            <th>Payment</th>
            <th>Balance</th>
          </tr>
        </thead>
        <tbody>
          {accountData.transactions.map((transaction, index) => (
            <tr key={index}>
              <td>{transaction.schoolYear}</td>
              <td>{transaction.semester}</td>
              <td>{transaction.yearLevel}</td>
              <td>{transaction.scholarship}</td>
              <td>{transaction.orDate}</td>
              <td>{transaction.orNo}</td>
              <td>{transaction.assessment}</td>
              <td>{transaction.payment}</td>
              <td>{transaction.balance}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AccountTable;
