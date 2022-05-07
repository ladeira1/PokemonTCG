import { toast } from 'react-toastify';

export const useToast = () => {
  const error = (message: string) => {
    toast(message, {
      type: 'error',
      theme: 'colored',
    });
  };

  return { error };
};
