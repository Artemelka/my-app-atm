import { SyntheticEvent } from "react";

export type InputEventType = {
  event: SyntheticEvent<HTMLInputElement>;
  value: string;
  name: string;
}