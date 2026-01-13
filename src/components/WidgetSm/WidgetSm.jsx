import React from "react";
import { Visibility } from "@mui/icons-material";

export default function WidgetSm() {
  // Mock data for members
  const newMembers = [
    {
      id: 1,
      name: "Anna Keyen",
      title: "Software Engineer",
      img: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 2,
      name: "James Bond",
      title: "Security Analyst",
      img: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 3,
      name: "Elena Rodriguez",
      title: "UX Designer",
      img: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 4,
      name: "David Smith",
      title: "Product Manager",
      img: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 5,
      name: "Sophia Müller",
      title: "HR Specialist",
      img: "https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  ];

  return (
    <div className="flex-1 bg-white p-5 rounded-lg shadow-[0px_2px_10px_rgba(220,220,220,1)]">
      <h3 className="text-xl font-bold text-gray-700 mb-5">New Join Members</h3>
      
      <ul className="m-0 p-0 list-none">
        {newMembers.map((member) => (
          <li key={member.id} className="flex items-center justify-between my-5 group">
            {/* Avatar & Info */}
            <div className="flex items-center gap-3">
              <img
                src={member.img}
                alt={member.name}
                className="w-10 h-10 rounded-full object-cover border border-gray-100 shadow-sm"
              />
              <div className="flex flex-col">
                <span className="font-semibold text-gray-800">{member.name}</span>
                <span className="text-sm font-light text-gray-500">{member.title}</span>
              </div>
            </div>

            {/* Display Button */}
            <button className="flex items-center gap-1 border-none rounded-lg py-2 px-3 bg-slate-100 text-gray-600 cursor-pointer hover:bg-slate-200 hover:text-gray-800 transition-all active:scale-95">
              <Visibility className="!text-lg" />
              <span className="hidden sm:inline">Display</span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
