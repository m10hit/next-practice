interface IParamsProps {
  params: {
    productId: string;
  };
}

export default function ProductDetails({ params }: IParamsProps) {
  return <h1>Details about product {params.productId}</h1>;
}
