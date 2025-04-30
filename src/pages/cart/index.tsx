import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import { Link } from "react-router-dom";

export function Cart() {
  const { cart, total, addItemCart, removeItemCart, clearCart } =
    useContext(CartContext);

  function formatPrice(price: number) {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(price);
  }

  function handleClearCart() {
    clearCart();
  }

  return (
    <div className="w-full max-w-7xl mx-auto px-1">
      <div className="relative">
        <h1 className="font-medium text-2xl text-center my-4">Meu carrinho</h1>
        {cart.length > 0 && (
          <button
            className="bg-slate-600 px-2 rounded text-white font-medium absolute top-0 right-0 cursor-pointer"
            onClick={handleClearCart}
          >
            X
          </button>
        )}
      </div>

      {cart.length === 0 && (
        <div className="flex flex-col items-center justify-center">
          <p className="font-medium">Ops seu carrinho está vazio...</p>
          <Link
            className="bg-slate-600 my-3 p-1 px-3 text-white font-medium rounded"
            to={"/"}
          >
            Acessar produtos
          </Link>
        </div>
      )}

      {cart.map((item) => (
        <section
          key={item.id}
          className="flex items-center justify-between border-b-2 border-gray-300"
        >
          <img className="w-28" src={item.cover} alt={item.title} />

          <strong>Preço: {formatPrice(item.price)}</strong>

          <div className="flex items-center justify-center gap-3">
            <button
              onClick={() => removeItemCart(item)}
              className="bg-slate-600 px-2 rounded text-white font-medium flex items-center justify-center cursor-pointer"
            >
              -
            </button>
            {item.amount}
            <button
              onClick={() => addItemCart(item)}
              className="bg-slate-600 px-2 rounded text-white font-medium flex items-center justify-center cursor-pointer"
            >
              +
            </button>
          </div>

          <strong className="float-right">
            SubTotal: {formatPrice(item.total)}
          </strong>
        </section>
      ))}

      {cart.length > 0 && <p className="font-bold mt-4">Total: {total}</p>}
    </div>
  );
}
