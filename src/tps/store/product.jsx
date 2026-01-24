import Rating from "./rating"

export default function Product({product})
{
    return <tr>
        <td>{product.id}</td>
        <td>{product.title}</td>
        <td>{product.price}</td>
        <td>{product.description.slice(0, 100)}...</td>
        <td><img width={200} src={product.image} /></td>
        <td>{product.category}</td>
        <td> <Rating count={product.rating.count} rate={product.rating.rate} /> </td>
    </tr>
}