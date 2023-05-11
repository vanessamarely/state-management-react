import { atom, useRecoilState } from 'recoil';

export const themeState = atom({
  key: 'theme',
  default: 'light',
});

export function useThemeState() {
  return useRecoilState(themeState);
}

export const counterState = atom({
    key: 'counter',
    default: 0,
  });
  
  export function useCounterState() {
    return useRecoilState(counterState);
  }