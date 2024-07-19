import { useState } from "react";
import { useMutation } from "convex/react";

export const useApiMutation = (mutationFunction: any) => {
  const [pending, setPending] = useState(false);
  const apiMutation = useMutation(mutationFunction);

  const mutate = async (payload: any) => {
    setPending(true);
    return apiMutation(payload)
      .then((res: any) => {
        return res;
      })
      .catch((err: any) => {
        return err;
      })
      .finally(() => {
        setPending(false);
      });
  };

  return {
    mutate,
    pending,
  };
};
