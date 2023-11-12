interface IProductDetailsProps {
  params: {
    productId: string;
  };
}

export default function ProductDetails({ params }: IProductDetailsProps) {
  return <h1>Details about product {params.productId}</h1>;
}
