import { useNavigate, useParams } from "react-router-dom";
import { useGetProductQuery } from "../../redux/api/apiSlice";
import { useEffect } from "react";
import Product from "./Product";

const SingleProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data, isLoading, isFetching, isSuccess } = useGetProductQuery({ id });

  useEffect(() => {
    if (!isFetching && !isLoading && !isSuccess) {
      navigate("/");
    }
  }, [isLoading, isFetching, isSuccess]);

  return <div>{isLoading ? <p>Loading...</p> : <Product {...data} />}</div>;
};

export default SingleProduct;
