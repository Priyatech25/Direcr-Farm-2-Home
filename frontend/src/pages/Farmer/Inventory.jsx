import { useState } from "react";
import { FaSearch, FaPlus, FaMinus } from "react-icons/fa";

function Inventory() {
  const [search, setSearch] = useState("");

  const [inventory, setInventory] = useState([
    {
      id: 1,
      product: "Fresh Tomato",
      category: "Vegetable",
      stock: 50,
      unit: "Kg",
    },
    {
      id: 2,
      product: "Organic Mango",
      category: "Fruit",
      stock: 8,
      unit: "Kg",
    },
    {
      id: 3,
      product: "Potato",
      category: "Vegetable",
      stock: 90,
      unit: "Kg",
    },
    {
      id: 4,
      product: "Apple",
      category: "Fruit",
      stock: 5,
      unit: "Kg",
    },
  ]);

  const increaseStock = (id) => {
    setInventory(
      inventory.map((item) =>
        item.id === id
          ? { ...item, stock: item.stock + 10 }
          : item
      )
    );
  };

  const decreaseStock = (id) => {
    setInventory(
      inventory.map((item) =>
        item.id === id && item.stock >= 10
          ? { ...item, stock: item.stock - 10 }
          : item
      )
    );
  };

  const filtered = inventory.filter((item) =>
    item.product.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100 p-8">

      <h1 className="text-4xl font-bold text-green-700 mb-8">
        📦 Inventory Management
      </h1>

      <div className="bg-white rounded-xl shadow-lg p-5 flex items-center gap-3 mb-8">

        <FaSearch className="text-gray-500"/>

        <input
          type="text"
          placeholder="Search Product..."
          className="w-full outline-none"
          value={search}
          onChange={(e)=>setSearch(e.target.value)}
        />

      </div>

      <div className="bg-white rounded-xl shadow-lg overflow-hidden">

        <table className="w-full">

          <thead className="bg-green-700 text-white">

            <tr>

              <th className="p-4">Product</th>
              <th>Category</th>
              <th>Stock</th>
              <th>Status</th>
              <th>Actions</th>

            </tr>

          </thead>

          <tbody>

            {filtered.map((item)=>(
              <tr
                key={item.id}
                className="border-b text-center hover:bg-gray-50"
              >

                <td className="p-4">{item.product}</td>

                <td>{item.category}</td>

                <td>
                  {item.stock} {item.unit}
                </td>

                <td>

                  {item.stock<=10 ? (

                    <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full">
                      Low Stock
                    </span>

                  ):(
                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full">
                      Available
                    </span>
                  )}

                </td>

                <td>

                  <div className="flex justify-center gap-3">

                    <button
                      onClick={()=>increaseStock(item.id)}
                      className="bg-green-600 text-white p-2 rounded-lg"
                    >
                      <FaPlus/>
                    </button>

                    <button
                      onClick={()=>decreaseStock(item.id)}
                      className="bg-red-600 text-white p-2 rounded-lg"
                    >
                      <FaMinus/>
                    </button>

                  </div>

                </td>

              </tr>
            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default Inventory;