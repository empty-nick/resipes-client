import { TypedUseSelectorHook, useSelector } from "react-redux";
import { TStore } from "../store/store.ts";

export const useAppSelector: TypedUseSelectorHook<TStore> = useSelector