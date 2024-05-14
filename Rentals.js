import React from 'react';

const Rentals = () => {
    return (
        <div>
            <h2>Our Rentals</h2>
            <div className="rental-list">
                {/* Example item, you can map through data fetched from an API or server */}
                <div className="rental-item">
                    <h3>Mountain Bike</h3>
                    <p>$20/day</p>
                    <button>Rent Now</button>
                </div>
                <div className="rental-item">
                    <h3>Electric Scooter</h3>
                    <p>$15/day</p>
                    <button>Rent Now</button>
                </div>
            </div>
        </div>
    );
};

export default Rentals;
