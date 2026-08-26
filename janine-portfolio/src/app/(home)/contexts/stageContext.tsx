"use client";
import { createContext, type RefObject, useContext, useRef } from "react";

type Refs = Record<string, HTMLElement | null>;
type StageContextType = {
	register: (id: string) => (el: HTMLElement | null) => void;
	refs: RefObject<Refs>;
};

const StageContext = createContext<StageContextType | null>(null);

export const StageProvider = ({ children }: { children: React.ReactNode }) => {
	const refs = useRef<Refs>({});
	const register = (id: string) => (el: HTMLElement | null) => {
		refs.current[id] = el;
	};
	return (
		<StageContext.Provider value={{ register, refs }}>
			{children}
		</StageContext.Provider>
	);
};

export const useStage = () => {
	const ctx = useContext(StageContext);
	if (!ctx) throw new Error("useStage must be used inside StageProvider");
	return ctx;
};
