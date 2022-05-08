const apiKey = 'Ho2zqYsH3DS2usNGgGa41A2I_BRkSsmAEnnFgK6OeqKx2qMdVLJdDuglX63meTBkBpZxY2GfsSOBvU2xbx0fwqMKvYKvx3Ou3HGENdPsDrJZwWtGtJ9OJ9QTbl12YnYx'; // Insert API key here.

const Yelp = {
    search(term, location, sortBy) {
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
            headers: {
                Authorization: `Bearer ${apiKey}`
            }
        }).then(response => {
            return response.json();
        }).then(jsonResponse => {
            if (jsonResponse.businesses) {
                return jsonResponse.businesses.map(business => ({
                    id: business.id,
                    imageSrc: business.image_url,
                    name: business.name,
                    address: business.location.address1,
                    city: business.location.city,
                    state: business.location.state,
                    zipCode: business.location.zip_code,
                    category: business.categories[0].title,
                    rating: business.rating,
                    reviewCount: business.review_count
                }));
            }
        });
    }
};

export default Yelp;
