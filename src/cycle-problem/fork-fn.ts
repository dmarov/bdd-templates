import { LinearFn } from './linear-fn';

export interface ForkFn {
  ifs: { [key: number]: { mod: number; eq: number; } };
  ifreturns: { [key: number]: LinearFn };
  defaultReturn: LinearFn;
}
