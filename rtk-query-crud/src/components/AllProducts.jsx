import { useGetAllProductQuery } from "../app/service/dummydata";

function AllProducts() {
  const { data, isError, isLoading } = useGetAllProductQuery();

  if (isError) {
    return <h1>Ohhhh No Error occured</h1>;
  }

  if (isLoading) {
    return <h1> Loading ....</h1>;
  }
  return (
    <div>
      {data?.products.map((product) => {
        return (
          <>
            <h2 key={product.id}>{product.title}</h2>
            <p>{product.description}</p>
          </>
        );
      })}
    </div>
  );
}

export default AllProducts;
