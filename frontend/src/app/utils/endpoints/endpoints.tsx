

type EndpointTypes = {
    homeUa: string,
    homeRu: string,
    about: string,
    services: string,
    photos: string,
    reviews: string
};

const endpoints: Readonly<EndpointTypes> = {
    homeUa: 'ua',
    homeRu: 'ru',
    about: '#about',
    services: '#services',
    photos: '#photos',
    reviews: '#reviews'
}

//need to fix with home dynamic endpoint

export default endpoints;