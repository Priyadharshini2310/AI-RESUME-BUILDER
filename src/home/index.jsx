import Header from '@/components/custom/Header'
import { UserButton } from '@clerk/clerk-react'
import { AtomIcon, Edit, Share2 } from 'lucide-react'
import React from 'react'
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
const timelineData = [
  {
    id: 1,
    step: "01",
    title: "Input Your Details",
    subtitle: "Simply fill out a few details about your work experience, skills, and goals. Our AI will use this information to start creating your resume or portfolio.",
  },
  {
    id: 2,
    step: "02",
    title: "Customize & Edit",
    subtitle: "Review and edit the AI-generated resume or portfolio. Make any adjustments to reflect your personal style and career objectives.",
  },
  {
    id: 3,
    step: "03",
    title: "Share & Get Interview Ready",
    subtitle: "Share your resume or portfolio instantly and start practicing with AI-powered interview prep questions designed for your job applications.",
  },
]
const testimonials = [
  {
    id: 1,
    name: "Create a Resume Tailored to You",
    quote:
    "Generate a professional resume in minutes. Our AI analyzes your experience and skills to craft a resume that highlights your strengths and maximizes your chances of getting noticed.",
    image: "/resume.png",
    link:"/dashboard",
    bgImage: "/blu.png", // Replace with your background image path
  },
  {
    id: 2,
    name: "Build Your Portfolio with Ease",
    // link:"http://localhost:3000",
    link:"/portfolio",
    quote:
    "Showcase your work with our AI-powered portfolio generator. Create a stunning digital portfolio that helps employers see your value instantly.",
    image: "/portfolio.png",
    bgImage: "/blu.png", // Replace with your background image path
  },
  // {
  //   id: 3,
  //   name: "Prepare for Interviews with Confidence",
  //   quote:
  //   "Practice with AI-generated interview questions tailored to the jobs you're applying for. Sharpen your responses and enter interviews feeling prepared and confident.",
  //   image: "/job-interview.png",
  //   bgImage: "/blu.png", // Replace with your background image path
  // },
];
const infiniteTestimonials = [...testimonials];
function Home() {
  return (
    <div>
      <Header />
      <div>

        {/* <Header/> */}

        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
          <a href="#" className="mt-10 inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-gray-700 rounded-full dark:bg-gray-800 dark:text-white" role="alert">
            <span className="text-xs bg-blue-500 rounded-full text-white px-4 py-1.5 mr-3">Create Your Resume</span> <span className="text-sm font-medium"></span>
            <svg className="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
          </a>
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            Build Your Career <span className='text-blue-500'>With AI</span> </h1>
          <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">Effortlessly Craft a Standout Resume with Our AI-Powered Builder. Let AI help you craft the perfect resume, build a professional portfolio, and ace your interviews with intelligent, personalized prep questions.</p>
          <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
            <a href="/dashboard" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-500 hover:bg-blue-400 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
              Get Started!
              <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </a>
            <a href="/AI RESUME BUILDER DEMO.mp4" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
              <svg className="mr-2 -ml-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path></svg>
              Watch Demo video
            </a>
          </div>
          {/* About us */}
          <div className="px-4 mx-auto text-center mb-9 md:max-w-screen-md lg:max-w-screen-lg lg:px-36">
            <span className="font-extrabold text-blue-500 text-5xl uppercase">ABOUT US</span>
            <div className="flex flex-wrap justify-center items-center mt-8 text-gray-500 sm:justify-between">
              <h1 className='font-bold w-full text-black text-2xl'>Effortlessly Create Job-Winning Resumes & Portfolios</h1>
              <p className='text-center mt-3 text-xl text-gray-500'>Our AI simplifies the process of building a professional resume and portfolio. With just a few clicks, get personalized recommendations, tailor your experience, and stand out to potential employers. Plus, prepare for interviews with smart AI-generated questions.</p>
            </div>
          </div>
        </div>

        {/* Work */}
        <div className="bg-white text-center -mt-11">
          <h2 className="font-extrabold text-blue-500 text-5xl mb-4">How Does Our AI Work?</h2>
          <h2 className="text-lg text-black font-semibold">Give mock interview in just 3 simplar easy step</h2>
          <div>
            {/* Timeline */}
            <div className="space-y-12">
              {timelineData.map((item, index) => (
                <TimelineItem
                  key={item.id}
                  step={item.step}
                  title={item.title}
                  subtitle={item.subtitle}
                  description={item.description}
                  index={index} // Pass the index to control delays
                />
              ))}
            </div>
          </div>
         <div>
         <h1 className='text-blue-500 text-5xl font-extrabold mb-6'>Features</h1>
          <div className="ml-36 flex flex-row justify-center items-center w-full max-w-7xl">
            
        <div
          className="flex transition-transform ease-in-out">
            {infiniteTestimonials.map((testimonial, index) => (
              <div key={index} className="flex-shrink-0 w-1/2 p-4">
                <div
                  className=" flex flex-col items-center justify-between p-8 shadow-lg rounded-lg text-center bg-cover bg-center"
                  style={{
                    height: "400px",
                    backgroundImage: `url(${testimonial.bgImage})`, // Set background image
                  }}
                >
                  {/* Testimonial Text */}
                  <div className="text-center mb-4">
                    <p className="text-lg italic text-blue-500 mb-4">
                      &quot;{testimonial.quote}&quot;
                    </p>
                  </div>

                  {/* Testimonial Image */}
                  <div className="relative z-10 mb-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-24 h-24 rounded-full border-4 border-white shadow-xl object-cover"
                    />
                  </div>

                  {/* Name and Title Below Image */}
                  <div>
                    <a href={testimonial.link}><h3 className="text-xl font-semibold text-white">
                      {testimonial.name}
                    </h3></a>
                    <p className="text-gray-100">{testimonial.title}</p>
                  </div>
                </div>
            
              </div>
            ))}
            </div>
            </div>
            </div>
          <div className="mt-12 text-center w-full bg-white/10 backdrop-blur-2xl flex-col justify-center items-center h-40">
            <div>
            <h1 className='text-black text-2xl font-extrabold mb-6'>Ready to Take the Next Step in Your Career?</h1></div>
            <div>
            <a
              href="/auth/sign-in"
              className="inline-block rounded bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-blue-700 focus:outline-none focus:ring focus:ring-yellow-400"
            >
              Get Started Today
            </a>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
const TimelineItem = ({ step, title, subtitle, description, index }) => {
  const controls = useAnimation(); // Control animations
  const [ref, inView] = useInView({
    threshold: 0.5, // Trigger the animation when 50% of the element is in view
  });

  // Trigger the animation based on `inView`
  useEffect(() => {
    if (inView) {
      controls.start({
        height: "100%",
        transition: { duration: 2, delay: index * 1.5 }, // Add a delay based on index to synchronize
      });
    } else {
      controls.start({ height: 0 }); // Reset to 0 height when out of view
    }
  }, [inView, controls, index]); // Ensure this useEffect runs when `inView` or `index` changes

  return (
    <motion.div
      ref={ref} // Add the `ref` to track when this component is in view
      className="flex flex-col md:flex-row items-start md:items-center mx-auto max-w-4xl"
      initial={{ opacity: 0, translateY: 50 }}
      whileInView={{ opacity: 1, translateY: 0 }}
      exit={{ opacity: 0, translateY: 50 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: false, amount: 0.5 }} // Ensures it reacts to both scroll directions
    >
      {/* Step Number */}
      <div className="bg-gradient-to-r from-blue-900 via-blue-600 to-blue-400 bg-clip-text text-transparent text-7xl font-bold mb-4 md:mb-0 md:mr-8">
        {step}
      </div>

      {/* Line with background and animated fill */}
      <div className="relative w-1 h-64 mx-8">
        {/* Static background line */}
        <div className="absolute top-0 left-0 w-full h-full bg-blue-200"></div>
        {/* Animated fill line */}
        <motion.div
          className="absolute top-0 left-0 w-full bg-gradient-to-r from-blue-900 via-blue-600 to-blue-400"
          initial={{ height: 0 }}
          animate={controls} // Control the animation with the `controls` object
        ></motion.div>
      </div>

      {/* Content */}
      <div className="flex-1">
        <h3 className="text-2xl text-blue-500 font-semibold mb-2">{title}</h3>
        <h2 className="text-gray-400 text-lg  mb-1">{subtitle}</h2>
      </div>
    </motion.div>
  );
};
export default Home