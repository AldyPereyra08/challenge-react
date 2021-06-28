import React, { useState, useEffect } from 'react';
import SuperHeroCardGrid from '../components/super-hero-card/SuperHeroCardGrid';
import { SearchHero } from '../components/search-hero/SearchHero';

import axios from 'axios';

function HomePage () {

    const token = 4789637597718630;

    const [heroData, setHeroData] = useState();
    const [searchHeroData, setSearchHeroData] = useState();

    const handleChangeSearch = (event) => {
        setSearchHeroData(event.target.value)    
    }

    const handleSubmitSearch = (e) => {
        e.preventDefault()
        axios.get(`https://www.superheroapi.com/api.php/${token}/search/${searchHeroData}`)
            .then(function (response) {
                setHeroData(response.data.results)
            })
            .catch(function (error) {
                setHeroData('')
                console.log('No se encontro Heroe')
            })
    }

    return(
        <div className="container">
            <SearchHero searchHeroData={searchHeroData} handleChangeSearch={handleChangeSearch} handleSubmitSearch={handleSubmitSearch}/>
            <SuperHeroCardGrid heroData={heroData}/>
        </div>
    );
}

export default HomePage;