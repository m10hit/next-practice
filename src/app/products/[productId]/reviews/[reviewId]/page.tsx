import { notFound } from 'next/navigation';

interface IReviewDetailsProps {
  params: {
    productId: string;
    reviewId: string;
  };
}

export default function ReviewDetails({ params }: IReviewDetailsProps) {
  if (parseInt(params.reviewId) > 1000) {
    notFound();
  }
  return (
    <h1>
      Review {params.reviewId} for product {params.productId}
    </h1>
  );
}
