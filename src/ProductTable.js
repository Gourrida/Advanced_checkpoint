import React from 'react'
import PropTypes from 'prop-types'
import './ProductTable.css';
const ProductTable = ({products}) => {
    return (
        <div className = "ProductTable">
        <table>
        <thead>
        <tr>
            <th>Name</th>
            <th>Category</th>
            <th>Price</th>
        </tr> 
        </thead>
        <tbody>
        {products.map((product) => {
              return( <tr className={product.category ==='Electronics' ? "Electronics" : "Clothes"}>
                    <td >{product.name}</td>
                    <td >{`${product.price} TND`}</td>
                    <td >{product.category}</td>
                </tr>
                ) 
            })}    
        </tbody> 
        </table>

   
        </div>
    )
}

    ProductTable.propTypes = {
        products : PropTypes.arrayOf(
            PropTypes.shape({
          name: PropTypes.string,
          price: PropTypes.number,
          category:PropTypes.string,
        }))
    }

export default ProductTable ;
