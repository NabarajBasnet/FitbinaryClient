"use client";

import { useState, useCallback, memo } from 'react';
import { useForm } from 'react-hook-form';
import { ArrowRight, Mail, Check, Phone, MapPin, Building, MessageCircle, User, AlertCircle } from 'lucide-react';

// Memoized input component to prevent re-renders
const MemoizedInput = memo(({ register, name, type = "text", placeholder, className, rows }) => {
    if (type === 'textarea') {
        return (
            <textarea
                {...register(name)}
                rows={rows}
                className={className}
                placeholder={placeholder}
            />
        );
    }

    return (
        <input
            type={type}
            {...register(name)}
            className={className}
            placeholder={placeholder}
        />
    );
});

// Memoized select component
const MemoizedSelect = memo(({ register, name, className, children }) => (
    <select {...register(name)} className={className}>
        {children}
    </select>
));

// Memoized error message component
const ErrorMessage = memo(({ error }) => (
    error ? (
        <p className="text-red-400 text-sm mt-1 flex items-center gap-1">
            <AlertCircle size={14} />
            {error.message}
        </p>
    ) : null
));

// Memoized step item
const StepItem = memo(({ number, title, description, isLast }) => (
    <div className={`flex items-start gap-6 ${!isLast ? 'mb-6' : ''}`}>
        <div className="p-3 bg-blue-500/10 rounded-lg">
            <span className="text-blue-400 font-bold text-lg">{number}</span>
        </div>
        <div>
            <h3 className="font-semibold text-white text-lg mb-1">{title}</h3>
            <p className="text-gray-300">{description}</p>
        </div>
    </div>
));

const DemoSection = () => {
    const [submitted, setSubmitted] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
        getValues
    } = useForm({
        mode: 'onSubmit' // Only validate on submit for maximum performance
    });

    const onSubmit = useCallback(async (data) => {
        try {
            const response = await fetch(`https://fitbinary.com/api/demo/submit-demo`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });

            if (response.ok) {
                setSubmitted(true);
                setTimeout(() => setSubmitted(false), 7000);
                reset();
            }
        } catch (error) {
            console.error('Submission error:', error);
        }
    }, [reset]);

    // Static class strings to prevent recreation
    const inputClass = "w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-white placeholder-gray-400 transition-colors duration-200";
    const labelClass = "block text-sm font-medium text-gray-300 mb-2";

    return (
        <section id="demo" className="w-full py-28 bg-gray-950">
            <div className="w-full mx-auto px-4">
                <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-16 mx-auto">
                    {/* Left side */}
                    <div>
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
                            Ready to Transform Your <span className="text-blue-400">Gym Management</span>?
                        </h2>
                        <p className="text-xl text-gray-300 mb-10">
                            Request a personalized demo and see how Fitbinary can help streamline your operations,
                            boost member engagement, and grow your fitness business.
                        </p>

                        <div className="bg-gray-800 rounded-2xl border border-gray-700 p-8 mb-10">
                            <StepItem
                                number={1}
                                title="Schedule a Demo"
                                description="Fill out the form to book your personalized demo"
                            />
                            <StepItem
                                number={2}
                                title="Explore Features"
                                description="See how Fitbinary can address your specific needs"
                            />
                            <StepItem
                                number={3}
                                title="Get Started"
                                description="Launch with our team's full support"
                                isLast={true}
                            />
                        </div>
                    </div>

                    {/* Right side - Demo Form */}
                    <div>
                        <div className="bg-gray-800 rounded-2xl border border-gray-700 p-8">
                            {!submitted ? (
                                <>
                                    <h3 className="text-2xl font-bold text-white mb-8">Request Your Demo</h3>
                                    <div className="space-y-6">
                                        {/* Full Name */}
                                        <div>
                                            <label className={labelClass}>
                                                <User size={16} className="inline mr-2" />
                                                Full Name *
                                            </label>
                                            <MemoizedInput
                                                register={register}
                                                name="fullName"
                                                placeholder="John Doe"
                                                className={inputClass}
                                            />
                                            <ErrorMessage error={errors.fullName} />
                                        </div>

                                        {/* Email */}
                                        <div>
                                            <label className={labelClass}>
                                                <Mail size={16} className="inline mr-2" />
                                                Email Address *
                                            </label>
                                            <MemoizedInput
                                                register={register}
                                                name="email"
                                                type="email"
                                                placeholder="john@example.com"
                                                className={inputClass}
                                            />
                                            <ErrorMessage error={errors.email} />
                                        </div>

                                        {/* Phone */}
                                        <div>
                                            <label className={labelClass}>
                                                <Phone size={16} className="inline mr-2" />
                                                Phone Number *
                                            </label>
                                            <MemoizedInput
                                                register={register}
                                                name="phone"
                                                type="tel"
                                                placeholder="+1 (555) 123-4567"
                                                className={inputClass}
                                            />
                                            <ErrorMessage error={errors.phone} />
                                        </div>

                                        {/* Gym Name */}
                                        <div>
                                            <label className={labelClass}>
                                                <Building size={16} className="inline mr-2" />
                                                Gym / Business Name
                                            </label>
                                            <MemoizedInput
                                                register={register}
                                                name="gymName"
                                                placeholder="Fitness Center Pro"
                                                className={inputClass}
                                            />
                                            <ErrorMessage error={errors.gymName} />
                                        </div>

                                        {/* Location */}
                                        <div>
                                            <label className={labelClass}>
                                                <MapPin size={16} className="inline mr-2" />
                                                Location
                                            </label>
                                            <MemoizedInput
                                                register={register}
                                                name="location"
                                                placeholder="City, State/Country"
                                                className={inputClass}
                                            />
                                        </div>

                                        {/* Message */}
                                        <div>
                                            <label className={labelClass}>
                                                <MessageCircle size={16} className="inline mr-2" />
                                                Message
                                            </label>
                                            <MemoizedInput
                                                register={register}
                                                name="message"
                                                type="textarea"
                                                rows={4}
                                                placeholder="Tell us about your specific needs or requirements..."
                                                className={`${inputClass} resize-none`}
                                            />
                                            <ErrorMessage error={errors.message} />
                                        </div>

                                        {/* Source */}
                                        <div>
                                            <label className={labelClass}>
                                                How did you hear about us?
                                            </label>
                                            <MemoizedSelect
                                                register={register}
                                                name="source"
                                                className={inputClass}
                                            >
                                                <option value="" className="bg-gray-800">Select an option</option>
                                                <option value="google" className="bg-gray-800">Google Search</option>
                                                <option value="social_media" className="bg-gray-800">Social Media</option>
                                                <option value="referral" className="bg-gray-800">Referral</option>
                                                <option value="advertisement" className="bg-gray-800">Advertisement</option>
                                                <option value="other" className="bg-gray-800">Other</option>
                                            </MemoizedSelect>
                                        </div>

                                        <button
                                            onClick={handleSubmit(onSubmit)}
                                            disabled={isSubmitting}
                                            className="w-full bg-blue-600 text-white py-4 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-blue-700"
                                        >
                                            {isSubmitting ? (
                                                <>
                                                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                                    Submitting...
                                                </>
                                            ) : (
                                                <>
                                                    Schedule Demo
                                                    <ArrowRight size={18} />
                                                </>
                                            )}
                                        </button>
                                    </div>

                                    <p className="text-xs text-gray-400 mt-6 text-center">
                                        By submitting this form, you agree to our Privacy Policy and Terms of Service.
                                    </p>
                                </>
                            ) : (
                                <div className="text-center py-8">
                                    <div className="w-16 h-16 bg-green-900/20 border border-green-800 rounded-full flex items-center justify-center mx-auto mb-6">
                                        <Check size={24} className="text-green-400" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-3">Thank You!</h3>
                                    <p className="text-gray-300 mb-6">
                                        We've received your demo request and will contact you shortly at{' '}
                                        <span className="text-blue-400">{getValues('email')}</span>.
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DemoSection;