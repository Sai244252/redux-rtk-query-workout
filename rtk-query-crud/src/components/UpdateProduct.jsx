import { useUpdateProductMutation } from "../app/service/dummydata";

function UpdateProduct({ productId }) {
  const [updateProduct, { data, error, isLoading }] =
    useUpdateProductMutation();

  if (error) {
    return <h1>Error {error} </h1>;
  }

  if (isLoading) {
    return <h1>Loading....</h1>;
  }

  const handleUpdateProduct = async () => {
    try {
      const updatedProductData = {
        title: "Title Updated",
      };

      await updateProduct({
        id: productId,
        updatedProduct: updatedProductData,
      });
    } catch (error) {
      console.error("Error in updating product :", error.message);
    }
  };
  return (
    <div>
      <h1>{data?.title}</h1>
      <button onClick={handleUpdateProduct}>update product</button>
    </div>
  );
}

export default UpdateProduct;
