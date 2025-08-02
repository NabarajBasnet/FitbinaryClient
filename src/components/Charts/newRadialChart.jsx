"use client";

import { useQuery } from "@tanstack/react-query";
import { MdContentCopy } from "react-icons/md";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import { toast as notify } from 'react-hot-toast';
import React from 'react';
import Pagination from "../ui/CustomPagination";
import {
    Table,
    TableBody,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { useState } from "react";

export function NewRadialChart({ startDate, endDate }) {
    const [currentPage, setCurrentPage] = useState(1);
    const limit = 10;

    // Get New Members
    const getNewMembers = async ({ queryKey }) => {
        const [, startDate, endDate, page, limit] = queryKey;
        try {
            const response = await fetch(`https://fitbinary.com/api/memberanalytics/newmembers?startDate=${startDate}&endDate=${endDate}&page=${page}&limit=${limit}`);
            const responseBody = await response.json();
            return responseBody;
        } catch (error) {
            console.log("Error: ", error);
        }
    }

    const { data: newMembers, isLoading: isNewMemberLoading } = useQuery({
        queryKey: ['newmembers', startDate, endDate, currentPage, limit],
        queryFn: getNewMembers,
    });

    const { totalPages } = newMembers || {};

    const copyToClipboard = (_id) => {
        if (navigator.clipboard && typeof navigator.clipboard.writeText === 'function') {
            navigator.clipboard.writeText(_id)
                .then(() => notify.success(`Member ID ${_id} copied to clipboard`))
                .catch(() => notify.error("Failed to copy ID"));
        } else {
            const textArea = document.createElement("textarea");
            textArea.value = _id;
            textArea.style.position = "fixed";
            document.body.appendChild(textArea);
            textArea.focus();
            textArea.select();
            try {
                const successful = document.execCommand('copy');
                if (successful) {
                    notify.success(`Member ID ${_id} copied to clipboard`);
                } else {
                    throw new Error();
                };
            } catch (err) {
                notify.error("Failed to copy ID");
            };
            document.body.removeChild(textArea);
        };
    };

    return (
        <div className="w-full border-none dark:border-none dark:bg-gray-800 rounded-2xl">

            <div className="bg-white flex flex-col justify-between dark:bg-gray-800 rounded-2xl mt-6 min-h-[250px]">
                <div className="overflow-x-auto">
                    <Table className='min-w-full dark:border-gray-600 dark:bg-gray-800'>
                        <TableHeader className="dark:bg-gray-800">
                            <TableRow>
                                <TableHead className='text-pink-600 text-xs font-medium'>Member ID</TableHead>
                                <TableHead className='text-pink-600 text-xs font-medium'>Full Name</TableHead>
                                <TableHead className='text-pink-600 text-xs font-medium'>Duration</TableHead>
                                <TableHead className='text-pink-600 text-xs font-medium'>Renew</TableHead>
                                <TableHead className='text-pink-600 text-xs font-medium'>Expire</TableHead>
                                <TableHead className='text-pink-600 text-xs font-medium'>Contact No</TableHead>
                                <TableHead className='text-pink-600 text-xs font-medium'>Status</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {isNewMemberLoading ? (
                                <TableRow>
                                    <TableCell colSpan={6} className="text-center py-4">
                                        Loading...
                                    </TableCell>
                                </TableRow>
                            ) : newMembers?.members?.length > 0 ? (
                                newMembers.members.map(({ member }) => {
                                    const textColor =
                                        member?.status === 'Active' ? 'text-black dark:text-white' :
                                            member?.status === 'OnHold' ? 'text-yellow-600 dark:text-yellow-500' :
                                                'text-red-500 dark:text-red-500';
                                    return (
                                        <TableRow key={member?._id} className={`${textColor} hover:bg-pink-50 dark:hover:bg-gray-800`}>
                                            <TableCell>
                                                <div className="flex items-center justify-end text-center space-x-1 max-w-[100px]">
                                                    <span className="truncate text-center text-xs font-medium">{member?._id || 'N/A'}</span>
                                                    <TooltipProvider>
                                                        <Tooltip>
                                                            <TooltipTrigger asChild>
                                                                <button
                                                                    onClick={() => copyToClipboard(member?._id || 'N/A')}
                                                                    className="text-gray-400 hover:text-blue-600 transition-colors p-1"
                                                                >
                                                                    <MdContentCopy size={14} />
                                                                </button>
                                                            </TooltipTrigger>
                                                            <TooltipContent>
                                                                <p>Copy ID</p>
                                                            </TooltipContent>
                                                        </Tooltip>
                                                    </TooltipProvider>
                                                </div>
                                            </TableCell>
                                            <TableCell className='text-xs font-medium'>{member?.fullName || 'N/A'}</TableCell>
                                            <TableCell className='text-xs font-medium'>{member?.membership.duration / 30 || 'N/A'} Months</TableCell>
                                            <TableCell className='text-xs font-medium'>
                                                {new Date(member?.membershipRenewDate).toLocaleDateString()}
                                            </TableCell>
                                            <TableCell className='text-xs font-medium'>
                                                {new Date(member?.membershipExpireDate).toLocaleDateString()}
                                            </TableCell>
                                            <TableCell className='text-xs font-medium'>{member?.contactNo}</TableCell>
                                            <TableCell className='text-xs font-medium'>
                                                {member?.status?.charAt(0).toUpperCase() + member?.status.slice(1)}
                                            </TableCell>
                                        </TableRow>
                                    );
                                })
                            ) : (
                                <TableRow className='hover:bg-pink-50 dark:hover:bg-pink-50'>
                                    <TableCell colSpan={6} className="text-center py-4">
                                        No new members found.
                                    </TableCell>
                                </TableRow>
                            )}
                        </TableBody>
                        <TableFooter className="bg-pink-50 dark:bg-gray-800">
                            <TableRow>
                                <TableCell colSpan={5} className="text-left text-xs font-medium">Total New Members</TableCell>
                                <TableCell className="text-right text-xs font-medium">
                                    {newMembers?.total || 0}
                                </TableCell>
                            </TableRow>
                        </TableFooter>
                    </Table>
                </div>

                <div className="py-3 px-4 border-t dark:border-gray-600 rounded-b-2xl dark:bg-gray-800">
                    <Pagination
                        total={totalPages || 0}
                        page={currentPage || 1}
                        onChange={setCurrentPage}
                    />
                </div>
            </div>
        </div>
    );
}
