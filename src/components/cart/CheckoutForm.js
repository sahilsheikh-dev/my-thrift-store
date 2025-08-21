import { useState } from "react";

export default function CheckoutForm({ items, onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
  });

  const total = items.reduce((sum, i) => sum + i.price, 0);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSendWhatsApp = () => {
    if (!formData.name || !formData.phone || !formData.address) {
      alert("Please fill all fields!");
      return;
    }

    // 🆕 Added product id here
    const cartDetails = items
      .map((it) => `🆔 ${it.id} | ${it.name} - ₹${it.price}`)
      .join("\n");

    const message = `🛍️ New Order Request\n
👤 Name: ${formData.name}
📞 Phone: ${formData.phone}
🏡 Address: ${formData.address}

🛒 Cart:
${cartDetails}

💰 Total: ₹${total}

Please confirm my order.`;

    const encodedMessage = encodeURIComponent(message);
    const phoneNumber = "+918766509387"; // <-- your WhatsApp number
    window.open(
      `https://wa.me/${phoneNumber}?text=${encodedMessage}`,
      "_blank"
    );
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <div className="bg-white rounded-2xl shadow-xl p-6 w-full max-w-md">
        <h3 className="text-lg font-bold mb-4">Delivery Information</h3>

        <div className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            className="input input-bordered border rounded-xl p-3 w-full"
            value={formData.name}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            className="input input-bordered border rounded-xl p-3 w-full"
            value={formData.phone}
            onChange={handleInputChange}
          />
          <textarea
            name="address"
            placeholder="Delivery Address"
            className="textarea textarea-bordered border rounded-xl p-3 w-full"
            rows="3"
            value={formData.address}
            onChange={handleInputChange}
          />
        </div>

        <div className="flex gap-2 mt-6">
          <button className="btn btn-success w-1/2" onClick={onClose}>
            Cancel
          </button>
          <button
            className="btn btn-outline w-1/2"
            onClick={handleSendWhatsApp}
          >
            Confirm & Send
          </button>
        </div>
      </div>
    </div>
  );
}
