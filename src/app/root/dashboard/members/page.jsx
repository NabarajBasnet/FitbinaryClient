'use client';

import Pagination from "@/components/ui/CustomPagination";
import { MdContentCopy } from "react-icons/md";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import { ArrowUpDown } from "lucide-react";
import Loader from "@/components/Loader/Loader";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { useState } from 'react';
import { Label } from "@/components/ui/label";
import * as React from "react";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { useQuery } from "@tanstack/react-query";

const TenantMembers = () => {

    const api = process.env.NEXT_PUBLIC_API_URL;
    const [currentPage, setCurrentPage] = useState(1);
    const [limit, setLimit] = useState(25);
    const [sortBy, setSortBy] = useState()
    const [sortOrderDesc, setSortOrderDesc] = useState()

    // States
    const [selectedTenant, setSelectedTenant] = useState('');
    const [selectedOrganization, setSelectedOrganization] = useState('');
    const [selectedOrganizationBranch, setSelectedOrganizationBranch] = useState('');

    const getAllTenants = async () => {
        try {
            const response = await fetch(`${api}/tenant/all-tenants`);
            const resBody = await response.json();
            return resBody;
        } catch (error) {
            console.log("Error: ", error);
            toast.error(error.message);
        }
    }

    const { data, isLoading } = useQuery({
        queryKey: ['tenants'],
        queryFn: getAllTenants
    });

    const { tenants } = data || {};

    const getAllOrganization = async ({ queryKey }) => {
        const [, selectedTenant] = queryKey;
        try {
            const response = await fetch(`${api}/tenant/all-organizations?tenant=${selectedTenant}`);
            const resBody = await response.json();
            return resBody;
        } catch (error) {
            console.log("Error: ", error);
            toast.error(error.message);
        }
    }

    const { data: orgs, isLoading: isOrgLoading } = useQuery({
        queryKey: ['organizations', selectedTenant],
        queryFn: getAllOrganization,
        enabled: !!selectedTenant
    });

    const { organizations } = orgs || {};

    const getAllOrganizationBranches = async ({ queryKey }) => {
        const [, selectedOrganization] = queryKey
        try {
            const response = await fetch(`${api}/tenant/all-organization-branches?organization=${selectedOrganization}`);
            const resBody = await response.json();
            return resBody;
        } catch (error) {
            console.log("Error: ", error);
            toast.error(error.message);
        }
    };

    const { data: orgBranches, isLoading: isOrgBranchLoading } = useQuery({
        queryKey: ['organizationBranches', selectedOrganization],
        queryFn: getAllOrganizationBranches,
        enabled: !!selectedOrganization
    });

    const { organizationsBranches } = orgBranches || {};

    const getAllMembers = async ({ queryKey }) => {
        const [, selectedOrganizationBranch, page, limit] = queryKey
        try {
            const response = await fetch(`${api}/tenant/all-members?branch=${selectedOrganizationBranch}&page=${page}&limit=${limit}`);
            const resBody = await response.json();
            return resBody;
        } catch (error) {
            console.log("Error: ", error);
            toast.error(error.message);
        }
    }

    const { data: membersData, isLoading: isMembersLoading } = useQuery({
        queryKey: ['members', selectedOrganizationBranch, currentPage, limit],
        queryFn: getAllMembers,
        enabled: !!selectedOrganizationBranch
    });

    const { members, totalCount, totalPages } = membersData || {};

    return (
        <div className="bg-white p-4 dark:bg-gray-950 min-h-screen w-full">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                <div>
                    <Label className='text-primary'>Search</Label>
                    <Input
                        placeholder='Search organization and branch'
                        className='rounded-sm py-6 bg-blue-50 border border-blue-500 dark:bg-gray-800'
                    />
                </div>

                <div>
                    <Label className='text-primary'>Tenant</Label>
                    <Select onValueChange={(value) => setSelectedTenant(value)}>
                        <SelectTrigger className="w-full rounded-sm py-6 bg-blue-50 border border-blue-500 dark:bg-gray-800 text-primary">
                            <SelectValue placeholder="Tenants" />
                        </SelectTrigger>
                        <SelectContent className='dark:bg-gray-800 dark:border-none'>
                            <SelectGroup>
                                <SelectLabel className='text-primary'>Select</SelectLabel>
                                {tenants?.map((tenant) => (
                                    <SelectItem
                                        className='cursor-pointer hover:bg-blue-400 text-primary'
                                        value={tenant._id} key={tenant._id}>{tenant?.fullName}</SelectItem>
                                ))}
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>

                <div>
                    <Label className='text-primary'>Organization</Label>
                    <Select onValueChange={(value) => setSelectedOrganization(value)}>
                        <SelectTrigger className="w-full rounded-sm py-6 bg-blue-50 border border-blue-500 dark:bg-gray-800 text-primary">
                            <SelectValue placeholder="Select Organization" />
                        </SelectTrigger>
                        <SelectContent className='dark:bg-gray-800 dark:border-none'>
                            <SelectGroup>
                                <SelectLabel>Organization</SelectLabel>
                                {organizations?.map((organization) => (
                                    <SelectItem
                                        className='cursor-pointer hover:bg-blue-400 text-primary'
                                        value={organization._id} key={organization._id}>{organization.name}</SelectItem>
                                ))}
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>

                <div>
                    <Label className='text-primary'>Organization Branch</Label>
                    <Select onValueChange={(value) => setSelectedOrganizationBranch(value)}>
                        <SelectTrigger className="w-full rounded-sm py-6 bg-blue-50 border border-blue-500 dark:bg-gray-800 text-primary">
                            <SelectValue placeholder="Select Organization Branch" />
                        </SelectTrigger>
                        <SelectContent className='dark:bg-gray-800 dark:border-none'>
                            <SelectGroup>
                                <SelectLabel>Organization Branch</SelectLabel>
                                {organizationsBranches?.map((branch) => (
                                    <SelectItem
                                        className='cursor-pointer hover:bg-blue-400 text-primary'
                                        value={branch._id} key={branch._id}>{branch.orgBranchName}</SelectItem>
                                ))}
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>
            </div>

            <div>
                {isLoading ? (
                    <Loader />
                ) : (
                    <div className="w-full mb-4 bg-white dark:bg-gray-800 dark:text-white rounded-sm">
                        <div className="w-full flex justify-start">
                            <div className="w-full overflow-x-auto static">
                                <Table className="w-full overflow-x-auto relative dark:text-white">
                                    <TableHeader>
                                        <TableRow className="dark:bg-gray-700 dark:border-none">
                                            <TableHead className="dark:text-white">
                                                <div className="flex items-center">
                                                    Avatar
                                                    <ArrowUpDown
                                                        onClick={() => {
                                                            setSortBy("_id");
                                                            setSortOrderDesc(!sortOrderDesc);
                                                        }}
                                                        className="ml-2 h-4 w-4 cursor-pointer hover:text-gray-700 transition-color duration-500"
                                                    />
                                                </div>
                                            </TableHead>
                                            <TableHead className="dark:text-white">
                                                <div className="flex items-center">
                                                    Member Id
                                                    <ArrowUpDown
                                                        onClick={() => {
                                                            setSortBy("_id");
                                                            setSortOrderDesc(!sortOrderDesc);
                                                        }}
                                                        className="ml-2 h-4 w-4 cursor-pointer hover:text-gray-700 transition-color duration-500"
                                                    />
                                                </div>
                                            </TableHead>
                                            <TableHead className="dark:text-white">
                                                <div className="flex items-center">
                                                    Full Name
                                                    <ArrowUpDown
                                                        onClick={() => {
                                                            setSortBy("fullName");
                                                            setSortOrderDesc(!sortOrderDesc);
                                                        }}
                                                        className="ml-2 h-4 w-4 cursor-pointer hover:text-gray-700 transition-color duration-500"
                                                    />
                                                </div>
                                            </TableHead>
                                            <TableHead className="dark:text-white">
                                                <div className="flex items-center">
                                                    Duration
                                                    <ArrowUpDown
                                                        onClick={() => {
                                                            setSortBy("fullName");
                                                            setSortOrderDesc(!sortOrderDesc);
                                                        }}
                                                        className="ml-2 h-4 w-4 cursor-pointer hover:text-gray-700 transition-color duration-500"
                                                    />
                                                </div>
                                            </TableHead>
                                            <TableHead className="dark:text-white text-center">
                                                <div className="flex items-center">
                                                    Contact No
                                                    <ArrowUpDown
                                                        onClick={() => {
                                                            setSortBy("contactNo");
                                                            setSortOrderDesc(!sortOrderDesc);
                                                        }}
                                                        className="ml-2 h-4 w-4 cursor-pointer hover:text-gray-700 transition-color duration-500"
                                                    />
                                                </div>
                                            </TableHead>
                                            <TableHead className="dark:text-white text-center">
                                                <div className="flex items-center">
                                                    Status
                                                    <ArrowUpDown
                                                        onClick={() => {
                                                            setSortBy("status");
                                                            setSortOrderDesc(!sortOrderDesc);
                                                        }}
                                                        className="ml-2 h-4 w-4 cursor-pointer hover:text-gray-700 transition-color duration-500"
                                                    />
                                                </div>
                                            </TableHead>
                                            <TableHead className="dark:text-white text-center">
                                                <div className="flex items-center">
                                                    Fee
                                                    <ArrowUpDown
                                                        onClick={() => {
                                                            setSortBy("paidAmmount");
                                                            setSortOrderDesc(!sortOrderDesc);
                                                        }}
                                                        className="ml-2 h-4 w-4 cursor-pointer hover:text-gray-700 transition-color duration-500"
                                                    />
                                                </div>
                                            </TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        {Array.isArray(members) && members?.length > 0 ? (
                                            members?.map((member) => {
                                                const textColor =
                                                    member.status === "Active"
                                                        ? "text-black dark:text-white"
                                                        : member.status === "OnHold"
                                                            ? "text-yellow-500"
                                                            : "text-red-500";
                                                return (
                                                    <TableRow
                                                        key={member._id}
                                                        className={textColor}
                                                        sx={{
                                                            "&:hover": { backgroundColor: "#f9fafb" },
                                                            "& td": {
                                                                padding: "0.75rem 1rem",
                                                                fontSize: "0.875rem",
                                                                color: "#4b5563",
                                                                borderBottom: "1px solid #e5e7eb",
                                                            },
                                                        }}
                                                    >
                                                        <TableCell>
                                                            {member?.fullName ? (
                                                                <div className="flex items-center justify-center h-9 w-9 rounded-full bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-300 font-medium group-hover:bg-blue-200 dark:group-hover:bg-blue-800 transition-colors">
                                                                    {member.fullName
                                                                        .split(' ')
                                                                        .map((word) => word.charAt(0))
                                                                        .slice(0, 2)
                                                                        .join('')
                                                                        .toUpperCase()}
                                                                </div>
                                                            ) : (
                                                                <div className="bg-transparent p-1 md:p-2 rounded-full transition-colors group-hover:bg-gray-100 dark:group-hover:bg-gray-700">
                                                                    <FaUserCircle className="text-2xl text-blue-600 dark:text-blue-400 transition-colors group-hover:text-blue-700 dark:group-hover:text-blue-300" />
                                                                </div>
                                                            )}
                                                        </TableCell>
                                                        <TableCell
                                                            className="text-center flex justify-start items-center"
                                                            component="th"
                                                            scope="row"
                                                            sx={{ width: "120px", maxWidth: "120px" }}
                                                        >
                                                            <div className="flex items-center justify-end text-center space-x-1 max-w-[100px]">
                                                                <span className="truncate text-center font-mono text-sm">
                                                                    {member._id}
                                                                </span>
                                                                <TooltipProvider>
                                                                    <Tooltip>
                                                                        <TooltipTrigger asChild>
                                                                            <button className="text-gray-400 hover:text-blue-600 transition-colors p-1">
                                                                                <MdContentCopy
                                                                                    onClick={() =>
                                                                                        copyToClipboard(member._id)
                                                                                    }
                                                                                    size={14}
                                                                                />
                                                                            </button>
                                                                        </TooltipTrigger>
                                                                        <TooltipContent>
                                                                            <p>Copy ID</p>
                                                                        </TooltipContent>
                                                                    </Tooltip>
                                                                </TooltipProvider>
                                                            </div>
                                                        </TableCell>
                                                        <TableCell>{member?.fullName}</TableCell>
                                                        <TableCell>{member?.membership.duration / 30} Months</TableCell>
                                                        <TableCell className="text-start">
                                                            {member?.contactNo}
                                                        </TableCell>
                                                        <TableCell className="text-start">
                                                            {member.status.charAt(0).toUpperCase() +
                                                                member.status.slice(1)}
                                                        </TableCell>
                                                        <TableCell className="text-start">
                                                            {member.paidAmmount}
                                                        </TableCell>
                                                    </TableRow>
                                                );
                                            })
                                        ) : (
                                            <TableRow>
                                                <TableCell colSpan={13} className="text-center">
                                                    No memberships found.
                                                </TableCell>
                                            </TableRow>
                                        )}
                                    </TableBody>
                                    <TableFooter className="text-center text-black dark:border-none dark:text-white p-4 dark:bg-gray-700">
                                        <TableRow className="p-4">
                                            <TableCell className="text-left p-4" colSpan={3}>
                                                Total Memberships
                                            </TableCell>
                                            <TableCell className="text-right p-4 rounded-r-md">
                                                {totalCount || 0}
                                            </TableCell>
                                        </TableRow>
                                    </TableFooter>
                                </Table>
                            </div>
                        </div>
                    </div>
                )}
                <div className="w-full flex justify-center md:justify-end my-4">
                    <Pagination
                        total={totalPages || 1}
                        page={currentPage}
                        onChange={setCurrentPage}
                    />
                </div>
            </div>
        </div>
    )
}
export default TenantMembers;
