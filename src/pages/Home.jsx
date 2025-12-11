import React from 'react'
import Hero from '../components/home/hero'
import Categories from '../components/home/Categories'
import ExploreSection from '../components/home/ExploreSection'
import Rate from '../components/home/Rate'
import Amazing from '../components/home/Amazing'
import Grow from '../components/home/Grow'
import Academy from '../components/home/Academy'
import Feedbacks from '../components/home/Feedbacks'
const Home = () => {
    return (
      <div>
        <Hero />
        <Categories />
        <ExploreSection />
        <Rate />

        <Grow />
        <Amazing />
<Academy />
<Feedbacks />
      </div>
    );
}

export default Home
