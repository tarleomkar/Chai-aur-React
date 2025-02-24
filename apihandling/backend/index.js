import express from 'express'

const app = express()

app.get('/api/products', (req, res) => {
    const products = [
        {
            id: 1,
            name: 'Old man',
            price: 200,
            image: 'https://images.pexels.com/photos/29498429/pexels-photo-29498429/free-photo-of-candid-street-scene-in-sarajevo-bosnia.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
        }, 
        {
            id: 2,
            name: 'Horses',
            price: 250,
            image: 'https://images.pexels.com/photos/11336249/pexels-photo-11336249.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
        },
        {
            id: 3,
            name: 'River',
            price: 280,
            image:'https://images.pexels.com/photos/30390066/pexels-photo-30390066/free-photo-of-scenic-mountain-lake-with-lush-forests.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
        },
        {
            id: 4,
            name: 'Sea Activities',
            price: 400,
            image: 'https://images.pexels.com/photos/30650213/pexels-photo-30650213/free-photo-of-thrilling-kitesurfing-adventure-in-france.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
        },
        {
            id: 5,
            name: 'Cars',
            price: 320,
            image: 'https://images.pexels.com/photos/29566895/pexels-photo-29566895/free-photo-of-aerial-view-of-a-symmetrical-car-parking-lot.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
        }
    ]

    if(req.query.search) {
        const filterProducts = products.filter(product => product.name.includes(req.query.search))
        res.send(filterProducts);
        return
    }

    setTimeout(() => {
        res.send(products)
    }, 3000)
})

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});