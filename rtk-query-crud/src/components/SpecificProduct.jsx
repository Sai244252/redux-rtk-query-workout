import { useGetProductByIdQuery } from "../app/service/dummydata";

function SpecificProduct() {
  const { data, isError, isLoading } = useGetProductByIdQuery(12);
  console.log(data);
  if (isError) {
    return <h1>Ohhhh No Error occured</h1>;
  }

  if (isLoading) {
    return <h1> Loading ....</h1>;
  }
  return (
    <div>
      <h1>{data?.brand}</h1>
      <h1>{data?.category}</h1>
      <h1>{data?.description}</h1>
    </div>
  );
}

export default SpecificProduct;
