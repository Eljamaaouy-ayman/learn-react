import { useEffect, useState } from "react"
import Product from "./product"

export default function ProductList(){

    const [productList, setProductList] = useState([])
    const [categories, setCategories] = useState([])
    const [searchInput, setSearchInput] = useState()

    const getProduct = () => {
        ('https://fakestoreapi.com/products')
            .then(response => response.json())
            .then(response => setProductList(response))
    }

    const getCategories = () => {
        fetch('https://fakestoreapi.com/products/categories')
            .then(response => response.json())
            .then(response => setCategories(response)) 
    }

    const handleSearch = (e) => {
        e.preventDefault() 
        const searchValue = document.querySelector('#search').value
        setSearchInput(searchValue)
    };

    const filterCategory = () => {
        
    }

    const displayCategories = () => {
        return categories.map((category, key) => <button onClick={filterCategory} className="btn btn-secondary" key={key}>
            {category }
        </button>)
    }
    
    const displayProducts = () => {
        const productTemp = productList.filter(product => {
            console.log(searchInput)
            return product.title.startsWith(searchInput)
        })
        if (productTemp.length > 0)
        {
            return productTemp.map((product, key) => {
                return (<Product product={product} key={key}/>)
            })
        }
        else
        {
            return productList.map((product, key) => {
                return (<Product product={product} key={key}/>)
            })
        }
    }
    useEffect(() => {
        getProduct()
        getCategories()
    }, [])
    return <div className="container-fluix mx-auto w-75 my-3">
        <h2>Search :</h2>
        <form>
            <div className="form-group">
              <label>Search</label>
              <input type="text" id="search" className="form-control"/>
            </div>
            <input type="submit" value='Search' onClick={handleSearch} />
        <div className="row g-3 align-items-center">
            <hr />
            <h5>categories :</h5>
            <div className="btn-group">
                {displayCategories()}
            </div>
        </div>
        </form>
        <hr />
        <h1>
            liste des produits:
        </h1>
        <table className="table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Price</th>
                    <th>Description</th>
                    <th>image</th>
                    <th>Category</th>
                    <th>Rating</th>
                </tr>
            </thead>
            <tbody>
                {displayProducts()}
            </tbody>
        </table>
    </div>
}