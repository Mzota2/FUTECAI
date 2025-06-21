import React from 'react'
export const metadata = {
  title: "FAQ",
  description: 'Do you have any questions about FutechAI? We\'re here to help!',
};
function FAQ() {
    return (
        <section className="bg-gray-50 min-h-screen py-12">
            <div className="max-w-3xl mx-auto px-4">
                <h1 className="text-4xl font-bold text-center text-gray-800 mb-4">Frequently Asked Questions</h1>
                <p className="text-lg text-center text-gray-600 mb-10">Find answers to common questions about FutechAI</p>
                <div className="space-y-4">
                    <details className="bg-white rounded-lg shadow p-4 group">
                        <summary className="cursor-pointer font-semibold text-gray-800 group-open:text-secondary transition-colors">
                            What is FutechAI?
                        </summary>
                        <p className="mt-2 text-gray-600">
                            FutechAI is a technology company specializing in artificial intelligence solutions for businesses, helping them automate processes and gain insights from data.
                        </p>
                    </details>
                    <details className="bg-white rounded-lg shadow p-4 group">
                        <summary className="cursor-pointer font-semibold text-gray-800 group-open:text-secondary transition-colors">
                            How can FutechAI help my business?
                        </summary>
                        <p className="mt-2 text-gray-600">
                            We offer AI-powered tools and consulting services to optimize your operations, improve decision-making, and drive innovation.
                        </p>
                    </details>
                    <details className="bg-white rounded-lg shadow p-4 group">
                        <summary className="cursor-pointer font-semibold text-gray-800 group-open:text-secondary transition-colors">
                            What industries does FutechAI serve?
                        </summary>
                        <p className="mt-2 text-gray-600">
                            FutechAI works with clients in finance, healthcare, retail, manufacturing, and more.
                        </p>
                    </details>
                    <details className="bg-white rounded-lg shadow p-4 group">
                        <summary className="cursor-pointer font-semibold text-gray-800 group-open:text-secondary transition-colors">
                            How do I get started with FutechAI?
                        </summary>
                        <p className="mt-2 text-gray-600">
                            Contact us through our website or email to schedule a free consultation with our experts.
                        </p>
                    </details>
                    <details className="bg-white rounded-lg shadow p-4 group">
                        <summary className="cursor-pointer font-semibold text-gray-800 group-open:text-secondary transition-colors">
                            Is my data secure with FutechAI?
                        </summary>
                        <p className="mt-2 text-gray-600">
                            Yes, we prioritize data security and comply with industry standards to protect your information.
                        </p>
                    </details>
                </div>
            </div>
        </section>
    );
}


export default FAQ