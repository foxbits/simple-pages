import type { Metadata } from "next";
import { UniverseBackground } from "@/components/universe-background/UniverseBackground";


export const metadata: Metadata = {
    title: "Noaptea De Sânziene",
    description: "Noaptea De Sânziene - work in progress...",
};

export default function NoapteaDeSanzieneHome() {
    return (
        <UniverseBackground>
            <div className="flex flex-col items-center">
                <h1>rawr, work in progress...</h1>
                <div className="flex flex-row gap-1">bite me at
                    <a href="https://www.instagram.com/hizzashi/" className="hover:underline">@hizzashi</a>
                </div>
            </div>
        </UniverseBackground>
    );
};
