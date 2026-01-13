import React, { useState } from "react";
import { Link } from "react-router-dom";
import { DataGrid } from '@mui/x-data-grid';
import { DeleteOutline, EditNote } from "@mui/icons-material";
import { productRows } from "../../utilities/productData";

export default function ProductList() {
    const [products, setProducts] = useState(productRows);

    const handleProductDelete = (id) => {
        setProducts(products.filter((product) => product.id !== id));
    };

    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        { 
            field: 'product', 
            headerName: 'Product', 
            width: 250, 
            renderCell: (params) => {
                return (
                    <div className="flex items-center h-full">
                        <img 
                            className="w-8 h-8 rounded-full object-cover mr-3 border border-gray-100" 
                            src={params.row.image} 
                            alt={params.row.name} 
                        />
                        <span className="font-medium text-gray-700">{params.row.name}</span>
                    </div>
                );
            }
        },
        { field: 'stock', headerName: 'Stock', width: 250 },
        { 
            field: 'status', 
            headerName: 'Status', 
            width: 150,
            renderCell: (params) => {
                return (
                    <span className={`px-2 py-1 rounded-md text-xs font-semibold capitalize ${
                        params.row.status === 'active' 
                        ? 'bg-green-100 text-green-700' 
                        : 'bg-yellow-100 text-yellow-700'
                    }`}>
                        {params.row.status}
                    </span>
                )
            }
        },
        { field: 'price', headerName: 'Price', width: 150 },
        { 
            field: 'actions', 
            headerName: 'Actions', 
            width: 130, 
            renderCell: (params) => {
                return (
                    <div className="flex items-center h-full space-x-2">
                        <Link to={"/product/edit/" + params.row.id}>
                            <EditNote className="text-green-600 cursor-pointer text-2xl hover:scale-110 transition-transform" />
                        </Link>
                        <DeleteOutline 
                            className="text-red-500 cursor-pointer text-xl hover:scale-110 transition-transform" 
                            onClick={() => handleProductDelete(params.row.id)} 
                        />
                    </div>
                );
            } 
        },
    ];

    return (
        <div className="m-5 p-5 bg-white rounded-lg shadow-[0px_0px_10px_rgba(220,220,220,1)]">
            {/* Header Section */}
            <div className="flex items-center justify-between mb-5">
                <h3 className="text-xl font-bold text-gray-600">Product List</h3>
                <Link to="/newProduct">
                    <button className="bg-teal-700 hover:bg-teal-800 text-white px-4 py-2 rounded-md transition-all font-medium active:scale-95">
                        Create
                    </button>
                </Link>
            </div>

            {/* DataGrid Container */}
            <div className="h-[650px] w-full">
                <DataGrid
                    rows={products}
                    columns={columns}
                    initialState={{
                        pagination: {
                            paginationModel: { page: 0, pageSize: 10 },
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
                            borderBottom: '1px solid #e5e7eb',
                        },
                        '& .MuiDataGrid-row:hover': {
                            backgroundColor: '#f3f4f6',
                        }
                    }}
                />
            </div>
        </div>
    );
}
