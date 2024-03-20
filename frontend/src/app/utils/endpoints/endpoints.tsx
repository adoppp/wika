

type EndpointTypes = {
    about: string;
    services: string,
    photos: string,
    reviews: string
};

const endpoints: Readonly<EndpointTypes> = {
    // home: `/${'ua'}`,
    about: '#about',
    services: '#services',
    photos: '#photos',
    reviews: '#reviews'
}

//need to fix with home dynamic endpoint

export default endpoints;