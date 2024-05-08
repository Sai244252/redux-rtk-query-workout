import { useDeleteProductMutation } from "../app/service/dummydata";

function DeleteProduct({ productId }) {
  const [deleteProduct, { data, error, isLoading }] =
    useDeleteProductMutation();

  if (error) {
    return <h1>Error {error} </h1>;
  }

  if (isLoading) {
    return <h1>Loading....</h1>;
  }

  const handleDeleteProduct = async () => {
    try {
      await deleteProduct(productId);
    } catch (error) {
      console.error("Error in updating product :", error.message);
    }
  };
  return (
    <div>
      <h1>{data?.title}</h1>
      <button onClick={handleDeleteProduct}>Delete product</button>
    </div>
  );
}

export default DeleteProduct;
