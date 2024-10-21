import React from "react";
import Tilt from "react-parallax-tilt";

import { projects } from "../components/constants";
import myGif from "../pages/";

const ProjectCard = ({ name, description, tags, image, source_code_link }) => {
  return (
    <Tilt
      options={{
        max: 45,
        scale: 1,
        speed: 450,
      }}
      className="bg-primary p-5 rounded-2xl sm:w-[360px] w-full"
    >
      <div className="relative w-full h-[230px]">
        <img
          src={image}
          alt="project_image"
          className="w-full h-full object-cover rounded-2xl"
        />

        <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
          <div
            onClick={() => window.open(source_code_link, "_blank")}
            className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
          >
            <img
              src={"https://s3.brilliant.com.bd/leion_portfolio/github.png"}
              alt="source code"
              className="w-1/2 h-1/2 object-contain"
            />
          </div>
        </div>
      </div>

      <div className="mt-5">
        <h3 className="text-white font-bold text-[24px]">{name}</h3>
        <p className="mt-2 text-secondary text-[14px]">{description}</p>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <p
            key={`${name}-${tag.name}`}
            className={`text-[14px] text-secondary`}
          >
            #{tag.name}
          </p>
        ))}
      </div>
    </Tilt>
  );
};

const Works = () => {
  return (
    <div className="max-w-6xl mx-auto mt-20">
      <p className="text-3xl font-semibold mb-6 text-secondary">My Projects</p>
      <div className="w-full flex">
        <p className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]">
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {/* {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))} */}
        <div>
          <p className="text-3xl font-semibold mb-16 text-secondary">
            Brilliant Drive
          </p>
          <video autoPlay loop muted playsInline>
            <source
              src="https://s3.brilliant.com.bd/leion_portfolio/gifs/brilliant%20frive.mp4"
              type="video/webm"
            />
            Your browser does not support the video tag.
          </video>
          <p className="text-gray-300 text-[19px]  leading-[30px] mt-20">
            Implemented OTP-based login, facilitated package purchase, and
            enabled users to perform file management tasks (create new folders,
            upload single/multiple files, copy, move, share, rename, download,
            preview, and delete). Implemented a robust file search functionality
            allowing users to search for files in any directory and tracked user
            storage usage in Brilliant Connect drive system.
          </p>
        </div>

        <div>
          <p className="text-3xl font-semibold mb-16 text-secondary">
            Autoscale as a Service in Brilliant Cloud Portal
          </p>
          <video autoPlay loop muted playsInline>
            <source
              src="https://s3.brilliant.com.bd/leion_portfolio/gifs/autoscale.mp4"
              type="video/webm"
            />
            Your browser does not support the video tag.
          </video>
          <p className="text-gray-300 text-[19px]  leading-[30px] mt-20">
            Autoscale as a Service in the Brilliant Cloud Portal allows
            applications to automatically adjust their resources based on
            real-time demand. By monitoring key performance metrics like CPU
            usage, memory consumption, and traffic loads, the autoscaling
            feature dynamically adds or removes virtual instances to ensure
            optimal performance and cost-efficiency. This ensures that
            applications remain highly available and responsive, even during
            traffic spikes, while preventing unnecessary over-provisioning of
            resources during low-demand periods. The service is fully integrated
            into the Brilliant Cloud ecosystem, offering seamless configuration
            and real-time scaling for both web and backend services.
          </p>
        </div>

        <div>
          <p className="text-3xl font-semibold mb-16 text-secondary">
            Brilliant Admin Portal
          </p>
          <video autoPlay loop muted playsInline>
            <source
              src="https://s3.brilliant.com.bd/leion_portfolio/gifs/admin.mp4"
              type="video/webm"
            />
            Your browser does not support the video tag.
          </video>
          <p className="text-gray-300 text-[19px]  leading-[30px] mt-20">
            The Brilliant Cloud Admin Portal is a centralized management
            interface designed for administrators to monitor, configure, and
            manage cloud resources efficiently. It provides a user-friendly
            dashboard that offers real-time insights into system performance,
            resource usage, and application health. The portal includes powerful
            features such as user access controls, billing management,
            autoscaling configurations, and detailed analytics. Administrators
            can easily deploy and scale applications, manage virtual machines,
            set up alerts, and monitor cloud services, all within a secure and
            highly customizable environment.
          </p>
        </div>
        <div>
          <p className="text-3xl font-semibold mb-16 text-secondary">
            Brilliant Connect App Ticketing Portal
          </p>
          <video autoPlay loop muted playsInline>
            <source
              src="https://s3.brilliant.com.bd/leion_portfolio/gifs/connect-ticketing.mp4"
              type="video/webm"
            />
            Your browser does not support the video tag.
          </video>
          <p className="text-gray-300 text-[19px]  leading-[30px] mt-20">
            The Brilliant Connect App Ticketing Portal is a comprehensive
            platform for managing customer support and service requests
            efficiently. It allows users to submit, track, and manage tickets
            related to technical issues, inquiries, or service requests within
            the Brilliant Connect ecosystem.
          </p>
        </div>

        <div>
          <p className="text-3xl font-semibold mb-16 text-secondary">
            Brilliant S3 Service
          </p>
          <video autoPlay loop muted playsInline>
            <source
              src="https://s3.brilliant.com.bd/leion_portfolio/gifs/storage%20s3.mp4"
              type="video/webm"
            />
            Your browser does not support the video tag.
          </video>
          <p className="text-gray-300 text-[19px]  leading-[30px] mt-20">
            Brilliant S3 is a highly scalable, secure, and durable object
            storage service designed for storing and managing large amounts of
            data in the cloud. Whether for backups, data archiving, or serving
            static content, Brilliant S3 offers seamless integration with
            applications and supports a variety of data types such as images,
            videos, documents, and logs. With advanced features like versioning,
            encryption, and access control policies, users can ensure their data
            is both protected and easily accessible.
          </p>
        </div>

        <div>
          <p className="text-3xl font-semibold mb-16 text-secondary">
            Intercloud Landing Page
          </p>
          <video autoPlay loop muted playsInline>
            <source
              src="https://s3.brilliant.com.bd/leion_portfolio/gifs/intercloud.mp4"
              type="video/webm"
            />
            Your browser does not support the video tag.
          </video>
          <p className="text-gray-300 text-[19px]  leading-[30px] mt-20">
            The Intercloud Landing Page, built using Next.js, is a fast,
            SEO-optimized, and responsive web interface that highlights the core
            features and services of Intercloud. Designed with a modern and
            intuitive layout, the landing page provides seamless navigation and
            dynamic content rendering through server-side and static generation
            capabilities of Next.js.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Works;
