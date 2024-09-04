import { ReactElement } from "react";

export default function InfoCard({ name, link, children }: { name: string, link: string, children: ReactElement }) {
    return (
        <a href={link} target="_blank" rel="noopener noreferrer">
            <div className="flex flex-row w-full rounded-md bg-white shadow-lg p-2 hover:bg-gray-200 hover:animate-fade">
                {children}
                <div className="ml-5 w-full flex justify-center">
                    <h2 className="text-4xl font-semibold">{name}</h2>
                </div>
            </div>
        </a>
    );
}
