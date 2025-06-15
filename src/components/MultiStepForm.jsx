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
          /\S+@\S+\.\S+/.test(formData.email) && // basic email check
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
      alert("Please fill out all required fields correctly before proceeding.");
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
        <div className="bg-white p-16 rounded-2xl shadow-2xl text-center max-w-xl w-full">
          <h2 className="text-4xl font-bold text-green-600 mb-4">🎉 Thank You!</h2>
          <p className="text-lg text-gray-700">
            Your request has been successfully submitted.
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="flex items-center justify-center min-h-screen bg-gradient-to-br from-sky-100 to-indigo-200 px-6">
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-2xl shadow-2xl p-10 md:p-16 w-full max-w-4xl space-y-10"
      >
        <h1 className="text-3xl font-bold text-center text-indigo-700">
          Learning Support Request Form
        </h1>

        {/* Progress Bar */}
        <div>
          <div className="flex justify-between mb-3 text-sm font-semibold text-gray-600">
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
        <div className="flex justify-end gap-4 pt-8">
          {step > 1 && (
            <button
              type="button"
              onClick={prevStep}
              className="px-8 py-3 rounded-lg bg-gray-200 text-gray-700 hover:bg-gray-300 transition-transform hover:scale-105"
            >
              Back
            </button>
          )}
          {step < 3 && (
            <button
              type="button"
              onClick={nextStep}
              className="px-8 py-3 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition-transform hover:scale-105"
            >
              Next
            </button>
          )}
          {step === 3 && (
            <button
              type="submit"
              className="px-8 py-3 rounded-lg bg-green-600 text-white hover:bg-green-700 transition-transform hover:scale-105"
            >
              Submit
            </button>
          )}
        </div>
      </form>
    </main>
  );
}
