import React, {useState, useEffect} from 'react'
import {AiFillEye, AiFillGithub} from 'react-icons/ai'
import {motion} from 'framer-motion'
import { AppWrap, MotionWrap } from '../../Wrapper'
import { urlFor, client } from '../../sanity_client'

import './Work.scss'


const Work = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [animateCard, setAnimateCard] = useState({y: 0, opacity: 1})
  const [works, setWorks] = useState([])
  const [filterWorks, setFilterWorks] = useState([])
  useEffect(()=>{
    const query = '*[_type == "works"]'

    client.fetch(query).then(data => {
      setWorks(data)
      setFilterWorks(data)
    })
  }, [])

  const handleWorkFilter = item => {
    setActiveFilter(item)
    setAnimateCard({y: 100, opacity: 0})

    setTimeout(()=> {
      setAnimateCard({y: 0, opacity: 1})
      if(item === "All"){
        setFilterWorks(works)
      }else{
        setFilterWorks(works.filter(work => work.tags.includes(item)))
      }

    }, 500)
  }
  return (
    <>
      <h2 className='head-text'>
        My Creative
        <span> Portfolio </span>
        section
      </h2>

      <div className='app__work-filter'>
        {['UI/UX', 'Web App', 'Mobile', 'React JS', 'All'].map((item, index)=>(
          <div 
            className={`app__work-filter-item app_flex p-text ${activeFilter === item ? 'item-active' : ''}`}
            key={index}
            onClick={()=> handleWorkFilter(item)}>
              {item}
            </div>
        ))}
      </div>
      <motion.div
        animate={animateCard}
        transition={{duration: 0.5, delayChildren: 0.5}}
        className='app__work-portfolio'
      >
        {filterWorks.map((work, index) => (
          <div className='app__work-item app__flex' key={index}>
            <div className='app__work-img app__flex'>
              <img src={urlFor(work.imgUrl)} alt={work.name} />

              <motion.div 
                whileHover={{opacity: [0, 1]}}
                transition={{
                  duration: 0.25,
                  ease: 'easeInOut',
                  staggerChildren: 0.5
                }}
                className="app__work-hover app__flex"
              >
                <a 
                  href={work.projectLink} 
                  target="_black"
                  rel='noreferrer'>
                  <motion.div
                    whileInView={{scale: [0, 1]}}
                    whileHover={{scale: [1, 0.9]}}
                    transition={{duration: 0.25}}
                    className='app__flex'
                  >
                    <AiFillEye />
                  </motion.div>
                </a>
                <a 
                  href={work.codeLink} 
                  target="_black"
                  rel='noreferrer'>
                  <motion.div
                    whileInView={{scale: [0, 1]}}
                    whileHover={{scale: [1, 0.9]}}
                    transition={{duration: 0.25}}
                    className='app__flex'
                  >
                    <AiFillGithub />
                  </motion.div>
                </a>
              </motion.div>
            </div>

            <div className='app__work-content app__flex'>
              <h4 className='bold-text'>{work.title}</h4>
              <p className='p-text' style={{marginTop: 10}}>{work.description}</p>
              <div className='app__work-tag app__flex'>
                <p className='p-text'>{work.tags[0]}</p>
              </div>
            </div>

          </div>
        ))}
      </motion.div>
    </>
  )
}

export default AppWrap(
  MotionWrap(Work, 'app__work'), 
  'work',
  'app__primarybg')