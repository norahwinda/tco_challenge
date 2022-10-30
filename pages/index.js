import PartTwo from '../Components/PartTwo'
import styles from '../styles/Home.module.css'
import Navbar from '../Components/Navbar'
import PartThree from '../Components/PartThree'
import Video from '../Components/Video'
import Scripture from '../Components/Scripture'
import PastorFuturistic from '../Components/PastorFuturistic'
import Frame from '../Components/Frame'
import StudyBooks from '../Components/StudyBooks'
import Signin from '../Components/Signin'
import Wisdom from '../Components/Wisdom'

export default function Home() {
  return (
    <div className={styles.container}>
        <Navbar />
        <PartTwo />
        <PartThree />
        <Video />
        <Scripture />
        <PastorFuturistic />
        <Frame />
        <StudyBooks />
        <Signin />
        <Wisdom />
    </div>
  )
}
