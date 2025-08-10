import React from 'react';
import Image from 'next/image';
import { Video, Settings, BarChart3 } from 'lucide-react';

const steps = [
  {
    id: 1,
    title: (
      <span className="text-teal-500">
        Connect Your Video
      </span>
    ),
    description:
      "Easily link your cloud storage, CCTV streams, or upload video files directly. We support all major formats and protocols.",
    icon: Video,
  },
  {
    id: 2,
    title: (
      <span className="text-teal-500">
        Configure Analysis
      </span>
    ),
    description:
      "Choose a template or define custom metrics relevant to your specific goals. Set up zones, tracking parameters, and alerts.",
    icon: Settings,
  },
  {
    id: 3,
    title: (
      <span className="text-teal-500">
        Visualize & Act
      </span>
    ),
    description:
      "Access real-time data, historical trends, and alerts on your dashboard to make informed decisions that drive business growth.",
    icon: BarChart3,
  },
];

export default function Steps() {
  return (
    <section className="steps-section py-10 sm:py-16 lg:py-20 xl:py-24 bg-white">
      <div className="steps-container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="steps-header grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-start mb-10 sm:mb-12 lg:mb-16">
          <div className="steps-heading-container">
                          <br className="hidden sm:block" />

            <h2 className="steps-main-title text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight">
              Get Powerful Video
              <br className="hidden sm:block" />
              <span className="sm:block"> Insights in Just 3 Simple,</span>
              <span className="sm:block"> Fast, and Actionable Steps</span>
            </h2>
          </div>

          <div className="steps-description-container lg:pt-2">
            <p className="steps-description text-gray-600 text-base sm:text-lg lg:text-xl leading-relaxed">
              Our streamlined onboarding process helps you go from setup to
              actionable insights in minutes—not days. With simple
              integration and real-time analysis, you can start making
              smarter decisions almost immediately—no technical hassle
              required.
            </p>
          </div>
        </div>

        <div className="steps-content grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 xl:gap-20 items-start">
          <div className="steps-list space-y-6 sm:space-y-8 lg:space-y-12">
            {steps.map((step, idx) => (
              <div key={step.id} className="step-item flex items-start space-x-4 sm:space-x-6 group">
                <div className="step-icon-wrapper flex-shrink-0">
                  <div className="step-icon-container w-10 sm:w-12 h-10 sm:h-12 bg-gradient-to-br from-cyan-50 to-teal-50 border-2 border-cyan-200 rounded-lg sm:rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:border-cyan-300 group-hover:bg-gradient-to-br group-hover:from-cyan-100 group-hover:to-teal-100">
                    <step.icon className="w-5 sm:w-6 h-5 sm:h-6 text-cyan-500 transition-colors duration-300 group-hover:text-cyan-600" />
                  </div>
                  {idx < steps.length - 1 && (
                    <div className="connecting-line w-0.5 h-12 sm:h-16 lg:h-20 bg-gradient-to-b from-gray-200 to-gray-100 mx-auto mt-3 sm:mt-4 transition-all duration-300 group-hover:from-cyan-200 group-hover:to-cyan-100"></div>
                  )}
                </div>

                <div className="step-content flex-1 pt-0.5 sm:pt-1">
                  <h3 className="step-title text-lg sm:text-xl lg:text-xl font-semibold text-cyan-600 mb-2 sm:mb-3 leading-tight transition-colors duration-300 group-hover:text-cyan-700">
                    {step.title}
                  </h3>
                  <p className="step-description text-sm sm:text-base text-gray-600 leading-relaxed transition-colors duration-300 group-hover:text-gray-700">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="steps-image-container lg:pl-4 xl:pl-8 order-first lg:order-last">
            <div className="steps-image-wrapper relative group">
              <div className="steps-image-frame relative overflow-hidden rounded-xl sm:rounded-2xl shadow-xl group-hover:shadow-2xl transition-all duration-500">
                <Image
                  src="/images/steps.png"
                  alt="Video analysis dashboard illustration showing hands typing on laptop with video analytics interface"
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                  priority
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 40vw"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl sm:rounded-2xl"></div>
              </div>
              
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-br from-cyan-200 to-teal-200 rounded-full opacity-60 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-br from-teal-200 to-emerald-200 rounded-full opacity-40 animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}