import { useQuery } from '@tanstack/react-query';
import apiClient from '@/lib/apiClient';

export default function useAllProduct() {

    function fetchProducts() {
        return apiClient.get('/products');
    }

    const res = useQuery({
    queryKey: ['allProducts'],
    queryFn: fetchProducts ,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    });
    return res;
}
