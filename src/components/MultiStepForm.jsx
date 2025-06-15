import { useState } from "react";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";

export default function MultiStepForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked, multiple, options } = e.target;
    if (multiple) {
      const values = Array.from(options)
        .filter((option) => option.selected)
        .map((option) => option.value);
      setFormData({ ...formData, [name]: values });
    } else {
      setFormData({
        ...formData,
        [name]: type === "checkbox" ? checked : value,
      });
    }
  };

  const validateStep = () => {
    switch (step) {
      case 1:
        return formData.age && formData.diagnosis && formData.schoolType;
      case 2:
        return (
          formData.supportType &&
          formData.supportType.length > 0 &&
          formData.frequency
        );
      case 3:
        return (
          formData.parentName &&
          formData.email &&
          /\S+@\S+\.\S+/.test(formData.email) &&
          formData.phone
        );
      default:
        return true;
    }
  };

  const nextStep = () => {
    if (validateStep()) {
      setStep((prev) => prev + 1);
    } else {
      alert("Please fill in all required fields before proceeding.");
    }
  };

  const prevStep = () => setStep((prev) => prev - 1);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateStep()) {
      console.log(formData);
      setSubmitted(true);
    } else {
      alert("Please complete all required fields before submitting.");
    }
  };

  if (submitted) {
    return (
      <main className="flex items-center justify-center min-h-screen bg-gradient-to-br from-sky-100 to-indigo-200">
        <div className="bg-white p-10 rounded-xl shadow-2xl text-center max-w-lg w-full">
          <h2 className="text-3xl font-bold text-green-600 mb-4">🎉 Thank You!</h2>
          <p className="text-gray-700">
            Your request has been successfully submitted.
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="flex items-center justify-center min-h-screen sm:bg-gradient-to-br from-sky-100 to-indigo-200 px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-2xl sm:shadow-2xl p-8 md:p-12 w-full max-w-2xl space-y-8"
      >
        {/* Title */}
        <h1 className="text-2xl md:text-3xl font-bold text-center text-indigo-700">
          Learning Support Request Form
        </h1>

        {/* Progress Bar */}
        <div>
          <div className="flex justify-between mb-2 text-sm font-medium text-gray-600">
            <span className={step >= 1 ? "text-indigo-700" : ""}>Step 1</span>
            <span className={step >= 2 ? "text-indigo-700" : ""}>Step 2</span>
            <span className={step === 3 ? "text-indigo-700" : ""}>Step 3</span>
          </div>
          <div className="w-full bg-gray-300 h-2 rounded-full overflow-hidden">
            <div
              className={`h-2 bg-gradient-to-r from-indigo-500 to-indigo-700 rounded-full transition-all duration-500 ${
                step === 1 ? "w-1/3" : step === 2 ? "w-2/3" : "w-full"
              }`}
            ></div>
          </div>
        </div>

        {/* Step Components */}
        {step === 1 && <Step1 formData={formData} handleChange={handleChange} />}
        {step === 2 && <Step2 formData={formData} handleChange={handleChange} />}
        {step === 3 && <Step3 formData={formData} handleChange={handleChange} />}

        {/* Navigation Buttons */}
        <div className="flex flex-col md:flex-row justify-between pt-6 gap-4">
          {step > 1 && (
            <button
              type="button"
              onClick={prevStep}
              className="px-6 py-3 rounded-lg bg-gray-200 text-gray-700 hover:bg-gray-300 transition"
            >
              Back
            </button>
          )}
          <div className="flex gap-4 md:ml-auto">
            {step < 3 && (
              <button
                type="button"
                onClick={nextStep}
                className="px-6 py-3 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition"
              >
                Next
              </button>
            )}
            {step === 3 && (
              <button
                type="submit"
                className="px-6 py-3 rounded-lg bg-green-600 text-white hover:bg-green-700 transition"
              >
                Submit
              </button>
            )}
          </div>
        </div>
      </form>
    </main>
  );
}
