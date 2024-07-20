import React from 'react'

function Cards() {
    return (
        <div>
            <div>
                <div className="card mt-3" style={{ "width": "18rem", "maxHeight": "360px" }}>
                    <img src="https://images.pexels.com/photos/1438672/pexels-photo-1438672.jpeg" />
                    <div className="card-body bg-black">
                        <h5 className="card-title text-white">Card title</h5>
                        <p className="card-text text-white">This is some importnat text</p>
                        <div className='container wit-100'>
                            <select className='m-2 h-100 bg-success text-white rounded'>
                                {Array.from(Array(6), (e, i) => {
                                    return (
                                        <option key={i + 1} value={i + 1}> {i + 1}</option>
                                    )
                                })}
                            </select>
                            <select className='m-2 h-100 bg-success text-white rounded'>
                                <option value="half">Half</option>
                                <option value="full">Full</option>
                            </select>
                            <div className='d-inline fs-5 h-100 text-white'>
                                Total Price
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cards