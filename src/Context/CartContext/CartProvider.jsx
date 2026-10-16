import { useState } from 'react';
import apiClient from '@/lib/apiClient';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { CartContext } from './CartContext';
import { toast } from 'sonner';


export default function CartContextProvider({ children }) {
  const queryClient = useQueryClient();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const handleOpen = () => setIsCartOpen(true);
  const handleClose = () => setIsCartOpen(false);

  const getHeaders = () => {
    const token = localStorage.getItem('tkn');
    return token ? { token } : {};
  };



  const fetchUserCart = async () => {
    const { data } = await apiClient.get('/cart', { headers: getHeaders() });
    return data.data;
  };

  const {
    data: cartData,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['cart'],
    queryFn: fetchUserCart,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  });



  const AddProduct = useMutation({
    mutationFn: (productId) => {
      return toast.promise(
        apiClient.post("/cart", { productId }, { headers: getHeaders() }),
        {
          loading: "Adding product to cart...",
          success: "Product added successfully!",
          error: "Failed to add product ",
        }
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries(['cart']);
    },

  });

  const UpdateCount = useMutation({
    mutationFn: ({ productId, newCount }) => {
      return toast.promise(apiClient.put(
        `/cart/${productId}`,
        { count: newCount },
        { headers: getHeaders() }
      ),
        {
          loading: 'Updating product quantity...',
          success: 'Product quantity updated successfully!',
          error: 'Error updating product quantity',
        }
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["cart"]);
    },
  });

  const DeleteProduct = useMutation({
    mutationFn: (productId) => {
      return toast.promise(apiClient.delete(
        `/cart/${productId}`,
        { headers: getHeaders() }
      ),
        {
          loading: 'Deleting product...',
          success: 'Product deleted successfully!',
          error: 'Error Deleting product',
        }
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["cart"]);
    },
  });



  const ClearProducts = useMutation({
    mutationFn: async () => {
      return toast.promise(apiClient.delete('/cart', { headers: getHeaders() }),
        {
          loading: 'Deleting Cart...',
          success: 'Cleared Successfully!',
          error: 'Error Deleting Cart',
        }
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["cart"]);
    },
  });


  const subtotal = cartData?.totalCartPrice || 0;
  const shipping = subtotal > 50 ? 0 : 9.99;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;
  const numOfCartItems = cartData?.products?.reduce((sum, item) => sum + item.count, 0) || 0;

  return (
    <CartContext.Provider
      value={{
        addProduct: AddProduct.mutate,
        isLoadingProduct: AddProduct.isLoading,
        cartProduct: cartData?.products || [],
        totalCartPrice: subtotal,
        numOfCartItems,
        cartId: cartData?._id,
        total,
        shipping,
        tax,
        subtotal,
        getUserCart: fetchUserCart,
        UpdateCount: UpdateCount.mutate,
        deleteProduct: DeleteProduct.mutate,
        clearProducts: ClearProducts.mutate,
        isCartOpen,
        handleClose,
        handleOpen,
        isLoading,
        isError,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
