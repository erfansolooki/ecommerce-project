import React from "react";
import { ISteppers } from "./types";

export const Stepper: React.FC<ISteppers> = ({
  currentStep,
  totalSteps,
  progressPercent = 100,
}) => {
  const steps = Array.from({ length: totalSteps }, (_, i) => i + 1);

  return (
    <div className="flex items-center justify-between w-full max-w-3xl mx-auto px-4">
      {steps.map((step, idx) => (
        <React.Fragment key={step}>
          {/* Step Circle */}
          <div
            className={`relative z-10 flex items-center justify-center w-8 h-8 rounded-full text-sm font-medium transition-all duration-200
              ${
                step === currentStep
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-500"
              }
            `}
          >
            {step}
          </div>

          {/* Progress Bar — skip for last step */}
          {idx < steps.length - 1 && (
            <div className="flex-1 h-1 mx-2 bg-gray-200 rounded relative overflow-hidden">
              {/* Filled if previous step */}
              {step < currentStep && (
                <div className="absolute top-0 left-0 h-full w-full bg-blue-600" />
              )}

              {/* Partial if current step */}
              {step === currentStep && (
                <div
                  className="absolute top-0 left-0 h-full bg-blue-600 transition-all duration-300"
                  style={{ width: `${progressPercent}%` }}
                />
              )}
            </div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};
