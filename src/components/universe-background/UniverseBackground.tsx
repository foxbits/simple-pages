import { FC, ReactNode } from "react";

import "./UniverseBackground.css";

interface UniverseBackgroundProps {
    children: ReactNode;
};

export const UniverseBackground: FC<UniverseBackgroundProps> = ({ children }) => {
    return (
        <>
            <div className="universe-background">
                <div className="stars"></div>
                <div className="stars-twinkle"></div>
                <div className="milky-way"></div>
                <div className="shooting-star"></div>
                <div className="shooting-star"></div>
                <div className="shooting-star"></div>
            </div>
            <div className="universe-content">
                {children}
            </div>
        </>
    );
}
