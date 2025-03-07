import React from "react";
import { Separator } from "../ui/separator";
export default function FAQ() {
  const faqsList = [
    {  q: "What symptoms are you experiencing?",
      a: "Please describe any symptoms you are currently experiencing.",
},
{
  q: "How long have you been experiencing these symptoms?",
      a: "Provide the duration for which you have been experiencing these symptoms.",
},
{
  q: "Have you taken any medication?",
      a: "List any medications you have taken to alleviate the symptoms.",
},
{
  q: "Do you have any pre-existing conditions?",
      a: "Mention any pre-existing health conditions you have.",
},
{
  q: "What is your age and gender?",
      a: "Provide your age and gender for better diagnosis.",
},
  ];

  return (
      <section className="relative">
        <img
            className="absolute inset-x-0 -top-20 opacity-20"
            src={
              "https://pipe.com/_next/image?url=%2Fassets%2Fimg%2Fhero-left.png&w=384&q=75"
            }
            width={1000}
            height={1000}
            alt="back bg"
        />

        <div className="py-14 relative max-w-screen-xl mx-auto px-4 gap-12 md:flex md:px-8">
          <div className="flex-1">
            <div className="max-w-lg">
              <h3 className="font-semibold text-cyan-600">
                Health Assessment Questions
              </h3>
              <p className="mt-3 text-gray-400 text-3xl font-extrabold sm:text-4xl">
                Answer the following questions to get a potential diagnosis
              </p>
              <Separator className="h-[1px] mt-5 bg-white/10" />
            </div>
          </div>
          <div className="flex-1 mt-12 md:mt-0">
            <ul className="space-y-4 divide-y">
              {faqsList.map((item, idx) => (
                  <li className="py-5" key={idx}>
                    <summary className="flex items-center justify-between font-semibold text-gray-700">
                      {item.q}
                    </summary>
                    <p
                        dangerouslySetInnerHTML={{ __html: item.a }}
                        className="mt-3 text-gray-300 leading-relaxed"
                    ></p>
                  </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="py-14 relative max-w-screen-xl mx-auto px-4 gap-12 md:flex md:px-8">
          <div className="flex-1">
            <h3 className="font-semibold text-cyan-600">
              Potential Issues and Solutions
            </h3>
            <div id="health-graph" className="mt-5">
              {/* Graph of SAD rates will be rendered here */}
            </div>
          </div>
        </div>
      </section>
  );
}
