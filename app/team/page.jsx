"use client";

import React, { useState } from "react";
import {
  Users,
  Code,
  Globe,
  Share2,
  Palette,
  Calendar,
  ChevronDown,
} from "lucide-react";

export default function Team() {
  const [expandedTeam, setExpandedTeam] = useState(null);

  const leadership = [
    { title: "President", name: "Milind Verma" },
    { title: "Vice President", name: "Priyanshu" },
    { title: "General Secretary", name: "Abhiraj Arya" },
    { title: "Joint Secretary", name: "Yashvi Kumar" },
    { title: "Joint Secretary", name: "Nikhil" },
    { title: "Treasurer", name: "Jai Kishan" },
  ];

  const teams = [
    {
      name: "Tech Team",
      icon: Code,
      leads: ["Utkarsh Shrivastava", "AbuBakr Niazi"],
      members: [
        "Sankalp Tripathi",
        "Ravikant Mishra",
        "Aniket Bose",
        "Kuldeep Choudhary",
        "Katragadda Bhavesh",
        "Shailesh Yalamanch",
        "Shatabdi Singh",
        "Samriddhi Tyagi",
        "Aryaman Jha",
      ],
    },
    {
      name: "Web Team",
      icon: Globe,
      leads: ["Umair Malik"],
      members: [
        "Aditya Anil Tiwari",
        "Tushar Kalyani",
        "Naman Choudhary",
        "Jhanvi Verma",
        "Nikhil Tiwari",
      ],
    },
    {
      name: "Social Media",
      icon: Share2,
      leads: ["Vanshika"],
      members: [
        "Dheera Saraswat",
        "Sarthak Patel",
        "Gaurav Sharma",
        "Sia Upadhyay",
        "Ayushi Chouhan",
        "Nitya Khandelwal",
      ],
    },
    {
      name: "Design & Content",
      icon: Palette,
      leads: ["Disha Sengar"],
      members: [
        "Nupur Shah",
        "Shambhavi Bajpai",
        "Shaurya Gupta",
        "Adishree Panda",
        "Shashank Kumar",
        "Sarah Sherwani",
        "Sneha Gayatri Vageti",
        "Ansh Kumar Prasad",
      ],
    },
    {
      name: "Event Team",
      icon: Calendar,
      leads: ["Dev Vyawahare"],
      members: [
        "Rushikesh M. Ingale",
        "Priyanka Singh",
        "Arpan Aggarwal",
        "Samiksha V. Wanjari",
        "Kanishka Arora",
        "Priyanshu Yadav",
        "Ayush Singh Chandel",
        "Vaishnavi Gupta",
        "Aryan Sharma",
        "Syed Haidar Abbas",
        "Anjistha Sharma",
        "Krish Blsan",
        "Yug Wankhede",
        "Aditya Saini",
        "Vinita Sharma",
        "Sujal Chikara",
        "Mohammed Sufyan Khan",
        "Khushi Chauhan",
        "Kavya Singh",
        "Misthi Singh",
      ],
    },
  ];

  const toggleTeam = (index) => {
    setExpandedTeam(expandedTeam === index ? null : index);
  };

  return (
    <div className="min-h-screen text-gray-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Our Team
          </h1>
          <p className="text-white-400 text-lg font-mono">
            Meet the people behind our success
          </p>
        </div>

        {/* Leadership Section */}
        <div className="mb-16">
          <div className="flex items-center mb-8">
            <Users className="w-8 h-8 text-white-400 mr-3" />
            <h2 className="text-3xl font-bold text-white">Leadership</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {leadership.map((leader, idx) => (
              <div
                key={idx}
                className="border border-white/20 rounded-lg p-6  "
              >
                <p className="text-white-200 text-md font-medium mb-2">
                  {leader.title}
                </p>
                <p className="text-white text-2xl font-semibold">
                  {leader.name}
                </p>
              </div>
            ))}
          </div>
        </div>

        <img
          src="hacksecure.jpeg"
          className=" w-[90%] rounded-4xl mx-auto mb-16"
          alt="cyber"
        />

        {/* Teams Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-white mb-2">Teams</h2>
          <p className="text-gray-400 mb-8">
            Click on any team to view members
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teams.map((team, idx) => {
            const Icon = team.icon;
            const isExpanded = expandedTeam === idx;

            return (
              <div
                key={idx}
                className={`border border-white/20 rounded-lg overflow-hidden transition-all duration-300 ${
                  isExpanded ? "md:col-span-2 lg:col-span-3" : ""
                }`}
              >
                {/* Card Header - Clickable */}
                <button
                  onClick={() => toggleTeam(idx)}
                  className="w-full p-6 flex items-center justify-between hover:bg-white/10 transition-colors"
                >
                  <div className="flex items-center">
                    <Icon className="w-8 h-8 text-white-400 mr-4" />
                    <div className="text-left">
                      <h3 className="text-xl font-bold text-white">
                        {team.name}
                      </h3>
                      <p className="text-gray-400 text-sm mt-1">
                        {team.leads.length + team.members.length} members
                      </p>
                    </div>
                  </div>
                  <ChevronDown
                    className={`w-6 h-6 text-gray-400 transition-transform duration-300 ${
                      isExpanded ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Expanded Content */}
                {isExpanded && (
                  <div className="border-t border-white/20 p-6 ">
                    {/* Team Leads */}
                    <div className="mb-6">
                      <p className="text-sm font-semibold text-white-400 mb-3">
                        {team.leads.length > 1 ? "Leads" : "Lead"}
                      </p>
                      <div className="flex flex-wrap gap-3">
                        {team.leads.map((lead, leadIdx) => (
                          <span
                            key={leadIdx}
                            className="px-4 py-2 bg-white/5 border border-white/20 rounded-full text-white-300 font-medium"
                          >
                            {lead}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Team Members */}
                    <div>
                      <p className="text-sm font-semibold text-white-400 mb-3">
                        Members
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
                        {team.members.map((member, memberIdx) => (
                          <div
                            key={memberIdx}
                            className="px-4 py-2 border border-white/20 rounded-lg text-white-300"
                          >
                            {member}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
