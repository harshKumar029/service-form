export default function Step2({ formData, handleChange }) {
  return (
    <div className="grid md:grid-cols-2 gap-8">
      <div className="md:col-span-2">
        <label className="block mb-2 font-medium text-gray-700">Type of Support Needed</label>
        <select
          name="supportType"
          value={formData.supportType || ""}
          onChange={handleChange}
          multiple
          className="w-full border border-gray-300 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          <option value="Speech Therapy">Speech Therapy</option>
          <option value="Occupational Therapy">Occupational Therapy</option>
          <option value="Behavioral Support">Behavioral Support</option>
        </select>
      </div>

      <div>
        <label className="block mb-2 font-medium text-gray-700">Preferred Frequency</label>
        <select
          name="frequency"
          value={formData.frequency || ""}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          <option value="">Select Frequency</option>
          <option value="Weekly">Weekly</option>
          <option value="Bi-Weekly">Bi-Weekly</option>
          <option value="Monthly">Monthly</option>
        </select>
      </div>

      <div>
        <label className="block mb-2 font-medium text-gray-700">Specific Requirements</label>
        <textarea
          name="requirements"
          value={formData.requirements || ""}
          onChange={handleChange}
          placeholder="Describe any special needs or requirements..."
          className="w-full border border-gray-300 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        ></textarea>
      </div>
    </div>
  );
}
