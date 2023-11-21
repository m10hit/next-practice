import { Metadata } from 'next';
interface IProductDetailsProps {
  params: {
    productId: string;
  };
}

export const generateMetadata = async ({
  params,
}: IProductDetailsProps): Promise<Metadata> => {
  const title = await new Promise(resolve => {
    setTimeout(() => {
      resolve(`iPhone ${params.productId}`);
    }, 100);
  });
  return {
    title: `Product ${title}`,
  };
};

export default function ProductDetails({ params }: IProductDetailsProps) {
  return <h1>Details about {params.productId}</h1>;
}
