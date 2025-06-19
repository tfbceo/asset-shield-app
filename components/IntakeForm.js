import React, { useState } from 'react';
export default function IntakeForm() {
  const [form, setForm] = useState({
    income: '', debt: '', assets: '', housingStatus: '', legalActions: '',
  });
  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = (e) => { e.preventDefault(); console.log(form); };
  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded-xl shadow-md mt-6">
      <h2 className="text-2xl font-bold mb-4">Start Your Evaluation</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input name="income" value={form.income} onChange={handleChange} placeholder="Monthly Income" className="w-full border p-2 rounded" />
        <input name="debt" value={form.debt} onChange={handleChange} placeholder="Total Debt" className="w-full border p-2 rounded" />
        <input name="assets" value={form.assets} onChange={handleChange} placeholder="Total Assets" className="w-full border p-2 rounded" />
        <input name="housingStatus" value={form.housingStatus} onChange={handleChange} placeholder="Own/Rent/Foreclosure" className="w-full border p-2 rounded" />
        <textarea name="legalActions" value={form.legalActions} onChange={handleChange} placeholder="Any lawsuits or collections?" className="w-full border p-2 rounded" />
        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">Submit</button>
      </form>
    </div>
  );
}