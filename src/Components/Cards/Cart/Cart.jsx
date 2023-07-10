import './Cart.css';
import { useCart } from 'react-use-cart';


const Cart = () => {

    const {
        isEmpty,
        totalUniqueItems,
        items,
        totalItems,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart,
    } = useCart();
    if (isEmpty) return <h5 className='text-center py-5'>Seu carrinho está vazio!</h5>
    return (
        <div className='container-fluid py-3'>
            <div className="row justify-content-center">
                <h4 className="text-center py-3 text-decoration-underline">Meu carrinho</h4>
                <div className="col-sm-12 col-md-12 col-lg-8 col-xl-8 col-xxl-8 py-4">
                    <div className="d-flex justify-content-center py-3">
                        <p className='position-relative fw-bolder text-title'>Carrinho <span className='position-absolute translate-middle rounded-pill badge bg-danger mx-2'>{totalUniqueItems}</span></p>
                        <p className='fw-bolder text-title px-3'>Itens adicionados<span className='position-absolute translate-middle rounded-pill badge bg-success mx-2'>{totalItems}</span></p>
                    </div>
                    <div>
                        <table className="align-content-center table table-light table-primary table-hover m-0">
                            <tbody>
                                {items.map((item, index) => {
                                    return (
                                        <tr key={index} className='align-middle'>
                                            <td><img src={item.img} className='img-cart' alt={item.title} /></td>
                                            <td>{item.title}</td>
                                            <td>Preço: R${item.price}</td>
                                            <td>Quantidade: {item.quantity}</td>
                                            <td>
                                                <button onClick={() => updateItemQuantity(item.id, item.quantity - 1)} className='btn btn-outline-dark ms-1'>-</button>
                                                <button onClick={() => updateItemQuantity(item.id, item.quantity + 1)} className='btn btn-outline-dark ms-1'>+</button>
                                                <button onClick={() => removeItem(item.id)} className='btn btn-outline-danger ms-5'>Remover</button>
                                            </td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                    <div className="d-flex justify-content-between py-3">
                        <button onClick={() => emptyCart()} className="btn btn-outline-danger">Esvaziar carrinho</button>
                        <h3>Valor total: R${cartTotal}</h3>
                        <div className="d-flex justify-content-end">
                            <button onClick={(e) => e.preventDefault()} className="btn btn-success">Completar compra</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart