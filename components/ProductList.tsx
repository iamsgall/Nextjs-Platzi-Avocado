import Link from 'next/link';

export default function ProductList({ productList }: any) {
    return (
        <div className="container">
            <div className="row">
                {productList.map((product: any) => (
                    <Link key={product.id} href={`/product/${product.id}`}>
                        <div className="card mb-3 mx-2" style={{ maxWidth: 540, cursor: 'pointer' }}>
                            <div className="row no-gutters">
                                <div className="col-md-4">
                                    <img src={product.image} className="card-img" alt="..." />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">{product.name}</h5>
                                        <p className="card-text">{product.attributes.description}</p>
                                        <p className="card-text font-weight-bold"><small className="" style={{ fontSize: 18, fontWeight: 'bold' }}> <span style={{ fontSize: 16 }}>Price: $</span>{product.price}</small></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>

    )
}
