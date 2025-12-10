import { useLoaderData } from 'react-router'
import HowItWork from '../../components/Aboute/HowItWork'
import AbouteOverview from '../../components/Home/AbouteOverview'
import NewsLetter from '../../components/Home/NewsLetter'
import OurServices from '../../components/Home/OurServices'
import Plants from '../../components/Home/Plants'
import Reviews from '../../components/Home/Reviews'


const Home = () => {
 const data=useLoaderData();

  return (
    <div>
      <Plants data={data} />
      <AbouteOverview/>
      <HowItWork/>
      <OurServices/>
      <Reviews/>
      <NewsLetter/>
    </div>
  )
}

export default Home
