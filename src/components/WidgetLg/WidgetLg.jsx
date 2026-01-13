import React from "react";

export default function WidgetLg() {
  // Dynamic Button Component for Status
  const Button = ({ type }) => {
    const statusStyles = {
      Approved: "bg-green-100 text-green-700",
      Declined: "bg-red-100 text-red-700",
      Pending: "bg-blue-100 text-blue-700",
    };

    return (
      <button className={`px-2 py-1 rounded-lg text-xs font-semibold ${statusStyles[type]}`}>
        {type}
      </button>
    );
  };

  const transactions = [
    {
      id: 1,
      customer: "Susan Carol",
      date: "2 May 2023",
      amount: "$200.00",
      status: "Approved",
      img: "https://images.pexels.com/photos/821651/pexels-photo-821651.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 2,
      customer: "John Smith",
      date: "3 May 2023",
      amount: "$150.00",
      status: "Declined",
      img: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 3,
      customer: "Emma Watson",
      date: "5 May 2023",
      amount: "$2,100.00",
      status: "Pending",
      img: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  ];

  return (
    <div className="flex-[2] bg-white p-5 rounded-lg shadow-[0px_2px_10px_rgba(220,220,220,1)]">
      <h3 className="text-xl font-bold text-gray-700 mb-5">Latest Transactions</h3>
      
      <div className="overflow-x-auto">
        <table className="w-full border-separate border-spacing-y-4">
          <thead>
            <tr className="text-left text-gray-600">
              <th className="pb-2 font-semibold">Customer</th>
              <th className="pb-2 font-semibold">Date</th>
              <th className="pb-2 font-semibold">Amount</th>
              <th className="pb-2 font-semibold">Status</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction) => (
              <tr key={transaction.id} className="hover:bg-gray-50 transition-colors group">
                {/* Customer Info */}
                <td className="flex items-center gap-3 py-2">
                  <img
                    src={transaction.img}
                    alt={transaction.customer}
                    className="w-10 h-10 rounded-full object-cover border border-gray-100"
                  />
                  <span className="font-semibold text-gray-800">
                    {transaction.customer}
                  </span>
                </td>

                {/* Date */}
                <td className="text-gray-500 text-sm">
                  {transaction.date}
                </td>

                {/* Amount */}
                <td className="text-gray-500 text-sm font-medium">
                  {transaction.amount}
                </td>

                {/* Status Button */}
                <td>
                  <Button type={transaction.status} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
