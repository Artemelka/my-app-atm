import { SyntheticEvent } from "react";

export type ButtonEventType = {
  event: SyntheticEvent<HTMLButtonElement>;
  id?: string;
};