

import {FC} from 'react'
import {HomePageData} from "../components/svgs/index"


interface indexProps{}


const Home: FC<indexProps> = ({}) => {
  return (
    <div className="p-4">
      <HomePageData />
    </div>
  )
}

export default Home

