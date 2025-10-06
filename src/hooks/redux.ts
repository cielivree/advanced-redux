import { TypedUseSelectorHook, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../store/store";
import { useSelector } from "react-redux";

export const useAppDispatch = () => useDispatch<AppDispatch>()  // typed useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector  // App selector has a type of a root reducer