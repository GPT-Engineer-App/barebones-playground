import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-2">Welcome to Your Bare-Bones App</h1>
        <p className="text-xl text-gray-600">Start building your application by editing this page.</p>
      </header>
      <Button size="lg">Get Started</Button>
    </div>
  );
};

export default Index;