import React from 'react';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';
import { MdOutlineQuiz } from "react-icons/md";
import { GrResources } from "react-icons/gr";

export const SidebarData = [
    {
        title: 'Home',
        path: '/home',
        icon: <AiIcons.AiFillHome/>,
        iconClosed: <RiIcons.RiArrowDownSFill/>,
        iconOpened: <RiIcons.RiArrowUpSFill/>,
        
    }, 
  { 
        title: 'Quiz',
        path: '/quiz',
        icon: <IoIcons.IoIosPaper/>
    }
,{
        title: 'Exam',
        path: '/exam',
        icon: <MdOutlineQuiz/>,
        iconClosed: <RiIcons.RiArrowDownSFill/>,
        iconOpened: <RiIcons.RiArrowUpSFill/>,
        subNav: [
            {
                title: 'Exam 1',
                path: '/exam/exam1',
                icon: <IoIcons.IoIosPaper/>
            }, {
                title: 'Exam 2',
                path: '/exam/exam2',
                icon: <IoIcons.IoIosPaper/>
            }, {
                title: 'Exam 3',
                path: '/exam/exam3',
                icon: <IoIcons.IoIosPaper/>
            }
        ]
    }, {
        title: 'About',
        path: '/about',
        icon: <IoIcons.IoMdPeople/>
    }, {
        title: 'Resources',
        path: '/resources',
        icon: <GrResources/>
    }
]