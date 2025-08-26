import { UniverseBackground } from "@/components/universe-background/UniverseBackground";

export default function FoxBitesHome() {
    return (
        <UniverseBackground>
            <div className="flex flex-col items-center">
                <h1>Nothing to see here... yet.</h1>
                <div className="flex flex-row gap-1">Get in touch with me at
                    <a href="mailto:contact@foxbites.net" className="hover:underline">contact@foxbites.net</a>
                </div>
            </div>
        </UniverseBackground>
    );
};
