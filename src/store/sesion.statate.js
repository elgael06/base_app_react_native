
import { create } from 'zustand'

const useSesionStore = create((set) => ({
  isActive: false,
  userName: '',
  fullName: '',
  email: '',
  isLoading: true,
  singIn: ({userName, fullName, email}) => set((state) => ({ userName, fullName, email, isActive: true })),
  singOut: () => set((state) => ({ isActive: false })),
  setLoading: (isLoading) => set((state) => ({ isLoading })),
}));

export default useSesionStore;
