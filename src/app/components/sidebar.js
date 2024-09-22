"use client"
import SidebarSection from "./sidebar-section";

const SECTIONS = [
    {
        title: "Welcome Node.js!",
        links: [
            { label: "What is Node.js?", href: "/que-es" },
            { label: "Advantages of Node.js", href: "/adventages" },
            { label: "Installing Node.js", href: "/installing" }
        ]
    },
    {
        title: "Modules and NPM",
        links: [
            { label: "What is NPM?", href: "/npm" },
            { label: "Creating a Module", href: "/modules" },
            { label: "Installing Dependencies", href: "/dependency" },
            { label: "Managing Versions", href: "/versions" }
        ]
    },
    {
        title: "Async Programming",
        links: [
            { label: "Event Loop in Node.js", href: "/events" },
            { label: "Callbacks", href: "/callback" },
            { label: "Promises and Async/Await", href: "/promises" }
        ]
    },
    {
        title: "Working with Servers",
        links: [
            { label: "Creating an HTTP Server", href: "/servers" },
            { label: "What is Express?", href: "/express" },
            { label: "Routes in Express", href: "/routes" }
        ]
    },
    {
        title: "Databases and Node.js",
        links: [
            { label: "Connecting to MySQL", href: "/mysql" },
            { label: "Mongoose with MongoDB", href: "mongodb" },
            { label: "Database Queries", href: "/queries" }
        ]
    },
    {
        title: "Security and Best Practices",
        links: [
            { label: "Environment Variables", href: "/env" },
            { label: "Secure Authentication", href: "/auth" },
            { label: "Error Handling", href: "/error" },
            { label: "Data Validation and Sanitization", href: "/validation" },
            { label: "Logging and Monitoring", href: "/logging" }
        ]
    }
];

function Sidebar() {
    return (
        <aside className="sidebar hidden lg:block bg-[#050613] p-5 border-r-[0.5px] border-[#ababab] border-opacity-25 overflow-auto sm:hidden fixed h-full w-[225px]">
            <nav className="pr-5 flex flex-col gap-3">
                {SECTIONS.map((section, i) => (
                    <SidebarSection key={i} title={section.title} links={section.links} />
                ))}
            </nav>
        </aside>
    );
}

export default Sidebar;