import { Carousel } from "../../components/Carousel/CarouselProps"
import ProductList from "../../components/ProductList/ProductList"
import { AboutUs } from "../../components/AboutUs/AboutUs"

import './home.css'


const images = [
    'https://media.istockphoto.com/id/1462151129/pt/foto/prevent-global-warming-girl-planting-a-small-tree.jpg?s=2048x2048&w=is&k=20&c=KZG540CEedo7lMg0YQ4MuTdEVw-HKHxoOufubxyMwz4=',
    'https://cdn.pixabay.com/photo/2024/06/23/06/27/lake-8847415_960_720.jpg',
    'https://cdn.pixabay.com/photo/2019/08/23/12/02/lake-4425606_1280.jpg',
    'https://cdn.pixabay.com/photo/2021/08/08/20/37/mountains-6531903_1280.jpg',
]
export const Home = () => {

    return (
        <div className="container">
            <Carousel images={images} />
            <div className="carrosel-prod">
                <h1 className="title">Nossos Chás</h1>
                <ProductList/>                
            </div>
            <AboutUs />
        </div>
    )
}