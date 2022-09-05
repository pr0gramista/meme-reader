import create from 'zustand';
import { devtools, persist } from 'zustand/middleware';

interface BearState {
  autoplay: boolean;
  setAutoplay: (newValue: boolean) => void;
  infiniteScroll: boolean;
  setInfiniteScroll: (newValue: boolean) => void;
}

export const useBearStore = create<BearState>()(
  devtools(
    persist(
      (set) => ({
        autoplay: true,
        setAutoplay: (newValue) => set({ autoplay: newValue }),
        infiniteScroll: false,
        setInfiniteScroll: (newValue) => set({ infiniteScroll: newValue }),
      }),
      {
        name: 'bear-storage',
      },
    ),
  ),
);
