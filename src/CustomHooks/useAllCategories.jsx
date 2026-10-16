import { useQuery } from "@tanstack/react-query";
import apiClient from "@/lib/apiClient";

export default function useAllCategories() {
  function getCategories() {
    return apiClient.get('/categories');
  }

  const res = useQuery({
    queryKey: ['allCategories'],
    queryFn: getCategories,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  });
  return res;
}
