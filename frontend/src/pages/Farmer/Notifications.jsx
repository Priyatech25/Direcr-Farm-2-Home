import { useState } from "react";
import {
  FaBell,
  FaTrash,
  FaCheckCircle,
} from "react-icons/fa";

function Notifications() {

  const [notifications, setNotifications] = useState([
    {
      id: 1,
      title: "New Order Received",
      message: "Priya ordered 10 Kg Tomato",
      time: "2 mins ago",
      read: false,
    },
    {
      id: 2,
      title: "Payment Received",
      message: "₹1,250 credited successfully",
      time: "1 hour ago",
      read: false,
    },
    {
      id: 3,
      title: "Low Stock Alert",
      message: "Organic Mango stock is below 10 Kg",
      time: "Today",
      read: true,
    },
    {
      id: 4,
      title: "Customer Review",
      message: "⭐ You received a 5-star rating",
      time: "Yesterday",
      read: true,
    },
  ]);

  const markAsRead = (id) => {
    setNotifications(
      notifications.map((item) =>
        item.id === id
          ? { ...item, read: true }
          : item
      )
    );
  };

  const deleteNotification = (id) => {
    setNotifications(
      notifications.filter((item) => item.id !== id)
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">

      <h1 className="text-4xl font-bold text-green-700 mb-8">
        🔔 Notifications
      </h1>

      <div className="space-y-5">

        {notifications.map((item) => (

          <div
            key={item.id}
            className={`rounded-xl shadow-lg p-6 ${
              item.read
                ? "bg-white"
                : "bg-green-50 border-l-4 border-green-700"
            }`}
          >

            <div className="flex justify-between">

              <div>

                <h2 className="text-xl font-bold flex items-center gap-2">

                  <FaBell className="text-green-700"/>

                  {item.title}

                </h2>

                <p className="text-gray-600 mt-2">
                  {item.message}
                </p>

                <p className="text-sm text-gray-400 mt-2">
                  {item.time}
                </p>

              </div>

              <div className="flex gap-3">

                {!item.read && (

                  <button
                    onClick={() => markAsRead(item.id)}
                    className="bg-green-600 text-white p-3 rounded-lg hover:bg-green-700"
                  >
                    <FaCheckCircle/>
                  </button>

                )}

                <button
                  onClick={() => deleteNotification(item.id)}
                  className="bg-red-600 text-white p-3 rounded-lg hover:bg-red-700"
                >
                  <FaTrash/>
                </button>

              </div>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}

export default Notifications;