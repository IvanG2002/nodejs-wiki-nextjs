'use client';

import React, { useState } from 'react';
import { cn } from "@/lib/utils";
import Link from 'next/link';


// SidebarSection Component (handles individual section state)
function SidebarSection({ title, links }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="cursor-pointer">
            <summary onClick={() => setIsOpen(!isOpen)} className="flex justify-between items-center">
                <div className="text-white text-sm">{title}</div>
                <svg className={cn("transition-all duration-150 ease-linear", isOpen ? "rotate-0" : "-rotate-90")}
                    xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m6 9 6 6 6-6" />
                </svg>
            </summary>
            <ul className={cn("flex flex-col pl-3 border-l-[0.5px] border-[#ababab] border-opacity-25 gap-1 pt-1", isOpen ? "" : "h-0 opacity-0")}>
                {links.map((link, i) => (
                    <li key={i} className="text-[#ababab] text-[13px] hover:text-white">
                        <Link href={link.href} replace>{link.label}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default SidebarSection;
