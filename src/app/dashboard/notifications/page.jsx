'use client';

import Loader from "@/components/Loader/Loader";
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
    ChevronDown,
    Check,
    X,
    MoreHorizontal,
    Dot
} from 'lucide-react';
import { formatDistanceToNow } from 'date-fns';
import { useState } from 'react';

export default function AllUserNotifications() {
    const BASE_API_URL = process.env.NEXT_PUBLIC_API_URL;
    const [selectedNotifications, setSelectedNotifications] = useState(new Set());

    const getAllNotifications = async () => {
        try {
            const response = await fetch(`${BASE_API_URL}/user-notification/get`);
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

    const toggleNotificationSelection = (id) => {
        const newSelected = new Set(selectedNotifications);
        if (newSelected.has(id)) {
            newSelected.delete(id);
        } else {
            newSelected.add(id);
        }
        setSelectedNotifications(newSelected);
    };

    const markAsRead = (id) => {
        // Implement mark as read functionality
        console.log('Mark as read:', id);
    };

    const deleteNotification = (id) => {
        // Implement delete functionality
        console.log('Delete notification:', id);
    };

    if (isLoading) {
        return (
            <Loader />
        );
    }

    if (!notifications || notifications.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center h-64 text-gray-500 dark:text-gray-400">
                <div className="p-4 rounded-full bg-gray-100 dark:bg-gray-800 mb-4">
                    <BellIcon className="w-8 h-8" />
                </div>
                <p className="text-lg font-medium">No notifications</p>
                <p className="text-sm">You're all caught up!</p>
            </div>
        );
    }

    const getPriorityColor = (priority) => {
        switch (priority) {
            case 'High':
                return 'bg-red-500';
            case 'Medium':
                return 'bg-yellow-500';
            default:
                return 'bg-green-500';
        }
    };

    const getPriorityIcon = (priority) => {
        switch (priority) {
            case 'High':
                return <AlertTriangle className="w-4 h-4 text-red-500" />;
            case 'Medium':
                return <AlertCircle className="w-4 h-4 text-yellow-500" />;
            default:
                return <CheckCircle2 className="w-4 h-4 text-green-500" />;
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

    const unreadCount = notifications.filter(n => n.status !== 'Read').length;

    return (
        <div className="w-full mx-auto md:pt-6">
            {/* Header with notification badge */}
            <div className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 px-6 py-5">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="flex items-center gap-3">
                        <div className="relative">
                            <BellIcon className="w-7 h-7 text-gray-700 dark:text-gray-300" />
                            {unreadCount > 0 && (
                                <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-medium">
                                    {unreadCount > 99 ? '99+' : unreadCount}
                                </div>
                            )}
                        </div>
                        <div>
                            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Notifications</h1>
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                                {unreadCount > 0 ? `${unreadCount} unread notifications` : 'All caught up!'}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Quick Actions */}
            {selectedNotifications.size > 0 && (
                <div className="bg-blue-900 border-b border-blue-200 dark:border-blue-800 px-6 py-3">
                    <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-white">
                            {selectedNotifications.size} notification{selectedNotifications.size > 1 ? 's' : ''} selected
                        </span>
                        <div className="flex items-center gap-2">
                            <button className="text-sm text-white hover:text-blue-800 dark:hover:text-blue-200 font-medium">
                                Mark as read
                            </button>
                            <button className="text-sm text-red-500 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300 font-medium">
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Notifications List */}
            <div className="bg-gray-50 dark:bg-gray-950 min-h-screen">
                <div className="divide-y divide-gray-200 dark:divide-gray-800">
                    {notifications?.map((notification) => (
                        <div
                            key={notification._id}
                            className={`relative group transition-all duration-150 hover:bg-white dark:hover:bg-gray-900
                                ${notification.status === 'Read'
                                    ? 'bg-gray-50 dark:bg-gray-900/50'
                                    : 'bg-white dark:bg-gray-900'
                                }
                                ${selectedNotifications.has(notification._id)
                                    ? 'bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500'
                                    : ''
                                }`}
                        >
                            <div className="flex items-start gap-4 p-4 md:p-6">
                                {/* Selection checkbox */}
                                <button
                                    onClick={() => toggleNotificationSelection(notification._id)}
                                    className={`mt-1 w-4 h-4 rounded border-2 flex items-center justify-center transition-colors
                                        ${selectedNotifications.has(notification._id)
                                            ? 'bg-blue-500 border-blue-500'
                                            : 'border-gray-300 dark:border-gray-600 hover:border-blue-400'
                                        }`}
                                >
                                    {selectedNotifications.has(notification._id) && (
                                        <Check className="w-3 h-3 text-white" />
                                    )}
                                </button>

                                {/* Notification indicator dot */}
                                {notification.status !== 'Read' && (
                                    <div className={`w-2 h-2 rounded-full mt-2 ${getPriorityColor(notification.priority)}`} />
                                )}

                                {/* Icon */}
                                <div className="mt-0.5 p-2 rounded-lg bg-gray-100 dark:bg-gray-800">
                                    {getTypeIcon(notification.type)}
                                </div>

                                {/* Content */}
                                <div className="flex-1 min-w-0">
                                    <div className="flex items-start justify-between gap-4">
                                        <div className="flex-1">
                                            <h3 className={`font-medium text-sm leading-5 ${notification.status === 'Read'
                                                ? 'text-gray-600 dark:text-gray-400'
                                                : 'text-gray-900 dark:text-gray-100'
                                                }`}>
                                                {notification.message}
                                            </h3>

                                            <div className="flex items-center gap-3 mt-1">
                                                <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">
                                                    {notification.type}
                                                </span>
                                                <Dot className="w-3 h-3 text-gray-400" />
                                                <span className="text-xs text-gray-500 dark:text-gray-400">
                                                    {formatDistanceToNow(new Date(notification.createdAt), { addSuffix: true })}
                                                </span>
                                                <div className="flex items-center gap-1">
                                                    {getPriorityIcon(notification.priority)}
                                                </div>
                                            </div>

                                            {/* Additional data */}
                                            {notification.data && (
                                                <div className="mt-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                                                    <div className="flex flex-wrap gap-4 text-xs">
                                                        {notification.data.email && (
                                                            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                                                                <Mail className="w-3 h-3" />
                                                                <span>{notification.data.email}</span>
                                                            </div>
                                                        )}
                                                        {notification.data.phone && (
                                                            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                                                                <Phone className="w-3 h-3" />
                                                                <span>{notification.data.phone}</span>
                                                            </div>
                                                        )}
                                                        {notification.data.time && (
                                                            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                                                                <Clock className="w-3 h-3" />
                                                                <span>{new Date(notification.data.time).toLocaleString()}</span>
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>
                                            )}
                                        </div>

                                        {/* Action buttons */}
                                        <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                            {notification.status !== 'Read' && (
                                                <button
                                                    onClick={() => markAsRead(notification._id)}
                                                    className="p-1.5 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                                                    title="Mark as read"
                                                >
                                                    <Check className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                                                </button>
                                            )}
                                            <button
                                                onClick={() => deleteNotification(notification._id)}
                                                className="p-1.5 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                                                title="Delete"
                                            >
                                                <X className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                                            </button>
                                            <button className="p-1.5 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                                                <MoreHorizontal className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
