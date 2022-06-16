import './productList.css'
import { DataGrid } from '@material-ui/data-grid'
import { DeleteOutline } from '@material-ui/icons'
import { productRows } from '../../data/data'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { motion } from 'framer-motion'

const ProductList = () => {
  const [data, setData] = useState(productRows)
  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id))
  }
  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'product',
      headerName: 'Product',
      width: 200,
      renderCell: (params) => {
        return (
          <div className="productListItem">
            <img className="productListImg" src={params.row.img} alt="" />
            {params.row.name}
          </div>
        )
      },
    },

    { field: 'stock', headerName: 'Stock', width: 200 },
    {
      field: 'status',
      headerName: 'Status',
      width: 120,
    },
    {
      field: 'price',
      headerName: 'Price',
      width: 160,
    },
    {
      field: 'action',
      headerName: 'Action',
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={'/product/' + params.row.id}>
              <button className="productListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="productListDelete"
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        )
      },
    },
  ]
  return (
    <motion.div
      initial={{ opacity: 0, x: '-100%' }}
      animate={{ opacity: 1, x: '0%' }}
      exit={{ opacity: 0, x: '-100%' }}
      className="userList"
    >
      <DataGrid
        rows={data}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </motion.div>
  )
}

export default ProductList
