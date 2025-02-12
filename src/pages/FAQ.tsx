
import { Navbar } from '@/components/Navbar';
import { FAQ as FAQComponent } from '@/components/FAQ';

export default function FAQ() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gradient">
            Questions and Answers
          </h2>
          <FAQComponent />
        </div>
      </section>
    </div>
  );
}
