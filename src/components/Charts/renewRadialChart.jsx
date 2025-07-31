"use client";

import { useQuery } from "@tanstack/react-query";
import { MdContentCopy } from "react-icons/md";
import { toast as notify } from 'react-hot-toast';
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import { useState } from "react";
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

export function RenewRadialChart({ startDate, endDate }) {
    const [currentPage, setCurrentPage] = useState(1);
    const limit = 10;

    const getRenewedMembers = async ({ queryKey }) => {
        const [, startDate, endDate, page, limit] = queryKey;
        try {
            const response = await fetch(
                `http://localhost:3000/api/memberanalytics/renewedmembers?startDate=${startDate}&endDate=${endDate}&page=${page}&limit=${limit}`
            );
            const responseBody = await response.json();
            return responseBody;
        } catch (error) {
            console.error("Error fetching renewed members:", error);
            return { members: [] };
        }
    };

    const { data: renewedMembers = { members: [] }, isLoading: isRenewedMembersLoading } = useQuery({
        queryKey: ['renewedMembers', startDate, endDate, currentPage, limit],
        queryFn: getRenewedMembers
    });

    const { totalPages, members } = renewedMembers || {}

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
                }
            } catch (err) {
                notify.error("Failed to copy ID");
            }
            document.body.removeChild(textArea);
        }
    };

    return (
        <div className="w-full border-none dark:border-none dark:bg-gray-800 rounded-2xl">

            <div className="bg-white flex flex-col justify-between dark:bg-gray-800 rounded-2xl mt-6 min-h-[250px]">
                <Table className='min-w-full dark:border-gray-600 dark:bg-gray-800 rounded-2xl'>
                    <TableHeader>
                        <TableRow>
                            <TableHead className='text-emerald-600 text-xs font-medium'>Member ID</TableHead>
                            <TableHead className='text-emerald-600 text-xs font-medium'>Full Name</TableHead>
                            <TableHead className='text-emerald-600 text-xs font-medium'>Duration</TableHead>
                            <TableHead className='text-emerald-600 text-xs font-medium'>Renew Date</TableHead>
                            <TableHead className='text-emerald-600 text-xs font-medium'>Contact No</TableHead>
                            <TableHead className='text-emerald-600 text-xs font-medium'>Status</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody className="rounded-2xl">
                        {isRenewedMembersLoading ? (
                            <TableRow>
                                <TableCell colSpan={6} className="text-center py-4">
                                    Loading members...
                                </TableCell>
                            </TableRow>
                        ) : members?.length > 0 ? (
                            members?.map(({ member }, index) => {
                                const textColor =
                                    member.status === 'Active' ? 'text-black dark:text-white' :
                                        member.status === 'OnHold' ? 'text-yellow-600 dark:text-yellow-500' :
                                            'text-red-500 dark:text-red-500';
                                return (
                                    <TableRow key={index} className={textColor}>
                                        <TableCell>
                                            <div className="flex items-center justify-end text-center space-x-1 max-w-[100px]">
                                                <span className="truncate text-center font-medium text-xs">{member._id}</span>
                                                <TooltipProvider>
                                                    <Tooltip>
                                                        <TooltipTrigger asChild>
                                                            <button
                                                                onClick={() => copyToClipboard(member._id)}
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
                                        <TableCell className='text-xs font-medium'>{member.fullName}</TableCell>
                                        <TableCell className='text-xs font-medium'>{member.membershipDuration}</TableCell>
                                        <TableCell className='text-xs font-medium'>
                                            {new Date(member.membershipRenewDate).toLocaleDateString()}
                                        </TableCell>
                                        <TableCell className='text-xs font-medium'>{member.contactNo}</TableCell>
                                        <TableCell className='text-xs font-medium'>
                                            {member.status.charAt(0).toUpperCase() + member.status.slice(1)}
                                        </TableCell>
                                    </TableRow>
                                );
                            })
                        ) : (
                            <TableRow>
                                <TableCell colSpan={6} className="text-center py-4">
                                    No renewed members found.
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                    <TableFooter className="rounded-2xl">
                        <TableRow>
                            <TableCell colSpan={5} className="text-left text-xs bg-gray-100 dark:bg-gray-800 font-medium">
                                Total Renewed Members
                            </TableCell>
                            <TableCell className="text-right text-xs font-medium">
                                {renewedMembers?.total || 0}
                            </TableCell>
                        </TableRow>
                    </TableFooter>
                </Table>
                <div className="py-3 border-t flex flex-col justify-end dark:border-gray-600 dark:bg-gray-800 rounded-b-2xl">
                    <Pagination
                        total={totalPages || 0}
                        page={currentPage}
                        onChange={setCurrentPage}
                    />
                </div>
            </div>
        </div>
    );
}