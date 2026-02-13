"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Building2,
  Home,
  Factory,
  Leaf,
  MapPin,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
} from "lucide-react";

type ProjectType = "peb" | "rcc" | "specialized" | "green" | null;

interface FormData {
  // Step 1
  fullName: string;
  companyName: string;
  workEmail: string;
  phoneNumber: string;
  projectType: ProjectType;
  squareFootage: string;
  projectLocation: string;
  projectOverview: string;
  // Step 2
  budget: string;
  timeline: string;
  requirements: string;
  additionalNotes: string;
}

export default function QuoteForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    companyName: "",
    workEmail: "",
    phoneNumber: "",
    projectType: null,
    squareFootage: "",
    projectLocation: "",
    projectOverview: "",
    budget: "",
    timeline: "",
    requirements: "",
    additionalNotes: "",
  });

  const projectTypes = [
    {
      id: "peb" as ProjectType,
      icon: Building2,
      label: "PEB Steel Buildings",
    },
    {
      id: "rcc" as ProjectType,
      icon: Home,
      label: "Turnkey RCC",
    },
    {
      id: "specialized" as ProjectType,
      icon: Factory,
      label: "Specialized Facilities",
    },
    {
      id: "green" as ProjectType,
      icon: Leaf,
      label: "Green Construction",
    },
  ];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleProjectTypeSelect = (type: ProjectType) => {
    setFormData((prev) => ({ ...prev, projectType: type }));
  };

  const handleNext = () => {
    if (currentStep < 2) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission
  };

  const isStep1Valid = () => {
    return (
      formData.fullName &&
      formData.companyName &&
      formData.workEmail &&
      formData.phoneNumber &&
      formData.projectType &&
      formData.projectOverview
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-white rounded-lg shadow-sm border border-border"
    >
      {/* Progress Header */}
      <div className="border-b border-border p-6 lg:p-8">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-foreground">
            Project Details{" "}
            <span className="text-muted-foreground font-normal">
              Step {currentStep} of 2
            </span>
          </h3>
        </div>

        {/* Progress Bar */}
        <div className="flex gap-2">
          <div
            className={`flex-1 h-1.5 rounded-full ${
              currentStep >= 1 ? "bg-primary" : "bg-muted"
            }`}
          />
          <div
            className={`flex-1 h-1.5 rounded-full ${
              currentStep >= 2 ? "bg-primary" : "bg-muted"
            }`}
          />
        </div>
      </div>

      {/* Form Content */}
      <form onSubmit={handleSubmit} className="p-6 lg:p-8">
        {currentStep === 1 && (
          <div className="space-y-6">
            {/* Row 1: Full Name and Company Name */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="fullName"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Full Name <span className="text-destructive">*</span>
                </label>
                <Input
                  id="fullName"
                  name="fullName"
                  type="text"
                  placeholder="John Doe"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  required
                  className="h-11"
                />
              </div>
              <div>
                <label
                  htmlFor="companyName"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Company Name <span className="text-destructive">*</span>
                </label>
                <Input
                  id="companyName"
                  name="companyName"
                  type="text"
                  placeholder="ABC Corp Ltd."
                  value={formData.companyName}
                  onChange={handleInputChange}
                  required
                  className="h-11"
                />
              </div>
            </div>

            {/* Row 2: Work Email and Phone Number */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="workEmail"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Work Email <span className="text-destructive">*</span>
                </label>
                <Input
                  id="workEmail"
                  name="workEmail"
                  type="email"
                  placeholder="john@company.com"
                  value={formData.workEmail}
                  onChange={handleInputChange}
                  required
                  className="h-11"
                />
              </div>
              <div>
                <label
                  htmlFor="phoneNumber"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Phone Number <span className="text-destructive">*</span>
                </label>
                <Input
                  id="phoneNumber"
                  name="phoneNumber"
                  type="tel"
                  placeholder="+880 1XXX XXXXXX"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                  required
                  className="h-11"
                />
              </div>
            </div>

            {/* Project Type Selection */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-3">
                Project Type <span className="text-destructive">*</span>
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {projectTypes.map((type) => (
                  <button
                    key={type.id}
                    type="button"
                    onClick={() => handleProjectTypeSelect(type.id)}
                    className={`flex items-center gap-3 p-4 rounded-lg border-2 transition-all duration-200 ${
                      formData.projectType === type.id
                        ? "border-primary bg-primary/5"
                        : "border-border hover:border-primary/50 bg-white"
                    }`}
                  >
                    <type.icon
                      className={`w-5 h-5 ${
                        formData.projectType === type.id
                          ? "text-primary"
                          : "text-muted-foreground"
                      }`}
                    />
                    <span
                      className={`text-sm font-medium ${
                        formData.projectType === type.id
                          ? "text-primary"
                          : "text-foreground"
                      }`}
                    >
                      {type.label}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Row 3: Square Footage and Location */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="squareFootage"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Estimated Square Footage
                </label>
                <div className="relative">
                  <Input
                    id="squareFootage"
                    name="squareFootage"
                    type="text"
                    placeholder="e.g. 15000"
                    value={formData.squareFootage}
                    onChange={handleInputChange}
                    className="h-11 pr-16"
                  />
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground">
                    sq. ft.
                  </span>
                </div>
              </div>
              <div>
                <label
                  htmlFor="projectLocation"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Project Location
                </label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    id="projectLocation"
                    name="projectLocation"
                    type="text"
                    placeholder="City or District"
                    value={formData.projectLocation}
                    onChange={handleInputChange}
                    className="h-11 pl-10"
                  />
                </div>
              </div>
            </div>

            {/* Project Overview */}
            <div>
              <label
                htmlFor="projectOverview"
                className="block text-sm font-medium text-foreground mb-2"
              >
                Project Overview / Special Requirements{" "}
                <span className="text-destructive">*</span>
              </label>
              <Textarea
                id="projectOverview"
                name="projectOverview"
                placeholder="Briefly describe your project needs..."
                value={formData.projectOverview}
                onChange={handleInputChange}
                required
                rows={5}
                className="resize-none"
              />
            </div>
          </div>
        )}

        {currentStep === 2 && (
          <div className="space-y-6">
            {/* Budget Range */}
            <div>
              <label
                htmlFor="budget"
                className="block text-sm font-medium text-foreground mb-2"
              >
                Estimated Budget Range
              </label>
              <select
                id="budget"
                name="budget"
                value={formData.budget}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, budget: e.target.value }))
                }
                className="w-full h-11 rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-xs focus-visible:border-ring focus-visible:ring-ring/50 outline-none"
              >
                <option value="">Select budget range</option>
                <option value="under-10L">Under 10 Lakh BDT</option>
                <option value="10L-50L">10 Lakh - 50 Lakh BDT</option>
                <option value="50L-1Cr">50 Lakh - 1 Crore BDT</option>
                <option value="1Cr-5Cr">1 Crore - 5 Crore BDT</option>
                <option value="above-5Cr">Above 5 Crore BDT</option>
              </select>
            </div>

            {/* Project Timeline */}
            <div>
              <label
                htmlFor="timeline"
                className="block text-sm font-medium text-foreground mb-2"
              >
                Expected Project Timeline
              </label>
              <select
                id="timeline"
                name="timeline"
                value={formData.timeline}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, timeline: e.target.value }))
                }
                className="w-full h-11 rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-xs focus-visible:border-ring focus-visible:ring-ring/50 outline-none"
              >
                <option value="">Select timeline</option>
                <option value="urgent">Urgent (Within 1 month)</option>
                <option value="1-3months">1-3 Months</option>
                <option value="3-6months">3-6 Months</option>
                <option value="6-12months">6-12 Months</option>
                <option value="flexible">Flexible</option>
              </select>
            </div>

            {/* Specific Requirements */}
            <div>
              <label
                htmlFor="requirements"
                className="block text-sm font-medium text-foreground mb-2"
              >
                Specific Requirements or Certifications Needed
              </label>
              <Textarea
                id="requirements"
                name="requirements"
                placeholder="e.g., LEED certification, specific safety standards, special equipment..."
                value={formData.requirements}
                onChange={handleInputChange}
                rows={4}
                className="resize-none"
              />
            </div>

            {/* Additional Notes */}
            <div>
              <label
                htmlFor="additionalNotes"
                className="block text-sm font-medium text-foreground mb-2"
              >
                Additional Notes
              </label>
              <Textarea
                id="additionalNotes"
                name="additionalNotes"
                placeholder="Any other information you'd like us to know..."
                value={formData.additionalNotes}
                onChange={handleInputChange}
                rows={4}
                className="resize-none"
              />
            </div>
          </div>
        )}

        {/* Form Actions */}
        <div className="flex items-center justify-between mt-8 pt-6 border-t border-border">
          <div>
            {currentStep > 1 && (
              <Button
                type="button"
                variant="outline"
                onClick={handlePrevious}
                className="gap-2"
              >
                <ArrowLeft className="w-4 h-4" />
                Previous
              </Button>
            )}
          </div>

          <div>
            {currentStep < 2 ? (
              <Button
                type="button"
                onClick={handleNext}
                disabled={!isStep1Valid()}
                className="bg-primary hover:bg-primary/90 text-white gap-2 px-8"
              >
                Next Step
                <ArrowRight className="w-4 h-4" />
              </Button>
            ) : (
              <Button
                type="submit"
                className="bg-primary hover:bg-primary/90 text-white gap-2 px-8"
              >
                Submit Quote Request
                <ArrowRight className="w-4 h-4" />
              </Button>
            )}
          </div>
        </div>

        {/* Terms Text */}
        {currentStep === 2 && (
          <p className="text-xs text-muted-foreground text-center mt-6">
            By clicking submit, you agree to our Terms of Service and Privacy Policy. A
            project manager will contact you within 24-48 hours.
          </p>
        )}
      </form>
    </motion.div>
  );
}
