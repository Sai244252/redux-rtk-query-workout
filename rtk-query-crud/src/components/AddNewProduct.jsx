import { useAddNewProductMutation } from "../app/service/dummydata";

function AddNewProduct() {
  const [addNewProduct, { data, isError, isLoading }] =
    useAddNewProductMutation();

  if (isError) {
    return <h1>Error</h1>;
  }

  if (isLoading) {
    return <h1>Loading....</h1>;
  }

  const handleAddProduct = async () => {
    try {
      const newProductData = {
        id: 1,
        title: "Amazing T-Shit",
        description: "This is an amazning product!",
      };
      await addNewProduct(newProductData);
    } catch (error) {
      return console.error("Error creating new Product: ", error.message);
    }
  };

  return (
    <div>
      <h1>{data?.id}</h1>
      <h1>{data?.title}</h1>
      <h1>{data?.description}</h1>
      <button onClick={handleAddProduct} disabled={isLoading}>
        Add New Product
      </button>
    </div>
  );
}

export default AddNewProduct;
