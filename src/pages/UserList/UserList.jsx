import React, { useState } from "react";
import { Link } from "react-router-dom";
import { DataGrid } from '@mui/x-data-grid';
import { DeleteOutline, EditNote } from "@mui/icons-material";
import { userRows } from "../../utilites/userData";

export default function UserList() {
    const [users, setUsers] = useState(userRows);

    const handleUserDelete = (id) => {
        setUsers(users.filter((user) => user.id !== id));
    };

    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        { 
            field: 'user', 
            headerName: 'User', 
            width: 250, 
            renderCell: (params) => {
                return (
                    <div className="flex items-center h-full">
                        <img 
                            className="w-8 h-8 rounded-full object-cover mr-3" 
                            src={params.row.avatar} 
                            alt={params.row.username} 
                        />
                        <span className="font-medium text-gray-700">
                            {params.row.username}
                        </span>
                    </div>
                );
            }
        },
        { field: 'email', headerName: 'Email', width: 250 },
        { 
            field: 'status', 
            headerName: 'Status', 
            width: 150,
            renderCell: (params) => {
                return (
                    <span className={`px-2 py-1 rounded-md text-xs font-semibold ${
                        params.row.status === 'Active' 
                        ? 'bg-green-100 text-green-700' 
                        : 'bg-gray-100 text-gray-600'
                    }`}>
                        {params.row.status}
                    </span>
                )
            }
        },
        { field: 'transactions', headerName: 'Transactions', width: 150 },
        { 
            field: 'actions', 
            headerName: 'Actions', 
            width: 130, 
            renderCell: (params) => {
                return (
                    <div className="flex items-center h-full space-x-2">
                        <Link to={"/user/" + params.row.id}>
                            <EditNote className="text-green-600 cursor-pointer text-2xl hover:scale-110 transition-transform" />
                        </Link>
                        <DeleteOutline 
                            className="text-red-500 cursor-pointer text-xl hover:scale-110 transition-transform" 
                            onClick={() => handleUserDelete(params.row.id)} 
                        />
                    </div>
                );
            } 
        },
    ];

    return (
        <div className="m-5 p-5 bg-white rounded-lg shadow-[0px_2px_10px_rgba(220,220,220,1)]">
            {/* Header Section */}
            <div className="flex items-center justify-between mb-5">
                <h3 className="text-xl font-bold text-gray-600">User List</h3>
                <Link to="/newUser">
                    <button className="bg-teal-700 hover:bg-teal-800 text-white px-4 py-2 rounded-md transition-colors font-medium">
                        Create
                    </button>
                </Link>
            </div>

            {/* DataGrid Container */}
            <div className="h-[600px] w-full">
                <DataGrid
                    rows={users}
                    columns={columns}
                    initialState={{
                        pagination: {
                            paginationModel: { page: 0, pageSize: 8 },
                        },
                    }}
                    pageSizeOptions={[5, 10, 20]}
                    checkboxSelection
                    disableRowSelectionOnClick
                    sx={{
                        border: 'none',
                        '& .MuiDataGrid-cell:focus': {
                            outline: 'none',
                        },
                        '& .MuiDataGrid-columnHeaders': {
                            backgroundColor: '#f9fafb',
                            color: '#374151',
                        }
                    }}
                />
            </div>
        </div>
    );
}
