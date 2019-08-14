//performs the AJAX request.
import axios from 'axios';

export default async term => {
    const response = await axios.get("https://api.unsplash.com/search/photos", {
        params: {
            client_id:
                "88a3ae3ce0be6721ae43b73c48531c519cadc58fed92088d00f4db1ccefc3dc6",
            query: term
        }
    });

    return {images: response.data.results, term: term};
};
