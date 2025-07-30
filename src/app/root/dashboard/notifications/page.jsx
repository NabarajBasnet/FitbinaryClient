'use client';

import { useQuery } from "@tanstack/react-query";
import { toast } from "sonner";
import {
    BellIcon,
    CheckCircle2,
    AlertCircle,
    AlertTriangle,
    LogIn,
    Mail,
    Phone,
    Clock,
    Search,
    Filter,
    ChevronDown
} from 'lucide-react';
import { formatDistanceToNow } from 'date-fns';

export default function AllRootNotifications() {
    const BASE_API_URL = process.env.NEXT_PUBLIC_API_URL;

    const getAllNotifications = async () => {
        try {
            const response = await fetch(`${BASE_API_URL}/root-notification/get`);
            const resBody = await response.json();
            return resBody;
        } catch (error) {
            console.log('Error: ', error);
            toast.error(error.message);
            throw error;
        }
    }

    const { data, isLoading } = useQuery({
        queryKey: ['rootnotifications'],
        queryFn: getAllNotifications
    });

    const { notifications } = data || {};

    if (isLoading) {
        return (
            <div className="flex justify-center items-center h-64">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900 dark:border-gray-100"></div>
            </div>
        );
    }

    if (!notifications || notifications.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center h-64 text-gray-500 dark:text-gray-400">
                <BellIcon className="w-12 h-12 mb-4" />
                <p className="text-lg">No notifications available</p>
            </div>
        );
    }

    const getPriorityIcon = (priority) => {
        switch (priority) {
            case 'High':
                return <AlertTriangle className="w-5 h-5 text-red-500" />;
            case 'Medium':
                return <AlertCircle className="w-5 h-5 text-yellow-500" />;
            default:
                return <CheckCircle2 className="w-5 h-5 text-green-500" />;
        }
    };

    const getTypeIcon = (type) => {
        switch (type) {
            case 'Tenant Login':
                return <LogIn className="w-5 h-5 text-blue-500" />;
            default:
                return <BellIcon className="w-5 h-5 text-gray-500" />;
        }
    };

    return (
        <div className="w-full">
            {/* Modern Header */}
            <div className="w-full bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 px-6 py-4">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                        <h1 className="text-2xl font-bold text-gray-800 dark:text-white">Notifications</h1>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                            Manage and view all system notifications
                        </p>
                    </div>

                    <div className="flex items-center gap-3">
                        <div className="relative flex-1 max-w-md">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Search notifications..."
                                className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                        </div>

                        <button className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-700 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                            <Filter className="h-4 w-4" />
                            <span>Filter</span>
                            <ChevronDown className="h-4 w-4" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Notifications List */}
            <div className="w-full p-4 dark:bg-gray-950">
                <div className="space-y-4">
                    {notifications.map((notification) => (
                        <div
                            key={notification._id}
                            className={`p-4 rounded-lg shadow-sm border transition-all duration-200 w-full
                                ${notification.status === 'Read'
                                    ? 'bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700'
                                    : 'bg-white dark:bg-gray-900 border-gray-300 dark:border-gray-600'}`}
                        >
                            <div className="flex items-start gap-3">
                                <div className="mt-1">
                                    {getTypeIcon(notification.type)}
                                </div>

                                <div className="flex-1">
                                    <div className="flex items-center justify-between">
                                        <h3 className={`font-medium ${notification.status === 'Read' ? 'text-gray-600 dark:text-gray-300' : 'text-gray-900 dark:text-gray-100'}`}>
                                            {notification.message}
                                        </h3>
                                        <div className="flex items-center gap-2">
                                            {getPriorityIcon(notification.priority)}
                                            <span className="text-xs text-gray-500 dark:text-gray-400">
                                                {formatDistanceToNow(new Date(notification.createdAt), { addSuffix: true })}
                                            </span>
                                        </div>
                                    </div>

                                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                                        {notification.type} • {notification.status}
                                    </p>

                                    {notification.data && (
                                        <div className="mt-3 pt-3 border-t border-gray-200 dark:border-gray-700">
                                            <div className="flex flex-wrap gap-4 text-sm">
                                                {notification.data.email && (
                                                    <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                                                        <Mail className="w-4 h-4" />
                                                        <span>{notification.data.email}</span>
                                                    </div>
                                                )}
                                                {notification.data.phone && (
                                                    <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                                                        <Phone className="w-4 h-4" />
                                                        <span>{notification.data.phone}</span>
                                                    </div>
                                                )}
                                                {notification.data.time && (
                                                    <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                                                        <Clock className="w-4 h-4" />
                                                        <span>{new Date(notification.data.time).toLocaleString()}</span>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}