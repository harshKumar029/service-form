export default function Step1({ formData, handleChange }) {
  return (
    <div className="grid md:grid-cols-2 gap-8">
      <div>
        <label className="block mb-2 font-medium text-gray-700">Child's Age</label>
        <input
          type="number"
          name="age"
          value={formData.age || ""}
          onChange={handleChange}
          placeholder="Enter age"
          className="w-full border border-gray-300 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          required
        />
      </div>

      <div>
        <label className="block mb-2 font-medium text-gray-700">Diagnosis</label>
        <input
          type="text"
          name="diagnosis"
          value={formData.diagnosis || ""}
          onChange={handleChange}
          placeholder="e.g., Autism, ADHD"
          className="w-full border border-gray-300 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          required
        />
      </div>

      <div className="md:col-span-2">
        <label className="block mb-2 font-medium text-gray-700">Current School Type</label>
        <div className="flex gap-8">
          {["Public", "Private", "Homeschool"].map((type) => (
            <label key={type} className="inline-flex items-center gap-2">
              <input
                type="radio"
                name="schoolType"
                value={type}
                checked={formData.schoolType === type}
                onChange={handleChange}
                className="accent-indigo-600"
              />
              {type}
            </label>
          ))}
        </div>
      </div>
    </div>
  );
}
