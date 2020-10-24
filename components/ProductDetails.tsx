import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ProductDetails({ productDetail }: any) {
    return (
        <div>
            <div className="d-flex justify-content-center">
                <div className="card border-success mb-3 mx-2" style={{ maxWidth: 540 }}>
                    <div className="row no-gutters">
                        <div className="col-md-4">
                            <img src={productDetail?.image} className="card-img" alt="..." />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">{productDetail?.name}</h5>
                                <p className="badge badge-danger text-wrap p-2" style={{ fontSize: 14, letterSpacing: 1.4 }}>{productDetail?.sku}</p>
                                <p className="card-text font-weight-bold"><small className="" style={{ fontSize: 18, fontWeight: 'bold' }}> <span style={{ fontSize: 16 }}>Price: $</span>{productDetail?.price}</small></p>
                                <div className="input-group mb-3">
                                    <input type="number" className="form-control" placeholder="Amount" aria-label="Recipient's username" aria-describedby="button-addon2" />
                                    <div className="input-group-append">
                                        <button className="btn btn-outline-success" type="button" id="button-addon2">
                                            <FontAwesomeIcon className="mx-2 " icon="cart-plus" />
                                        Buy</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container"><h2>About this Avocado</h2>
                <p className="">{productDetail?.attributes?.description}</p>
            </div>
            <div className="container">
                <table className="table table-bordered">
                    <thead className="table-success font-weight-bold">
                        <td >Attributes</td>
                    </thead>
                    <tbody>
                        <tr>
                            <td><i>Shape</i></td>
                            <td>{productDetail?.attributes?.shape}</td>
                        </tr>
                        <tr>
                            <td><i>Hardiness</i></td>
                            <td>{productDetail?.attributes?.hardiness}</td>
                        </tr>
                        <tr>
                            <td><i>Taste</i></td>
                            <td>{productDetail?.attributes?.taste}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}
