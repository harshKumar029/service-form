export default function Step3({ formData, handleChange }) {
  return (
    <div className="space-y-6">
      <div>
        <label className="block mb-1 font-medium text-gray-700">Parent's Name</label>
        <input
          type="text"
          name="parentName"
          value={formData.parentName || ""}
          onChange={handleChange}
          placeholder="Your name"
          className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          required
        />
      </div>

      <div>
        <label className="block mb-1 font-medium text-gray-700">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email || ""}
          onChange={handleChange}
          placeholder="you@example.com"
          className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          required
        />
      </div>

      <div>
        <label className="block mb-1 font-medium text-gray-700">Phone Number</label>
        <input
          type="tel"
          name="phone"
          value={formData.phone || ""}
          onChange={handleChange}
          placeholder="+1234567890"
          className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          required
        />
      </div>
    </div>
  );
}
