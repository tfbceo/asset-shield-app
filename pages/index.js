import IntakeForm from '../components/IntakeForm';
export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="text-center pt-10">
        <h1 className="text-4xl font-bold">Asset Shield Evaluation</h1>
        <p className="mt-2 text-gray-600">Find the best strategy for your financial situation</p>
      </div>
      <IntakeForm />
    </div>
  );
}