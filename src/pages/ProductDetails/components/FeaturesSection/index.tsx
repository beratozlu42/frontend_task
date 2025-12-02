interface Product {
  features: {
    name: string;
    value: string;
  }[];
}

interface ProductProps {
  product: Product;
}

export default function index({ product }: ProductProps) {
  return (
    <>
      <div className="overflow-x-auto my-8">
        <table className="min-w-max w-full rounded-lg ">
          <thead>
            <tr className="bg-red-100">
              <th className="px-4 py-3 text-left">Features</th>
              <th className="px-4 py-3 text-left"></th>
            </tr>
          </thead>

          <tbody>
            {product.features?.map((feature, i) => (
              <tr key={i}>
                <td className="px-4 py-3 font-medium">{feature.name}:</td>
                <td className="px-4 py-3">{feature.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}