import React from "react";
import { Link } from "react-router-dom";  
import FoundationLogo from "../assets/logo-white.jpeg";
import mission from "../assets/images/mission.png";
import activity from "../assets/images/activity.avif";
import v1 from '../assets/videos/bhai.mp4';
import founder from "../assets/images/founder.png";

const About = () => {
  return (
    <div className="container mx-auto p-6 mt-[60px]">
      <section id="about" className="mb-12">
        <h2 className="text-4xl font-semibold mb-4">
          Who{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-orange-500 via-yellow-500 via-green-500 via-blue-500 via-indigo-500 to-purple-500">
            We
          </span>{" "}
          Are
        </h2>
        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          <img
            src={FoundationLogo}
            alt="Foundation Logo"
            className=" lg:h-[100px] rounded-md mb-4"
          />
          <p className="text-lg text-gray-700">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-orange-500 via-yellow-500 via-green-500 via-blue-500 via-indigo-500 to-purple-500">
              Dahisar Yuva Shakti Foundation
            </span> is dedicated to empowering youth and
            uplifting communities. Our goal is to create a platform for youth
            development, social welfare, and education.
          </p>
        </div>
      </section>

      <section id="mission" className="mb-12">
        <h2 className="text-4xl font-semibold mb-4">Our{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-orange-500 via-yellow-500 via-green-500 via-blue-500 via-indigo-500 to-purple-500">
            Mission
          </span>
        </h2>
        <div className="bg-blue-50 p-6 rounded-lg shadow-md">
          <img
            src={mission}
            alt="Mission Icon"
            className="w-16 h-16 mb-4"
          />
          <p className="text-lg text-gray-700">
            Our mission is to{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-orange-500 via-yellow-500 via-green-500 via-blue-500 via-indigo-500 to-purple-500">
              empower the youth, provide educational
            </span>
            opportunities, and contribute to the social development of our
            community.
          </p>
        </div>
      </section>

      <section id="activities" className="mb-12">
        <h2 className="text-4xl font-semibold mb-4">What We{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-orange-500 via-yellow-500 via-green-500 via-blue-500 via-indigo-500 to-purple-500">
            Do
          </span>
        </h2>
        <div className="bg-green-50 p-6 rounded-lg shadow-md">
          <img
            src={activity}
            alt="Activities Icon"
            className="w-16 h-16 mb-4"
          />
          <p className="text-lg text-gray-700">
            We run{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-orange-500 via-yellow-500 via-green-500 via-blue-500 via-indigo-500 to-purple-500">
              educational programs, health awareness campaigns,
            </span>
            and youth development initiatives to bring positive change.
          </p>
        </div>
      </section>

      <section id="impact" className="mb-12">
        <h2 className="text-4xl font-semibold mb-4">Our Impact</h2>
        <div className="bg-yellow-50 p-6 rounded-lg shadow-md">
          <p className="text-lg text-gray-700 mb-4">
            We have impacted hundreds of families through our initiatives,
            providing access to education and healthcare to the underserved
            communities.
          </p>
          <video controls className="w-full h-[50vh] mb-4">
            <source src={v1} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <a
      href="https://www.instagram.com/___nitz__________?igsh=MXVuZzdxN3Y2dzE1Mw=="
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-black hover:bg-blue-500 transition inline-block bg-blue-600 text-white py-2 px-4 rounded-lg"
    >
      Join Us in Making a Difference
    </a>
        </div>
      </section>

      <section id="founder" className="mb-12">
        <h2 className="text-4xl font-semibold mb-4">
          Founder <span className="text-2xl text-gray-500">of</span> <p className="text-gray-400 text-sm">(<span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-orange-500 via-yellow-500 via-green-500 via-blue-500 via-indigo-500 to-purple-500">
            Dahisar Yuva Shakti Foundation
          </span>)</p> Bipin Maurya
        </h2>
        <div className="flex flex-col items-center md:flex-row gap-6 bg-gray-100 p-6 rounded-lg shadow-md">
          <img
            src={founder}
            alt="Bipin Maurya"
            className="w-48 h-48 rounded-full mb-4 md:mb-0 shadow-2xl"
          />
          <div className="text-lg text-gray-700">
            <p className="mb-4">
              <span>Hey there!</span> {""},
              I'm{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-orange-500 via-yellow-500 via-green-500 via-blue-500 via-indigo-500 to-purple-500">
                Bipin Maurya
              </span>
              , and I am the proud founder of{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-orange-500 via-yellow-500 via-green-500 via-blue-500 via-indigo-500 to-purple-500">
                Dahisar Yuva Shakti Foundation
              </span>
              . I started this journey to empower youth and create lasting change in our community.
            </p>
            <p className="mb-4">
              It all began when I realized the untapped potential in our
              community and the pressing need for educational and social
              empowerment. I founded this foundation to be a beacon of hope and
              create an inclusive society where every youth can thrive.
            </p>
            <p>
              Starting this foundation wasn’t easy, but seeing the community's
              response and the positive changes we’ve brought to so many lives
              has made every challenge worthwhile.
            </p>
          </div>
        </div>
      </section>

      <section id="join" className="mb-12">
        <h2 className="text-4xl font-semibold mb-4">Get Involved</h2>
        <div className="bg-pink-50 p-6 rounded-lg shadow-md">
          <p className="text-lg text-gray-700">
            Join our mission! Whether you’re a volunteer, donor, or partner,
            your support is crucial to our success. Together, we can make a
            greater impact.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-blue-600 text-white py-2 px-4 rounded-lg mt-4"
          >
            Contact Us to Get Involved
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;
