import create from 'zustand';
import { devtools, persist } from 'zustand/middleware';

interface ReadingSettingsState {
  autoplay: boolean;
  setAutoplay: (newValue: boolean) => void;
  infiniteScroll: boolean;
  setInfiniteScroll: (newValue: boolean) => void;
}

export const useReaderSettings = create<ReadingSettingsState>()(
  devtools(
    persist(
      (set) => ({
        autoplay: true,
        setAutoplay: (newValue) => set({ autoplay: newValue }),
        infiniteScroll: false,
        setInfiniteScroll: (newValue) => set({ infiniteScroll: newValue }),
      }),
      {
        name: 'reader-settings',
      },
    ),
  ),
);
