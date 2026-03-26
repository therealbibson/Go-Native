import React from "react";
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";

interface TeamMember {
  name: string;
  role: string;
  image: string;
  twitter: string;
  linkedin: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Robert Zaremba",
    role: "Co-Founder & Tech Lead",
    image: "/cofounder1.jpg",
    twitter: "",
    linkedin: "",
  },
  {
    name: "Siva Sagiraju",
    role: "Co-Founder & Marketing Lead",
    image: "/cofounder2.jpg",
    twitter: "",
    linkedin: "",
  },
  {
    name: "João Fernandes",
    role: "BD & Partnerships Lead",
    image: "/bd.jpg",
    twitter: "",
    linkedin: "",
  },
  {
    name: "Melvin Imobeke",
    role: "Social Media & Content Lead",
    image: "/socialmedia.jpg",
    twitter: "",
    linkedin: "",
  },
  {
    name: "Stanisalw Czembor",
    role: "Software Engineer",
    image: "/softwareengr1.jpg",
    twitter: "",
    linkedin: "",
  },
  {
    name: "Thanh Vu Vo",
    role: "Software Engineer",
    image: "/softwareengr2.jpg",
    twitter: "",
    linkedin: "",
  },
  {
    name: "Rayane Charif Chefchaouni",
    role: "Full-stack Developer",
    image: "/fullstackdev1.webp",
    twitter: "",
    linkedin: "",
  },
  {
    name: "Ravindra Kumar Meena",
    role: "Full-stack Developer",
    image: "/fullstackdev2.jpg",
    twitter: "",
    linkedin: "",
  },
  {
    name: "Matthew Mappin",
    role: "Strategic Partnerships",
    image: "/strategicpartnership.webp",
    twitter: "",
    linkedin: "",
  },
  // Add more team members here
];

const NativeTeam = () => {
  return (
    <div className="text-white">
      <h1 className="text-3xl font-bold text-center m-10 pt-20">
        Native <span className="text-[#f88929]">Team</span>
      </h1>

      <div className="grid grid-cols-3 gap-5 px-[50px]">
        {teamMembers.map((member, index) => (
          <div key={index} className="flex flex-col items-center gap-5 rounded-[30px] py-[32px] px-[16px] bg-[#11141c] w-[407.66px]">
            <img
              className="h-[96px] w-[96px] rounded-full"
              src={member.image}
              alt={member.name}
            />
            <div className="flex gap-2 items-center font-bold text-[18px]">
              <p>{member.name}</p>
              <a href={member.twitter}>
                <BsTwitterX />
              </a>
              <a href={member.linkedin}>
                <FaLinkedin />
              </a>
            </div>
            <p className="font-bold">{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NativeTeam;
