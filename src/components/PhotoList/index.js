import React, { useState } from 'react';
import Modal from '../Modal';
const PhotoList = ({ category }) => {
    const [photos] = useState([
        {
            name: 'Grocery aisle',
            category: 'commercial',
            smallImageURL: "https://s3.us-east-2.amazonaws.com/dseskey.com/images/photo-port/assets/small/commercial/0.jpg",
            largeImageURL: "https://s3.us-east-2.amazonaws.com/dseskey.com/images/photo-port/assets/large/commercial/0.jpg",
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        },
        {
            name: 'Grocery booth',
            category: 'commercial',
            smallImageURL: 'https://s3.us-east-2.amazonaws.com/dseskey.com/images/photo-port/assets/small/commercial/1.jpg',
            largeImageURL: 'https://s3.us-east-2.amazonaws.com/dseskey.com/images/photo-port/assets/large/commercial/1.jpg',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        },
        {
            name: 'Building exterior',
            category: 'commercial',
            smallImageURL: 'https://s3.us-east-2.amazonaws.com/dseskey.com/images/photo-port/assets/small/commercial/2.jpg',
            largeImageURL: 'https://s3.us-east-2.amazonaws.com/dseskey.com/images/photo-port/assets/large/commercial/2.jpg',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        },
        {
            name: 'Restaurant table',
            category: 'commercial',
            smallImageURL: 'https://s3.us-east-2.amazonaws.com/dseskey.com/images/photo-port/assets/small/commercial/3.jpg',
            largeImageURL: 'https://s3.us-east-2.amazonaws.com/dseskey.com/images/photo-port/assets/large/commercial/3.jpg',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        },
        {
            name: 'Cafe interior',
            category: 'commercial',
            smallImageURL: 'https://s3.us-east-2.amazonaws.com/dseskey.com/images/photo-port/assets/small/commercial/4.jpg',
            largeImageURL: 'https://s3.us-east-2.amazonaws.com/dseskey.com/images/photo-port/assets/large/commercial/4.jpg',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        },
        {
            name: 'Cat green eyes',
            category: 'portraits',
            smallImageURL: 'https://s3.us-east-2.amazonaws.com/dseskey.com/images/photo-port/assets/small/portraits/0.jpg',
            largeImageURL: 'https://s3.us-east-2.amazonaws.com/dseskey.com/images/photo-port/assets/large/portraits/0.jpg',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        },
        {
            name: 'Green parrot',
            category: 'portraits',
            smallImageURL: 'https://s3.us-east-2.amazonaws.com/dseskey.com/images/photo-port/assets/small/portraits/1.jpg',
            largeImageURL: 'https://s3.us-east-2.amazonaws.com/dseskey.com/images/photo-port/assets/large/portraits/1.jpg',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        },
        {
            name: 'Yellow macaw',
            category: 'portraits',
            smallImageURL: 'https://s3.us-east-2.amazonaws.com/dseskey.com/images/photo-port/assets/small/portraits/2.jpg',
            largeImageURL: 'https://s3.us-east-2.amazonaws.com/dseskey.com/images/photo-port/assets/large/portraits/2.jpg',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        },
        {
            name: 'Pug smile',
            category: 'portraits',
            smallImageURL: 'https://s3.us-east-2.amazonaws.com/dseskey.com/images/photo-port/assets/small/portraits/3.jpg',
            largeImageURL: 'https://s3.us-east-2.amazonaws.com/dseskey.com/images/photo-port/assets/large/portraits/3.jpg',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        },
        {
            name: 'Pancakes',
            category: 'food',
            smallImageURL: 'https://s3.us-east-2.amazonaws.com/dseskey.com/images/photo-port/assets/small/food/0.jpg',
            largeImageURL: 'https://s3.us-east-2.amazonaws.com/dseskey.com/images/photo-port/assets/large/food/0.jpg',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        },
        {
            name: 'Burrito',
            category: 'food',
            smallImageURL: 'https://s3.us-east-2.amazonaws.com/dseskey.com/images/photo-port/assets/small/food/1.jpg',
            largeImageURL: 'https://s3.us-east-2.amazonaws.com/dseskey.com/images/photo-port/assets/large/food/1.jpg',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        },
        {
            name: 'Scallop pasta',
            category: 'food',
            smallImageURL: 'https://s3.us-east-2.amazonaws.com/dseskey.com/images/photo-port/assets/small/food/2.jpg',
            largeImageURL: 'https://s3.us-east-2.amazonaws.com/dseskey.com/images/photo-port/assets/large/food/2.jpg',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        },
        {
            name: 'Burger',
            category: 'food',
            smallImageURL: 'https://s3.us-east-2.amazonaws.com/dseskey.com/images/photo-port/assets/small/food/3.jpg',
            largeImageURL: 'https://s3.us-east-2.amazonaws.com/dseskey.com/images/photo-port/assets/large/food/3.jpg',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        },
        {
            name: 'Fruit bowl',
            category: 'food',
            smallImageURL: 'https://s3.us-east-2.amazonaws.com/dseskey.com/images/photo-port/assets/small/food/4.jpg',
            largeImageURL: 'https://s3.us-east-2.amazonaws.com/dseskey.com/images/photo-port/assets/large/food/4.jpg',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        },
        {
            name: 'Green river',
            category: 'landscape',
            smallImageURL: 'https://s3.us-east-2.amazonaws.com/dseskey.com/images/photo-port/assets/small/landscape/0.jpg',
            largeImageURL: 'https://s3.us-east-2.amazonaws.com/dseskey.com/images/photo-port/assets/large/landscape/0.jpg',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        },
        {
            name: 'Docks',
            category: 'landscape',
            smallImageURL: 'https://s3.us-east-2.amazonaws.com/dseskey.com/images/photo-port/assets/small/landscape/1.jpg',
            largeImageURL: 'https://s3.us-east-2.amazonaws.com/dseskey.com/images/photo-port/assets/large/landscape/1.jpg',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        },
        {
            name: 'Panoramic village by sea',
            category: 'landscape',
            smallImageURL: 'https://s3.us-east-2.amazonaws.com/dseskey.com/images/photo-port/assets/small/landscape/2.jpg',
            largeImageURL: 'https://s3.us-east-2.amazonaws.com/dseskey.com/images/photo-port/assets/large/landscape/2.jpg',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        },
        {
            name: 'Domestic landscape',
            category: 'landscape',
            smallImageURL: 'https://s3.us-east-2.amazonaws.com/dseskey.com/images/photo-port/assets/small/landscape/3.jpg',
            largeImageURL: 'https://s3.us-east-2.amazonaws.com/dseskey.com/images/photo-port/assets/large/landscape/3.jpg',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        },
        {
            name: 'Park bench',
            category: 'landscape',
            smallImageURL: 'https://s3.us-east-2.amazonaws.com/dseskey.com/images/photo-port/assets/small/landscape/4.jpg',
            largeImageURL: 'https://s3.us-east-2.amazonaws.com/dseskey.com/images/photo-port/assets/large/landscape/4.jpg',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        },
    ]);
    const currentPhotos = photos.filter((photo) => photo.category === category);
    
    const toggleModal = (image, i) => {
        setCurrentPhoto({...image, index: i});
        setIsModalOpen(!isModalOpen);

    }
    const [currentPhoto, setCurrentPhoto] = useState();
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div>
            {isModalOpen && <Modal currentPhoto={currentPhoto} closeModal={toggleModal}/>}
            <div className="flex-row">
                {currentPhotos.map((image, index) => (

                    <img
                        src={image.smallImageURL}
                        alt={image.name}
                        className="img-thumbnail mx-1"
                        key={image.name}
                        onClick={() => toggleModal(image, index)}
                    />
                ))}
            </div>
        </div>
    )
}

export default PhotoList;