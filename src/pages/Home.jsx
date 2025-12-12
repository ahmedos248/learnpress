import React from 'react'
import Hero from '../components/home/hero'
import Categories from '../components/home/Categories'
import ExploreSection from '../components/home/ExploreSection'
import Rate from '../components/home/Rate'
import Amazing from '../components/home/Amazing'
import Grow from '../components/home/Grow'
import Feedbacks from '../components/home/Feedbacks'
import Academy from '../components/home/Academy'
import CoursesSection from '../components/home/CoursesSection'
import ArticalsSection from '../components/home/ArticalsSection'
const Home = () => {
  return (
    <div>
      <Hero />
      <Categories />
      <CoursesSection />
      <ExploreSection />
      <Rate />
      <Grow />
      <Amazing />
      <Feedbacks />
      <Academy />
      <ArticalsSection />
    </div>
  );
}

export default Home
