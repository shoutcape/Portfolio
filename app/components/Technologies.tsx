import React from 'react'
import styles from './Technologies.module.css'
import ReactSVG from '@/../public/technology-svgs/react.svg'
import TypescriptSVG from '@/../public/technology-svgs/typescript.svg'
import PythonSVG from '@/../public/technology-svgs/python.svg'
import MongodbSVG from '@/../public/technology-svgs/mongodb.svg'
import ExpressSVG from '@/../public/technology-svgs/express.svg'
import DockerSVG from '@/../public/technology-svgs/docker.svg'
import MysqlSVG from '@/../public/technology-svgs/mysql.svg'
import NextjsSVG from '@/../public/technology-svgs/nextjs.svg'
import CssSVG from '@/../public/technology-svgs/css3.svg'
import JavascriptSVG from '@/../public/technology-svgs/javascript.svg'

const techList = [
ReactSVG, 
TypescriptSVG,
PythonSVG,
MongodbSVG ,
ExpressSVG,
DockerSVG,
MysqlSVG,
NextjsSVG,
CssSVG,
JavascriptSVG
] 

const Technologies = () => {
  return (
    <div>
      <h1 className='text-center text-3xl'>Technologies</h1>
      <div className='flex justify-center items-center'>
        <div className={styles.highlight}/>
        <div className={`${styles.techContainer}`}>
          {techList.map((Item, index) => (
            <div key={index} className={`${styles.techItem} glass`}>
              <Item className={`${styles.techSvg}`}/>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Technologies
