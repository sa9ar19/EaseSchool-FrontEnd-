import React from 'react'
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { Link } from 'react-router-dom'

import GridViewRoundedIcon from '@mui/icons-material/GridViewRounded';
import SchoolRoundedIcon from '@mui/icons-material/SchoolRounded';
import GroupRoundedIcon from '@mui/icons-material/GroupRounded';
import LibraryBooksRoundedIcon from '@mui/icons-material/LibraryBooksRounded';
import FeedIcon from '@mui/icons-material/Feed';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import CalculateIcon from '@mui/icons-material/Calculate';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import ClassIcon from '@mui/icons-material/Class';
import HailIcon from '@mui/icons-material/Hail';
import MenuIcon from '@mui/icons-material/Menu';

export const AdminSideBar = () => {

    const [collapsed, setCollapsed] = React.useState(false);


  return (
    <div>

        <div style={{ display: 'flex', height: '100%', minHeight: '400px' }}>

        <Sidebar className='admin-sidebar'  collapsed={collapsed}>
            
        <Menu className='sidebar-menu'>
            <div className='sidebar-hamburger' icon={<MenuIcon onClick={() => setCollapsed(!collapsed)}></MenuIcon>}>

                    <button onClick={() => setCollapsed(!collapsed)}> <MenuIcon/> </button>
                    <h1>Ease School</h1>
                
            </div>

            <MenuItem icon={<GridViewRoundedIcon></GridViewRoundedIcon>} className=''>
                DashBoard
            </MenuItem>
            <SubMenu label="Teachers" icon={<HailIcon></HailIcon>}>
                <MenuItem component={<Link to="/allTeachers" />}> 
                        All Teachers
                </MenuItem>
                <MenuItem component={<Link to="/addTeachers" />}> 
                    Add Teacher 
                </MenuItem>
                <MenuItem component={<Link to="/editTeachers" />}> 
                    Edit Teacher 
                </MenuItem>
            </SubMenu>
            <SubMenu label="Students" icon={<SchoolRoundedIcon></SchoolRoundedIcon>}>
                <MenuItem component={<Link to="/allStudents" />}> 
                    All Students 
                </MenuItem>
                <MenuItem component={<Link to="/addStudents" />}> 
                    Add Student 
                </MenuItem>
                <MenuItem component={<Link to="/editStudents" />}> 
                    Edit Student 
                </MenuItem>
            </SubMenu>
            <SubMenu label="Parents" icon={<GroupRoundedIcon></GroupRoundedIcon>}>
                <MenuItem component={<Link to="/allParents" />}> 
                    All Parents 
                </MenuItem>
                <MenuItem component={<Link to="/addParents" />}> 
                    Add Parent 
                </MenuItem>
                <MenuItem component={<Link to="/editParents" />}> 
                    Edit Parent 
                </MenuItem>
            </SubMenu>
            <SubMenu label="Library" icon={<LibraryBooksRoundedIcon></LibraryBooksRoundedIcon>}>
                <MenuItem component={<Link to="/addBook" />}> 
                    Add new Book 
                </MenuItem>
                <MenuItem component={<Link to="/searchBook" />}> 
                    Search Books 
                </MenuItem>
            </SubMenu>
            <SubMenu label="Class" icon={<ClassIcon></ClassIcon>}>
                <MenuItem component={<Link to="/allClass" />}> 
                    All Class 
                </MenuItem>
                <MenuItem component={<Link to="/addClass" />}> 
                    Add new Class 
                </MenuItem>
            </SubMenu>
            <SubMenu label="Subjects" icon={<ImportContactsIcon></ImportContactsIcon>}>
                <MenuItem component={<Link to="/allSubjects" />}> 
                    All Subjects 
                </MenuItem>
                <MenuItem component={<Link to="/addSubjects" />}> 
                    Add new Subject 
                </MenuItem>
            </SubMenu>
            <SubMenu label="Account" icon={<CalculateIcon></CalculateIcon>}>
                <MenuItem 
                    component={<Link to="/debits" />}> 
                        Debits 
                </MenuItem>
                <MenuItem 
                    component={<Link to="/Credits" />}> 
                        Credits
                </MenuItem>
                <MenuItem 
                    component={<Link to="/feeStructure" />}> 
                        Fee Structure 
                </MenuItem>
            </SubMenu>
            <MenuItem 
                icon={<CalendarMonthIcon></CalendarMonthIcon>} 
                component={<Link to="/calendar" />}> 
                    Calendar 
            </MenuItem>
            <MenuItem 
                icon={<FeedIcon></FeedIcon>} 
                component={<Link to="/calendar" />}> 
                    Notice 
            </MenuItem>
        </Menu>
        </Sidebar>

        </div>
    </div>
  )
}
