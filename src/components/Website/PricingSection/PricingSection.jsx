"use client";

import { AlertTriangle } from "lucide-react";
import { useRouter } from "next/navigation";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { toast as sonnertoast } from "sonner";
import { useQuery } from "@tanstack/react-query";
import Loader from "@/components/Loader/Loader";
import React, { useState, useMemo } from "react";
import {
    Check,
    Zap,
    Crown,
    Sparkles,
    ArrowRight,
    Loader2,
    Star,
    CheckCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const PricingSection = () => {
    const [loadingButtons, setLoadingButtons] = useState({});
    const router = useRouter();
    const [orgSetupDialog, setOrgSetupDialog] = useState(false);
    const [resBody, setResBody] = useState();

    // Memoized fetch function to prevent unnecessary recreations
    const fetchPlans = useMemo(() => async () => {
        try {
            const response = await fetch(`/api/subscription/getall`);
            return await response.json();
        } catch (error) {
            sonnertoast.error("Error fetching plans");
            console.error("Error fetching plans:", error);
            return { subscriptions: [] };
        }
    }, []);

    const { data, isLoading } = useQuery({
        queryKey: ["plans"],
        queryFn: fetchPlans,
    });

    const subscriptions = data?.subscriptions || [];

    // Memoized plan data to prevent unnecessary recalculations
    const planData = useMemo(() => [
        { icon: Zap, accent: "blue" },
        { icon: Crown, accent: "purple" },
        { icon: Sparkles, accent: "red" }
    ], []);

    const faqs = useMemo(() => [
        {
            question: "Can I change my plan later?",
            answer: "Yes, you can upgrade or downgrade your plan at any time. Changes will be prorated automatically."
        },
        {
            question: "Is there a free trial?",
            answer: "All plans come with a 3 weeks free trial. No credit card required to start exploring."
        },
        {
            question: "What payment methods do you accept?",
            answer: "We accept all major credit cards, PayPal, and bank transfers for annual plans."
        },
        {
            question: "Do you offer refunds?",
            answer: "Yes, we offer a 30-day money-back guarantee on all plans."
        }
    ], []);

    if (isLoading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <Loader />
            </div>
        );
    }

    return (
        <section id="pricing" className="w-full min-h-screen bg-gray-950 relative overflow-hidden">
            <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 py-20">
                {/* Hero Section - Optimized with less markup */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 bg-gray-900 border border-gray-800 rounded-full px-4 py-2 mb-6">
                        <Sparkles className="w-4 h-4 text-blue-400" />
                        <span className="text-sm font-medium text-gray-300">
                            Choose the perfect plan for your fitness center
                        </span>
                    </div>

                    <h1 className="text-7xl font-bold text-white mb-4">
                        Unlock Your Gym's <br />
                        <span className="bg-gradient-to-r from-blue-400 via-sky-200 to-white bg-clip-text text-transparent">
                            Full Potential
                        </span>
                    </h1>

                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Transform your fitness business with our comprehensive management platform.
                    </p>
                </div>

                {/* Plans Grid - Simplified with consistent heights */}
                {subscriptions.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
                        {subscriptions.map((plan, index) => {
                            const { icon: Icon, accent } = planData[index] || { icon: Star, accent: "gray" };
                            const isPopular = index === 1;

                            return (
                                <div
                                    key={plan._id}
                                    className={`relative flex flex-col h-full ${isPopular ? "md:-mt-2" : ""}`}
                                >
                                    {isPopular && (
                                        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                                            <div className="bg-blue-600 text-white px-4 py-1 rounded-full text-xs font-semibold">
                                                Most Popular
                                            </div>
                                        </div>
                                    )}

                                    <div className={`flex-1 bg-gray-900 rounded-xl border ${isPopular ? "border-blue-500" : "border-gray-800"} p-6 flex flex-col transition-all hover:border-gray-600`}>
                                        <div className="mb-6 flex items-center gap-3">
                                            <div className={`p-3 rounded-lg bg-${accent}-500/10`}>
                                                <Icon className={`w-5 h-5 text-${accent}-400`} />
                                            </div>
                                            <h3 className="text-xl font-bold text-white">
                                                {plan.subscriptionName}
                                            </h3>
                                        </div>

                                        <p className="text-gray-400 text-sm mb-6">{plan.subscriptionDescription}</p>

                                        <div className="mb-6">
                                            <div className="flex items-baseline gap-2">
                                                <span className="text-4xl font-bold text-white">
                                                    {plan.currency}{plan.subscriptionPrice}
                                                </span>
                                                <span className="text-gray-400">/month</span>
                                            </div>
                                        </div>

                                        <ul className="space-y-3 mb-8">
                                            {plan.subscriptionFeatures.map((feature, i) => (
                                                <li key={i} className="flex items-start gap-3">
                                                    <CheckCircle className={`flex-shrink-0 w-4 h-4 mt-1 text-${accent}-400`} />
                                                    <span className="text-gray-300 text-sm">{feature}</span>
                                                </li>
                                            ))}
                                        </ul>

                                        <div className="mt-auto pt-6 border-t border-gray-800">
                                            <button
                                                onClick={() => window.location.href = '/login'}
                                                disabled={loadingButtons[plan._id]}
                                                className={`w-full py-3 px-4 rounded-lg font-medium text-sm transition-all flex items-center justify-center gap-2 
                                                    ${isPopular ? `bg-${'sky'}-500 text-white hover:bg-${accent}-600` : "bg-gray-800 hover:bg-gray-700 text-white"}
                                                    ${loadingButtons[plan._id] ? "opacity-75 cursor-not-allowed" : ""}`}
                                            >
                                                {loadingButtons[plan._id] ? (
                                                    <Loader2 className="w-4 h-4 animate-spin" />
                                                ) : (
                                                    <>
                                                        Get Started
                                                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                                    </>
                                                )}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                ) : (
                    <div className="flex items-center justify-center p-8">
                        <div className="max-w-md w-full bg-gray-900 rounded-xl p-8 border border-gray-800 text-center">
                            <div className="w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center mx-auto mb-4">
                                <Star className="w-5 h-5 text-white" />
                            </div>
                            <h1 className="text-2xl font-bold text-white mb-3">
                                No Plans Available
                            </h1>
                            <p className="text-gray-400 text-sm mb-6">
                                Subscription plans haven't been configured yet.
                            </p>
                            <Button
                                className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                                onClick={() => router.push("/clientarea/dashboard")}
                            >
                                Back to Dashboard
                            </Button>
                        </div>
                    </div>
                )}

                {/* FAQ Section - More compact and organized */}
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-white mb-3">
                            <span className="bg-gradient-to-r from-blue-600 via-sky-300 to-white bg-clip-text text-transparent">
                                Frequently Asked Questions
                            </span>
                        </h2>
                        <p className="text-gray-400 text-sm">
                            Everything you need to know about our pricing and plans
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {faqs.map((faq, i) => (
                            <div key={i} className="bg-gray-900 rounded-lg p-5 border border-gray-800">
                                <h3 className="text-sm font-semibold text-white mb-2">{faq.question}</h3>
                                <p className="text-gray-400 text-sm">{faq.answer}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Alert Dialog - Optimized */}
            <AlertDialog open={orgSetupDialog} onOpenChange={setOrgSetupDialog}>
                <AlertDialogContent className="bg-gray-900 border border-gray-800 rounded-xl max-w-md">
                    <AlertDialogHeader className="flex items-start gap-3 p-5">
                        <div className="flex-shrink-0 w-10 h-10 bg-amber-900/20 rounded-lg flex items-center justify-center">
                            <AlertTriangle className="text-amber-400 w-5 h-5" />
                        </div>
                        <div>
                            <AlertDialogTitle className="text-lg font-semibold text-white">
                                Complete Your Organization Setup
                            </AlertDialogTitle>
                            <AlertDialogDescription className="text-gray-400 text-sm mt-1">
                                {resBody?.message || "Please complete the remaining onboarding steps."}
                            </AlertDialogDescription>
                        </div>
                    </AlertDialogHeader>

                    <AlertDialogFooter className="flex gap-2 p-5 pt-0">
                        <AlertDialogCancel className="bg-gray-800 text-gray-300 border-gray-700 hover:bg-gray-700 rounded-lg">
                            Not Now
                        </AlertDialogCancel>
                        <AlertDialogAction
                            onClick={() => router.push(resBody?.redirect)}
                            className="bg-blue-600 text-white hover:bg-blue-700 rounded-lg"
                        >
                            Complete Setup
                        </AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </section>
    );
};

export default PricingSection;